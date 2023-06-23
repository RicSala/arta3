import Footer from "../../../components/Footer";
import LoginModal from "../../../components/modals/LoginModal";
import Modal from "../../../components/modals/Modal";
import RegisterModal from "../../../components/modals/RegisterModal";
import NavBar from "../../../components/navBar/NavBar";
import ToasterProvider from "../../../contexts/toaster/ToasterProvider";
import getCurrentUser from "../actions/getCurrentUser";

export default async function DashboardLayout({ children }) {

    const currentUser = await getCurrentUser();

    console.log("CURRENT USER FROM LAYOUT", currentUser)

    return (
        <div className=" flex flex-col bg-slate-100 w-screen min-h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

            <div className="flex flex-col flex-grow">
                <ToasterProvider />
                <LoginModal />
                <RegisterModal />
                <NavBar currentUser={currentUser} />
                <div className="p2 w-full  text-slate-900">
                    {children}
                </div>

            </div>
            <Footer />
        </div>
    )
}