import getListingById from "@/app/actions/getListingById";
import ClientOnly from "../../../../components/ClientOnly";
import EmptyState from "../../../../components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ListingClient from "../../../../components/listings/ListingClient";
import TestComponent from "../../../../components/listings/TestComponent";
import ListingInfo from "../../../../components/listings/ListingInfo";
import Container from "../../../../components/Container";

const ListingPage = async ({ params }) => {

    const listing = await getListingById(params);
    const currentUser = await getCurrentUser();

    console.log("RENDERING LISTING PAGE")

    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState title="No se han encontrado resultados" />
            </ClientOnly >
        )
    }

    return (

        <>
            <ListingClient
                listing={listing}
                currentUser={currentUser}
            />

        </>
    )
};

export default ListingPage;