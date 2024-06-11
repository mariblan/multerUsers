import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
    },
    image_url: {
      type: String,
    },
  },
  { collection: 'users' }
);

export default mongoose.model('User', userSchema);
