import mongoose from 'mongoose';

// Extend global namespace to include mongoose cache
declare global {
  var mongoose: CachedConnection | undefined;
}

// Type definition for cached connection to prevent multiple connections
interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Initialize cached connection in global scope
// This prevents multiple connections during development with hot reloading
const cached: CachedConnection = global.mongoose || {
  conn: null,
  promise: null,
};

// Store in global to persist across hot reloads
if (!global.mongoose) {
  global.mongoose = cached;
}

/**
 * Establishes a connection to MongoDB using Mongoose
 * Returns cached connection if already established
 * @returns Promise<typeof mongoose> - Mongoose instance
 * @throws Error if MONGODB_URI is not set or connection fails
 */
async function connectDB(): Promise<typeof mongoose> {
  // Return existing connection if available
  if (cached.conn) {
    return cached.conn;
  }

  // Return pending promise if connection is in progress
  if (cached.promise) {
    return cached.promise;
  }

  // Get MongoDB URI from environment variables
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error('Please define MONGODB_URI environment variable');
  }

  // Create connection promise and cache it
  cached.promise = mongoose.connect(mongoUri, {
    bufferCommands: false,
  });

  try {
    // Wait for connection and cache the result
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    // Clear promise on error to allow retry
    cached.promise = null;
    throw error;
  }
}

export default connectDB;
