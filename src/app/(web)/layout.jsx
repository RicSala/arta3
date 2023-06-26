import LoginModal from "../../../components/modals/LoginModal";
import Modal from "../../../components/modals/Modal";
import RegisterModal from "../../../components/modals/RegisterModal";
import RentModal from "../../../components/modals/RentModal";
import NavBar from "../../../components/navBar/NavBar";
import ToasterProvider from "../../../contexts/toaster/ToasterProvider";
import getCurrentUser from "../actions/getCurrentUser";

export default async function DashboardLayout({ children }) {

    const currentUser = await getCurrentUser();

    return (
        <>

        </>
    )
}