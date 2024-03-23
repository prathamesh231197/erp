import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";


const MainLevelRoute = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            {/* <FooterNewComponent /> */}
        </>
    )
}
export default MainLevelRoute