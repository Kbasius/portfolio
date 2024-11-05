import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import './App.css';

const App = () => {
    return (
        <Router>
            <div id="root">
                <Header/>
                <Routes>
                    <Route path="/" element={<AboutMe/>}/>
                    <Route path="/" element={<Project/>}/>
                    <Route path="/" element={<Contact/>}/>
                    <Route path="/" element={<Resume/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;