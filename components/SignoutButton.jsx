'use client'

import { AuthContext } from "@/contexts/auth/AuthProvider"
import { useContext } from "react"


export default function SignoutButton(props) {


    const { logoutUser } = useContext(AuthContext)

    return (
        <button onClick={
            () => {
                logoutUser({ callbackUrl: 'http://localhost:3000/' })
            }
        }>LogOut</button>

    )
}

