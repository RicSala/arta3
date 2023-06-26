import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const listingSchema = new Schema({
    title: {
        type: String,
        required: [true, 'El título es obligatorio'],
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
    },
    imageSrc: {
        type: String,
        required: [true, 'La imagen es obligatoria'],
    },
    category: {
        type: String, // TODO: This should be an enum
        required: [true, 'La categoría es obligatoria'],
    },
    roomCount: {
        type: Number,
        required: [true, 'El número de habitaciones es obligatorio'],
    },
    bathroomCount: {
        type: Number,
        required: [true, 'El número de baños es obligatorio'],
    },
    roomCount: {
        type: Number,
        required: [true, 'El número de habitaciones para huéspedes es obligatorio'],
    },
    locationValue: {
        type: String,
        required: [true, 'La ubicación es obligatoria'],
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'El usuario es obligatorio'],
    },
    price: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
    },

}, {
    timestamps: true,
}
)


let Listing;

if (!mongoose.models || !mongoose.models.Listing) {
    Listing = model('Listing', listingSchema);
} else {
    Listing = mongoose.models.Listing;
}


export default Listing;