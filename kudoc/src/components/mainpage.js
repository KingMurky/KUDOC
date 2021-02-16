import Header from "./Header";
import TopNavBar from "./TopNavBar";
import Footer from "./Footer";
import MainPageSection from "./MainPageSection";
import BottomNavBar from "./BottomNavBar";

function Mainpage() {
    return(
        <div>
            <Header></Header>
            <TopNavBar></TopNavBar>
            <MainPageSection></MainPageSection>
            <BottomNavBar></BottomNavBar>
            <Footer></Footer>
        </div>
    );
}

export default Mainpage
