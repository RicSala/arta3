'use client'

import { useRouter } from "next/navigation"
import { useContext } from "react"
import { AuthContext } from "../contexts/auth/AuthProvider"


export default function EditTattooButton({ tattoo }) {

    const router = useRouter()

    const { user } = useContext(AuthContext)


    return (

        user?._id === tattoo?.artistId &&

        <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-1 right-1 
            opacity-0 transition-opacity duration-300 group-hover:opacity-100
        "
            // onClick navigate to the edit page
            onClick={() => router.push(`/admin/tatuajes/${tattoo._id}`)}
        >
            Edit
        </span>
    )
}

