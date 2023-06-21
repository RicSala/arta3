import { ArtistCard } from "./ArtistCard";

export function ArtistGrid({ artists }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                artists.map((artist, index) => {
                    return <ArtistCard key={artist.url} artist={artist} />
                }
                )
            }
        </div>
    )
}
