import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import User from "../../../models/User";
import { connect, disconnect } from "../../../database/db";


export async function getSession() {
    const session = await getServerSession(authOptions);
    return session;
}



export default async function getCurrentUser() {
    try {

        const session = await getSession();
        if (!session?.user?.email) return null;

        await connect();
        const currentUser = await User.findOne({ email: session.user.email });
        await disconnect();

        if (!currentUser) return null;


        return JSON.parse(JSON.stringify(currentUser));

    } catch (error) {
        console.log(error)
        return null;
    }
}

