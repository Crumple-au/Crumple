import mongoose from 'mongoose'

const artworkSchema = new mongoose.Schema(
<<<<<<< HEAD
    {
        name: { type: String, required: true},
        image: {type: String },
        description: { type: String, maxlength: 250, trim: true },
        price: { type: Number, required: true },
        inStock: { type: Number, required: true },
        seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
        category: { type: String, ref: 'Category', required: true  }
    },
    {
        timestamps: true,
    }
);
const Artwork = mongoose.model('Artwork', artworkSchema);
export default Artwork;
=======
  {
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String, maxlength: 250, trim: true },
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
>>>>>>> 70259abdd99038e1583471046e36b9c84107d146
