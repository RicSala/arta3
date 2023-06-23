'use client'

import Container from "../Container";
import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "./CategoryBox";

export const categories = [
    {
        label: "Beach",
        icon: TbBeach,
        description: "Esta propiedad está cerca de la playa",
    },
    {
        label: "Windmills",
        icon: GiWindmill,
        description: "Esta propiedad está cerca de los molinos de viento",
    },
    {
        label: "Modern",
        icon: MdOutlineVilla,
        description: "Esta propiedad es moderna",
    },
]

const Categories = ({ }) => {
    return (
        <Container>
            <div className="
        pt-4
        flex
        flex-row
        items-center
        justify-between
        overflow-x-auto
        ">
                {
                    categories.map((category, index) => (
                        <CategoryBox
                            key={category.label}
                            label={category.label}
                            description={category.description}
                            icon={category.icon}
                        />))
                }


            </div>
        </Container>
    )
};

export default Categories;