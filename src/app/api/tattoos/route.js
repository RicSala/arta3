import { NextResponse } from "next/server";
import { connect, disconnect } from "../../../../database/db";
import Tattoo from "../../../../models/Tattoo";

export async function GET(req) {


    // get from the database all the tattoos
    await connect();
    const tattoos = await Tattoo.find({});
    await disconnect();

    return NextResponse.json(tattoos);

}

export async function POST(req) {



    await connect();

    // create a new listing in the database
    const listing = await Listing.create({
        title: 'Mi primer listing',
        description: 'Esta es la descripción de mi primer listing',
        style: 'Hiper-realismo',
        tags: ['tag1', 'tag2', 'tag3'],


    });

    await disconnect();

    return NextResponse.json({ count: 100 });

}