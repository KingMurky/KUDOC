import React from 'react';
import Footer from './Footer';
import Header from "./Header";
import MyPageSection from './MyPageSection';
import TopNavBar from "./TopNavBar";
import BottomNavBar from "./BottomNavBar";

function Mypage() {
    return(
        <div>
            <Header></Header>
            <TopNavBar></TopNavBar>
            <MyPageSection></MyPageSection>
            <BottomNavBar></BottomNavBar>
            <Footer></Footer>
        </div>
    );
}

export default Mypage