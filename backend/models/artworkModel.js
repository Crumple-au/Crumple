import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const artworkSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String, maxlength: 500, trim: true },
    price: { type: Number, required: true },
    inStock: { type: Number, required: true },
    seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    category: { type: String, required: true },
    reviews: [reviewSchema]
  },
  {
    timestamps: true,
  }
)
const Artwork = mongoose.model('Artwork', artworkSchema)
export default Artwork
