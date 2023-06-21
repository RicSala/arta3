import Image from "next/image";
import Link from "next/link";

export function ArtistCard({ artist }) {
    return (
        <Link href={artist.url}>
            <Image src={artist.images[0]} alt={artist.imageAlt} width={500} height={500}
                priority={true} // TODO: Priority should be only the ones above the fold
            />
        </Link>
    )
}