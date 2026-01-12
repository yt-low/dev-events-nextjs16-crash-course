import mongoose, { Document, Schema } from 'mongoose';

// Interface for type-safe Event document
interface IEvent extends Document {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: 'online' | 'offline' | 'hybrid';
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Helper to convert title to URL-friendly slug
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Remove multiple hyphens
};

// Helper to validate and normalize ISO date format
const normalizeDate = (date: string): string => {
  const parsed = new Date(date);
  if (isNaN(parsed.getTime())) {
    throw new Error('Invalid date format');
  }
  return parsed.toISOString().split('T')[0];
};

// Helper to validate time format (HH:MM)
const normalizeTime = (time: string): string => {
  const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
  if (!timeRegex.test(time)) {
    throw new Error('Time must be in HH:MM format');
  }
  return time;
};

const eventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters'],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      minlength: [10, 'Description must be at least 10 characters'],
    },
    overview: {
      type: String,
      required: [true, 'Overview is required'],
    },
    image: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    venue: {
      type: String,
      required: [true, 'Venue is required'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
    },
    date: {
      type: String,
      required: [true, 'Date is required'],
    },
    time: {
      type: String,
      required: [true, 'Time is required'],
    },
    mode: {
      type: String,
      enum: {
        values: ['online', 'offline', 'hybrid'],
        message: 'Mode must be online, offline, or hybrid',
      },
      required: [true, 'Mode is required'],
    },
    audience: {
      type: String,
      required: [true, 'Audience is required'],
    },
    agenda: {
      type: [String],
      required: [true, 'Agenda is required'],
      validate: {
        validator: (arr: string[]) => arr.length > 0,
        message: 'Agenda must contain at least one item',
      },
    },
    organizer: {
      type: String,
      required: [true, 'Organizer is required'],
    },
    tags: {
      type: [String],
      required: [true, 'Tags are required'],
      validate: {
        validator: (arr: string[]) => arr.length > 0,
        message: 'Tags must contain at least one item',
      },
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook: auto-generate slug and normalize date/time
eventSchema.pre('save', function () {
  // Generate slug only if title is new or modified
  if (this.isModified('title')) {
    this.slug = generateSlug(this.title);
  }

  // Normalize date to ISO format (YYYY-MM-DD)
  if (this.isModified('date')) {
    this.date = normalizeDate(this.date);
  }

  // Normalize time to HH:MM format
  if (this.isModified('time')) {
    this.time = normalizeTime(this.time);
  }
});

// Export model with proper typing
export const Event =
  mongoose.models.Event ||
  mongoose.model<IEvent>('Event', eventSchema);

export type { IEvent };
