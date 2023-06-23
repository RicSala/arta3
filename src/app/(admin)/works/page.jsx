import Image from "next/image";
import { TattooGrid } from "../../../../components/TattooGrid";
import { getTattoosByArtistId } from "../../../../database/dbTattoos";
import { authOptions } from "../../../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

// // TODO: not sure this makes sense, we are fetching via api but actually we are in the server side
// const getTattoos = async () => {

//     const res = await fetch(`http://localhost:3000/api/tattoos`)
//     const results = await res.json()


//     return results;
// }

const MyWorks = async (props) => {

    const session = await getServerSession(authOptions);

    const id = session.user._id;

    // console.log(id)

    const tattoos = await getTattoosByArtistId(id)

    // console.log(tattoos)

    // REVIEW: Another way to do it would be to use a useEffect hook to fetch the data. It would be faster and we could use the loading state.

    return (
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2" >
            <h1 className="mb-8 text-3xl text-center">Tatuajes</h1>
            <TattooGrid tattoos={tattoos} />
        </div >
    )

}



export default MyWorks;