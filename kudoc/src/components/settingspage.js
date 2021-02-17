import React from 'react';
import Header from "./Header";
import TopNavBar from "./TopNavBar";
import Footer from "./Footer";
import SettingsPageSection from "./SettingsPageSection";
import BottomNavBar from "./BottomNavBar";

function Settingspage() {
    return(
        <div>
            <Header></Header>
            <TopNavBar></TopNavBar>
            <SettingsPageSection></SettingsPageSection>
            <BottomNavBar></BottomNavBar>
            <Footer></Footer>
        </div>
    );
}

export default Settingspage