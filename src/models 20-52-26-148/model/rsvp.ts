import mongoose, { Schema, Document } from 'mongoose';

export interface IRSVP extends Document {
  name: string;
  attending: boolean;
  message?: string;
  createdAt: Date;
}

const rsvpSchema: Schema = new Schema({
  name: { type: String, required: true },
  attending: { type: Boolean, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IRSVP>('RSVP', rsvpSchema);
