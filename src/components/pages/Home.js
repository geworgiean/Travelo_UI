import React from "react"
import { Router, Routes } from "react-router-dom"
import "../../App.css"
import "../HeroSection"
import HeroSection from "../HeroSection"
import Navbar from "../Navbar"

function Home(){
    return(
        <>
        <HeroSection />
        </>
    );
}

export default Home;