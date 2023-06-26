// 'use client'

import Container from "../Container";
import ListingHead from "./ListingHead";

const TestComponent = ({
    listing,
    currentUser
}) => {
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


export default TestComponent;