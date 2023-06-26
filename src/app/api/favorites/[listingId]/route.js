import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import Listing from "../../../../../models/Listing";
import { connect, disconnect } from "../../../../../database/db";
import User from "../../../../../models/User";


export async function POST(request, { params }) {

    const currentUser = await getCurrentUser(request);

    if (!currentUser) {
        return NextResponse.error()
    }

    const { listingId } = params

    if (!listingId || typeof listingId !== 'string') {
        throw new Error('Invalid ID')
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])]

    favoriteIds.push(listingId)

    // save the user with the new favoriteIds
    await connect()
    const user = await User.findByIdAndUpdate(currentUser._id, { favoriteIds })
    await disconnect()

    return NextResponse.json(user)
}

export async function DELETE(request, { params }) {

    const currentUser = await getCurrentUser(request);

    if (!currentUser) {
        return NextResponse.error()
    }

    const { listingId } = params

    if (!listingId || typeof listingId !== 'string') {
        throw new Error('Invalid ID')
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])]

    favoriteIds = favoriteIds.filter(id => id !== listingId)

    // save the user with the new favoriteIds
    await connect()
    const user = await User.findByIdAndUpdate(currentUser._id, { favoriteIds })
    await disconnect()

    return NextResponse.json(user)
}