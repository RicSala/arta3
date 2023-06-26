import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import Listing from "../../../../models/Listing";


export async function POST(request) {

    const currentUser = await getCurrentUser(request);

    if (!currentUser) {
        return NextResponse.error()
    }

    const body = await request.json();

    const {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        location,
        price,
    } = body;

    console.log("BODY", body);
    console.log("USER", currentUser)

    const listing = await Listing.create({
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        locationValue: location.value,
        price: parseInt(price),
        userId: currentUser._id
    });

    return NextResponse.json(listing)

}
