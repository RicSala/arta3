import Image from "next/image";
import Link from "next/link";
import EditTattooButton from "./EditTattooButton";

export function TattooCard({ tattoo }) {
    return (
        <Link href={`/tatuajes/${tattoo._id}`} className="relative group">
            <div className="rounded-md flex flex-col">
                <Image src={tattoo.images[0]} alt="test" width={700} height={900}
                    priority={true} // TODO: Priority should be only the ones above the fold
                />
                {/* Add a edit button */}
                {/* TODO: it's creating some issues because of the two nested "Links" */}
                <EditTattooButton tattoo={
                    // convert tattoo to a plain object
                    JSON.parse(JSON.stringify(tattoo))

                } />
            </div>
        </Link>
    )
}