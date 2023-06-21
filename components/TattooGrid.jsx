import { TattooCard } from "./TattooCard";

export function TattooGrid({ tattoos }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                tattoos.map((tattoo, index) => {
                    return <TattooCard key={tattoo.url} tattoo={tattoo} />
                }
                )
            }
        </div>
    )
}
