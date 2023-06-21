import Image from "next/image";
import { TattooGrid } from "../../../../components/TattooGrid";


const TatuajesPage = (props) => {
    const tattoos = [{
        url: "/tatuajes/1",
        images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
        imageAlt: "Tattoo 1"
    }, {
        url: "/tatuajes/2",
        images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
        imageAlt: "Tattoo 2"
    }, {
        url: "/tatuajes/3",
        images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
        imageAlt: "Tattoo 3"
    }, {
        url: "/tatuajes/4",
        images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
        imageAlt: "Tattoo 4"
    }, {
        url: "/tatuajes/5",
        images: ["https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190630_jvxwjC5LJSVqA2e.png"],
        imageAlt: "Tattoo 5"
    }
    ]

    return (
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2" >
            <h1 className="mb-8 text-3xl text-center">Tatuajes</h1>
            <TattooGrid tattoos={tattoos} />
        </div >
    )

}



export default TatuajesPage;