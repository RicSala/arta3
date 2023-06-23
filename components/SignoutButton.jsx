'use client'

import { useContext } from "react"
import { AuthContext } from "../contexts/auth/AuthProvider"


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

