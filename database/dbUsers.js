import User from "../models/User";
import { connect, disconnect } from "./db";

export const checkUserEmailPassword = async (email, password) => {

    if (!email || !password) {
        throw new Error("Email y contraseña requeridos");
    }

    await connect();
    // get the user whose email matches the email passed in
    const user = await User.findOne({ email }).lean()
    await disconnect();

    if (!user) {
        throw new Error("Credenciales no válidas");
    }

    // check if the password passed in matches the password in the db
    // const match = await bcrypt.compare(password, user.password) // TODO: as we are not hashing the password, we don't need to compare it with bcrypt. Change in the future

    const isCorrectPassword = password === user.password;

    if (!isCorrectPassword) {
        throw new Error("Credenciales no válidas");
    }

    // return the user if the password matches
    const { role, name, _id, profilePic, city } = user;

    // TODO: Do "return user" instead
    return { role, name, _id, profilePic, city, email };

}


export const checkOauthUser = async (oAuthemail, oAuthname, oAuthimage) => {

    await connect();
    // get the user whose email matches the email passed in
    const user = await User.findOne({ email: oAuthemail }).lean()

    if (user) {
        await disconnect();
        const { role, name, email, _id, profilePic } = user;
        return { role, name, email, _id, profilePic };
    }

    // if the user does not exist, we create it
    const newUser = await User.create({
        name: oAuthname,
        email: oAuthemail,
        profilePic: oAuthimage || undefined,
        password: "@@@@@@", // TODO: Isn't this a security issue? Shouldn't we generate a random password?
        role: "user"
    })

    await disconnect();

    const { role, name, email, _id } = newUser;
    return { role, name, email, _id, profilePic: oAuthimage }; // why not return newUser? because we don't want to return the some fields like password
}


export const getArtists = async () => {

    await connect();

    const artists = await User.find({ role: "artist" }).lean();

    await disconnect();

    return artists;

}

export const getUserById = async (id) => {

    await connect();

    const user = await User.findById(id).lean();

    await disconnect();

    return user;

}


