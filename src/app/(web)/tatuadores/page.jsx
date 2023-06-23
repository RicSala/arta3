import Image from "next/image";
import { TattooGrid } from "../../../../components/TattooGrid";
import { ArtistGrid } from "../../../../components/ArtistGrid";
import { ArtistCard } from "../../../../components/ArtistCard";
import { getArtists } from "../../../../database/dbUsers";

// Create an array of 4 tattoo artist with the following properties: Name, image, availability, location, and a link to their page
// const artists = [
//     {
//         name: "Tatuador 1",
//         images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
//         availability: "Disponible",
//         location: "Ciudad de México",
//         url: "/tatuadores/1"
//     },
//     {
//         name: "Tatuador 2",
//         images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
//         availability: "Disponible",
//         location: "Ciudad de México",
//         url: "/tatuadores/2"
//     },
//     {
//         name: "Tatuador 3",
//         images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
//         availability: "Disponible",
//         location: "Ciudad de México",
//         url: "/tatuadores/3"
//     },
//     {
//         name: "Tatuador 4",
//         images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
//         availability: "Disponible",
//         location: "Ciudad de México",
//         url: "/tatuadores/4"
//     }]

const TatuadoresPage = async ({ }) => {

    const artists = await getArtists();

    return (
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2" >
            <h1 className="mb-8 text-3xl text-center">Tatuadores</h1>
            <ArtistGrid artists={artists} />
        </div >

    )

}



export default TatuadoresPage;