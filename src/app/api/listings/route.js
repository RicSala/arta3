import { NextResponse } from "next/server";
import Listing from "../../../../models/Tattoo";
import { connect, disconnect } from "../../../../database/db";

export async function GET(req) {

    // console.log({ method: req.method, url: req.url })

    return NextResponse.json({ count: 100 });

}

export async function POST(req) {



    connect();

    // create a new listing in the database
    const listing = await Listing.create({
        title: 'Mi primer listing',
        description: 'Esta es la descripción de mi primer listing',
        style: 'Hiper-realismo',
        tags: ['tag1', 'tag2', 'tag3'],


    });

    disconnect();

    return NextResponse.json({ count: 100 });

}