import { connect, disconnect } from "../../../database/db";
import Listing from "../../../models/Listing";


export default async function getListingById(
    params
) {

    try {
        const { listingId } = params;

        await connect();
        // get the listing, populating the user
        const listing = await Listing.findById(listingId).populate("userId");
        await disconnect();

        if (!listing) return null; // why null instead of error?

        // console.log("LISTING", listing)

        return listing;

    } catch (error) {
        throw new Error(error);
    }

}