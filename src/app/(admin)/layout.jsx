import Footer from "../../../components/Footer";
import Modal from "../../../components/modals/Modal";
import NavBar from "../../../components/navBar/NavBar";
import ToasterProvider from "../../../contexts/toaster/ToasterProvider";

export default function DashboardLayout({ children }) {
    return (
        <div className=" flex flex-col bg-slate-100 w-screen min-h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

            <div className="flex flex-col flex-grow">
                <ToasterProvider />
                <Modal isOpen />
                <NavBar />
                <div className="p2 w-full  text-slate-900">
                    {children}
                </div>

            </div>
            <Footer />
        </div>
    )
}