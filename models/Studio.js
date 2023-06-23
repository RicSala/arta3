import mongoose from 'mongoose';

const { Schema, model } = mongoose;



const studioSchema = new Schema({
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
    styles: {
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
    artists: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
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


let Studio;

if (!mongoose.models || !mongoose.models.Studio) {
    Studio = model('Studio', studioSchema);
} else {
    Studio = mongoose.models.Studio;
}


export default Studio;