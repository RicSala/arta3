import Image from "next/image";
import Link from "next/link";

export function ArtistCard({ artist }) {
    return (
        <Link href={`/tatuadores/${artist._id}`}>
            <p>{artist.name}</p>
            <Image src={artist.profilePic} alt={"this is a test"} width={500} height={500}
                priority={true} // TODO: Priority should be only the ones above the fold
            />
        </Link>
    )
}