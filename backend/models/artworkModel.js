import mongoose from 'mongoose';

const artworkSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
        category: { type: String, required: true },
        description: { type: String, maxlength: 250, trim: true },
        price: { type: Number, required: true },
        inStock: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);
const Artwork = mongoose.model('Artwork', artworkSchema);
export default Artwork;