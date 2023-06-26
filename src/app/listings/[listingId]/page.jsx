import getListingById from "@/app/actions/getListingById";
import ClientOnly from "../../../../components/ClientOnly";
import EmptyState from "../../../../components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ListingClient from "./ListingClient";
import TestComponent from "../../../../components/listings/TestComponent";

const listingPage = async ({ params }) => {

    const listing = await getListingById(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState message="No se han encontrado resultados" />
            </ClientOnly >
        )
    }

    return (

        <>
            <ListingClient
                listing={listing}
                currentUser={currentUser}
            />

            <TestComponent
                listing={listing}
                currentUser={currentUser}
            />

        </>
    )
};

export default listingPage;