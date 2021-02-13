import React from 'react';
import Footer from './Footer';
import Header from "./Header";
import MyPageSection from './MyPageSection';
import TopNavBar from "./TopNavBar";

function Mypage() {
    return(
        <div>
            <Header></Header>
            <TopNavBar></TopNavBar>
            <MyPageSection></MyPageSection>
            <Footer></Footer>
        </div>
    );
}

export default Mypage