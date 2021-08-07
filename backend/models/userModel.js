import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        password: { type: String, required: true, trim: true  },
        description: { type: String, maxlength: 140, trim: true },
        image: { type: String, required: true, default: '/images/noAvatar.jpg' },
        isAdmin: { type: Boolean, default: false, required: true },
        isSeller: { type: Boolean, default: false, required: true },
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model('User', userSchema);
export default User;