import Image from "next/image";
import Link from "next/link";
import EditTattooButton from "./EditTattooButton";

export function TattooCard({ tattoo }) {
    return (
        <div className="">
            <Link href={`/tatuajes/${tattoo._id}`} className="relative group">
                <Image src={tattoo.images[0]} alt="test" width={500} height={500} className="rounded-2xl"
                    priority={true} // TODO: Priority should be only the ones above the fold
                />
                {/* Add a edit button */}
                {/* TODO: it's creating some issues because of the two nested "Links" */}
                <EditTattooButton tattoo={
                    // convert tattoo to a plain object
                    JSON.parse(JSON.stringify(tattoo))

                } />
            </Link>
        </div>
    )
}