import mongoose from 'mongoose'

const artworkSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String, maxlength: 500, trim: true },
    price: { type: Number, required: true },
    inStock: { type: Number, required: true },
    seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    category: { type: String, ref: 'Category', required: true },
  },
  {
    timestamps: true,
  }
)
const Artwork = mongoose.model('Artwork', artworkSchema)
export default Artwork
