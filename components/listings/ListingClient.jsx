'use client' // TODO: this should be client

import { useMemo } from "react";
// import { categories } from "../navBar/Categories";
import Container from "../Container";
import ListingHead from "./ListingHead";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import ListingInfo from "./ListingInfo";
import { categories } from "../navBar/Categories";





const ListingClient = ({
    listing,
    currentUser
}) => {


    console.log("LISTING", listing)
    // const category = useMemo(() => {
    //     return categories.find(category => category._id === listing.categoryId);
    // }, [listing]); 


    // TODO: change this for the client version when we find the problem
    const category = categories.find(category => category.label === listing.category);
    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <ListingHead
                        title={listing.title}
                        imageSrc={listing.imageSrc}
                        locationValue={listing.locationValue}
                        id={JSON.parse(JSON.stringify(listing._id))}
                        currentUser={currentUser}
                    />
                </div>

                <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                md:gap-10
                mt-6
                ">


                    <ListingInfo
                        user={JSON.parse(JSON.stringify(listing.userId))}
                        category={category}
                        description={listing.description}
                        roomCount={listing.roomCount}
                        // guessCount={listing.guessCount}
                        bathroomCount={listing.bathroomCount}
                        locationValue={listing.locationValue}
                    />
                </div>
            </div>
        </Container>
    )
};


export default ListingClient;