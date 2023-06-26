import { connect, disconnect } from "../../../database/db";
import Listing from "../../../models/Listing";

export default async function getListings() {

    try {

        await connect();
        const listings = await Listing.find({}).sort({ createdAt: -1 });
        await disconnect();

        return JSON.parse(JSON.stringify(listings));

    } catch (error) {
        throw new Error(error);
    }
}