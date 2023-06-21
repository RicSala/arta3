import Image from "next/image";
import Link from "next/link";

export function TattooCard({ tattoo }) {
    return (
        <Link href={tattoo.url}>
            <Image src={tattoo.images[0]} alt="test" width={500} height={500}
                priority={true} // TODO: Priority should be only the ones above the fold
            />
        </Link>
    )
}