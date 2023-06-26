import Image from "next/image";
import { getUserById } from "../../../../../database/dbUsers";
import { TattooGrid } from "../../../../../components/TattooGrid";
import { get } from "mongoose";
import { getTattoosByArtistId } from "../../../../../database/dbTattoos";


const ArtistDetailsPage = async ({ params }) => {



    const artist = await getUserById(params.id);
    const tattos = await getTattoosByArtistId(params.id);


    return (
        <div className="container  mx-auto flex-1 flex items-start justify-center flex-wrap px-2 gap-2" >
            <Image src={artist.profilePic} alt={"this is a test"} width={500} height={500} />
            <div className="flex flex-col items-start justify-start">
                {/* name of the auther */}
                <div className="flex flex-col items-start justify-start">
                    <Image src={artist.profilePic} alt={"this is a test"} width={50} height={50} />
                    <span>{artist.name}</span>
                </div>
                {/* show the likes */}
                <div className="flex flex-col items-start justify-start">
                    <span>1 likes</span>
                </div>
                {/* show the comments */}
                {/* <div className="flex flex-col items-start justify-start">
                    {
                        artist.comments.map((comment, index) => {
                            return (
                                <div key={index} className="flex flex-col items-start justify-start flex-wrap">

                                    <span>{comment.user}</span>
                                    <span>{comment.comment}</span>
                                    <span>{comment.createdAt}</span>

                                </div>

                            )
                        })
                    }

                </div> */}

                <h2>Otras piezas de {artist.name}</h2>

                <div className="flex min-w-full gap-0">
                </div>

            </div >

        </div >

    )
};



export default ArtistDetailsPage;