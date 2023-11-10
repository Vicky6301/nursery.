import React from "react";
import Header from "../components/Header";

 
const Layout = ({ childern }) => {
    return (
    <>
    <Header/>
    <div>{childern}</div>
    <Footer/>
    </>
    );
};

export default Layout;
