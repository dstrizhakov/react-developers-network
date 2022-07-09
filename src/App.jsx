import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";

const App = () => {
    return (
        < div className="App-wrapper">
            <div className="header">
                <Header/>
            </div>

            <Navbar/>
            <Profile/>
        </div>
    )
        ;
}

export default App;
