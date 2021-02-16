import Header from "./Header";
import TopNavBar from "./TopNavBar";
import Footer from "./Footer";
import settingsPageSection from "./settingsPageSection";
import BottomNavBar from "./BottomNavBar";

function Settingspage() {
    return(
        <div>
            <Header></Header>
            <TopNavBar></TopNavBar>
            <settingsPageSection></settingsPageSection>
            <BottomNavBar></BottomNavBar>
            <Footer></Footer>
        </div>
    );
}

export default Settingspage