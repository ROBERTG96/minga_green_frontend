import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";

export default function Main({ children }) {
    return (
        <>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </>
    )
}
