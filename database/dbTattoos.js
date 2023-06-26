import Tattoo from "../models/Tattoo";
import { connect, disconnect } from "./db";
import bcrypt from 'bcryptjs';

export const getTattooById = async (id) => {

    await connect();

    const tattoo = Tattoo.findById(id);

    await disconnect();

    return tattoo;

}



export const getTattoosByArtistId = async (id) => {

    await connect();
    const tattoos = await Tattoo.find({ author: id }).lean();
    await disconnect();

    return tattoos;

}
