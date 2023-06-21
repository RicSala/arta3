'use client'

import { AuthContext } from "@/contexts/auth/AuthProvider"
import Image from "next/image"
import { useContext } from "react"


export default function Avatar(props) {

    const { user } = useContext(AuthContext)

    console.log(user)





    return (
        <div className="rounded-full h-10 w-10 flex items-center justify-center bg-gray-400">
            {/* if user has a profile Pic, show it instead */}
            {user?.profilePic ?
                <Image src={user.profilePic} className="rounded-full h-10 w-10" alt="Profile Pic" width={200} height={200} /> :
                <span className="font-semibold text-xl tracking-tight">JD</span>
            }
        </div>
    )
}

