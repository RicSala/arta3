import mongoose from 'mongoose';

const { Schema, model } = mongoose;


const tattooSchema = new Schema({
    title: {
        type: String,
        required: [true, 'El título es obligatorio'],
        unique: true,
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
    },
    images: {
        type: [String],
        required: [true, 'La imagen es obligatoria'],
    },
    style: {
        type: String,
        enum: {
            values: ['Hiper-realismo', 'otro1', 'otro2', 'otro3'],
            message: '{VALUE} no es un genero válido'
        },
        default: 'Hiper-realismo'
    },

    tags: {
        type: [String],
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'El autor es obligatorio'],
    },


    comments: {
        type: [{
            user: String,
            comment: String,
            createdAt: Date,
        }],
        default: [],
    },

    likes: {
        type: Number,
        default: 0,
    },


}, {
    timestamps: true,
}
)


let Tattoo;

if (!mongoose.models || !mongoose.models.Tattoo) {
    Tattoo = model('Tattoo', tattooSchema);
} else {
    Tattoo = mongoose.models.Tattoo;
}


export default Tattoo;

