'use client'

import { useMemo } from "react";
import { categories } from "../navBar/Categories";
import Container from "../Container";
import ListingHead from "./ListingHead";

const ListingClient = ({
    listing,
    currentUser
}) => {

    const category = useMemo(() => {
        return categories.find(category => category._id === listing.categoryId);
    }, [listing]);

    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <ListingHead
                        title={listing.title}
                        imageSrc={listing.imageSrc}
                        locationValue={listing.locationValue}
                        id={listing._id}
                        currentUser={currentUser}
                    />
                </div>
            </div>
        </Container>
    )
};


export default ListingClient;