import React from "react";
import Header from "./components/header/Header";
import Routes from "./components/Routes";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <>
            <Header/>
            <div>
                <Routes/>
            </div>
            <Footer/>
        </>


    );
}

