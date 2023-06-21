import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";

export default function DashboardLayout({ children }) {
    return (
        <div className=" flex flex-col bg-slate-100 w-screen min-h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

            <div className="flex flex-col flex-grow">

                <NavBar />
                <div className="p2 w-full  text-slate-900">
                    {children}
                </div>

            </div>
            <Footer />
        </div>
    )
}