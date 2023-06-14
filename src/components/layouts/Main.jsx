import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import { Outlet } from 'react-router-dom'
export default function Main() {
    return (
        <>
            <NavBar></NavBar>
            <Outlet />
            <Footer></Footer>
        </>
    )
}
