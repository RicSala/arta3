import Image from "next/image";

const artist = {
    name: "Tatuador 4",
    images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
    availability: "Disponible",
    location: "Ciudad de México",
    url: "/tatuadores/4",
    likes: 300,

};

console.log(artist);

const getArtist = async (id) => {
    return artist;
}



const ArtistDetailsPage = async ({ }) => {

    const artist = await getArtist(1);


    return (
        <div className="container  mx-auto flex-1 flex items-start justify-center flex-wrap px-2 gap-2" >
            <Image src={artist.images[0]} alt={artist.imageAlt} width={500} height={500} />
            <div className="flex flex-col items-start justify-start">
                {/* name of the auther */}
                <div className="flex flex-col items-start justify-start">
                    <Image src={artist.images[0]} alt={artist.name} width={50} height={50} />
                    <span>{artist.name}</span>
                </div>
                {/* show the likes */}
                <div className="flex flex-col items-start justify-start">
                    <span>{artist.likes} likes</span>
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

            </div >

        </div >

    )
};



export default ArtistDetailsPage;