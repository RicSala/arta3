import User from "../models/User";
import { connect, disconnect } from "./db";
import bcrypt from 'bcryptjs';

export const checkUserEmailPassword = async (email, password) => {

    await connect();
    // get the user whose email matches the email passed in
    const user = await User.findOne({ email }).lean()
    await disconnect();

    if (!user) { return null; }

    // check if the password passed in matches the password in the db
    // const match = await bcrypt.compare(password, user.password) // TODO: as we are not hashing the password, we don't need to compare it with bcrypt. Change in the future

    const match = password === user.password;



    if (!match) { return null; }

    // return the user if the password matches
    const { role, name, _id, profilePic, city } = user;

    return { role, name, _id, profilePic, city };

}