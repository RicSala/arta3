import Image from "next/image";
import { TattooGrid } from "../../../../components/TattooGrid";



const BlogPage = (props) => {

    return (
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2" >
            <h1 className="mb-8 text-3xl text-center">Tatuajes</h1>
            <TattooGrid />
        </div >
    )

}



export default BlogPage;