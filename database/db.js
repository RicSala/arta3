// import mongoose from 'mongoose';

// /**
//  * 0 = disconnected
//  * 1 = connected
//  * 2 = connecting
//  * 3 = disconnecting
//  */
// const mongoConnection = {
//     isConnected: 0
// }

// export const connect = async () => {

//     if (mongoConnection.isConnected) {
//         console.log('We were already connected to MongoDB');
//         return;
//     }

//     if (mongoose.connections && mongoose.connections.length > 0) {
//         mongoConnection.isConnected = mongoose.connections[0].readyState;

//         if (mongoConnection.isConnected === 1) {
//             console.log('Using a previous connection to MongoDB');
//             return;
//         }

//         await mongoose.disconnect(); // if there is a connection but it is not ready, we disconnect it
//     }

//     await mongoose.connect(process.env.MONGO_URL || ''); // and we connect to the database
//     mongoConnection.isConnected = 1;
//     console.log('connected to MongoDB', process.env.MONGO_URL);
// }

// export const disconnect = async () => {
//     // if we are in development mode, we do not disconnect
//     if (process.env.NODE_ENV === 'development') return;
//     // if we are not connected, we do not disconnect
//     if (mongoConnection.isConnected === 0) return;

//     await mongoose.disconnect();
//     mongoConnection.isConnected = 0;

//     console.log('Disconnected from MongoDB');
// }


import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_URL

if (!MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}



export async function connect() {

    const parentStack = new Error().stack.split('\n').slice(2); // Get stack trace excluding the `connect()` function itself


    if (cached.conn) {
        console.log('🟩 Connected to MongoDB - cached')
        console.log('Parent function:', parentStack);
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            console.log('🟩 Connected to MongoDB')
            console.log('Parent function:', parentStack);
            return mongoose
        })
    }

    try {
        cached.conn = await cached.promise
        console.log('🟩 Connected to MongoDB - cached')
        console.log('Parent function:', parentStack);
    } catch (e) {
        cached.promise = null
        throw e
    }

    return cached.conn
}


export async function disconnect() {
    console.log('Disconnecting from MongoDB')
}

// export default dbConnect