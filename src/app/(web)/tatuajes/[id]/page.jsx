import Image from "next/image";

const tattoo = {
    url: "/tatuajes/1",
    author: {
        name: "author1",
        avatar: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"
    },
    images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
    imageAlt: "Tattoo 1",
    likes: 300,
    comments: [
        {
            user: "user1",
            comment: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ",
            createdAt: "2021-01-01"
        },
        {
            user: "user2",
            comment: "lorem ipsum dolor sit amet consectetur adipiscing ",
            createdAt: "2021-01-02"
        },
    ]


};

console.log(tattoo);

const getTattoo = async (id) => {
    return tattoo;
}



const TattooDetailsPage = async ({ }) => {

    const tattoo = await getTattoo(1);


    return (
        <div className="container  mx-auto flex-1 flex items-start justify-center flex-wrap px-2 gap-2" >
            <Image src={tattoo.images[0]} alt={tattoo.imageAlt} width={500} height={500} />
            <div className="flex flex-col items-start justify-start">
                {/* name of the auther */}
                <div className="flex flex-col items-start justify-start">
                    <Image src={tattoo.author.avatar} alt={tattoo.author.name} width={50} height={50} />
                    <span>{tattoo.author.name}</span>
                </div>
                {/* show the likes */}
                <div className="flex flex-col items-start justify-start">
                    <span>{tattoo.likes} likes</span>
                </div>
                {/* show the comments */}
                <div className="flex flex-col items-start justify-start">
                    {
                        tattoo.comments.map((comment, index) => {
                            return (
                                <div key={index} className="flex flex-col items-start justify-start flex-wrap">

                                    <span>{comment.user}</span>
                                    <span>{comment.comment}</span>
                                    <span>{comment.createdAt}</span>

                                </div>

                            )
                        })
                    }

                </div>

            </div >

        </div >

    )
};



export default TattooDetailsPage;