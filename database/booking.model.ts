import mongoose, { Document, Schema } from 'mongoose';
import { Event } from './event.model';

// Interface for type-safe Booking document
interface IBooking extends Document {
  eventId: mongoose.Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const bookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: [true, 'Event ID is required'],
      index: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      validate: {
        validator: (email: string) => emailRegex.test(email),
        message: 'Please provide a valid email address',
      },
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook: validate that the referenced event exists
bookingSchema.pre('save', async function () {
  // Only validate if eventId is modified
  if (this.isModified('eventId')) {
    const event = await Event.findById(this.eventId);
    if (!event) {
      throw new Error('Referenced event does not exist');
    }
  }
});

// Export model with proper typing
export const Booking =
  mongoose.models.Booking ||
  mongoose.model<IBooking>('Booking', bookingSchema);

export type { IBooking };
