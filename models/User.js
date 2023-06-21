import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre de usuario es obligatorio'],
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: [true, 'El email ya existe'],
    },
    city: {
        type: String,
        required: [true, 'La ciudad es obligatoria'],
    },

    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        minlength: [6, 'La contraseña debe tener al menos 6 caracteres'],
    },

    confirmPassword: {
        type: String,
        required: [true, 'La confirmación de contraseña es obligatoria'],
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: 'Las contraseñas no coinciden',
        },
    },

    role: {
        type: String,
        enum: {
            values: ["artist", "user", "admin"],
            message: '{VALUE} no es un rol válido'
        },
        default: 'user'
    },

    profilePic: {
        type: String,
        default: ''
    },

    bio: {
        type: String,
        maxlength: [500, 'La biografía no puede tener más de 500 caracteres'],
    },

    styles: {
        type: [String], //enum de estilos
        enum: {
            values: ["Hiper-realismo", "Realismo", "Semi-realismo", "Ilustración", "Tatuaje", "Otros"],
            message: '{VALUE} no es un estilo válido'
        },
    },

    // array of objects with links to social media
    socialMedia: {
        type: [{
            name: {
                type: String,
                enum: {
                    values: ["Instagram", "Facebook", "Twitter", "Youtube", "Twitch", "TikTok", "Otro"],
                    message: '{VALUE} no es una red social válida'
                },
            },
            link: {
                type: String,
                // required: [true, 'El link es obligatorio'],
            },
        }],
    },

    // array of objects with prices: perHour, perSession, minimumPrice
    pricing: {
        type: [{
            name: {
                type: String,
                enum: {
                    values: ["Por hora", "Por sesión", "Precio mínimo"],
                    message: '{VALUE} no es un tipo de precio válido'
                },
            },
            price: {
                type: Number,
                // required: [true, 'El precio es obligatorio'],
            },
        }],
    },

    tags: {
        type: [String],
    },

});


let User;

if (!mongoose.models || !mongoose.models.User) {
    User = model('User', UserSchema);
} else {
    User = mongoose.models.User;
}

export default User;