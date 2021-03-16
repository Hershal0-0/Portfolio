import React from 'react'
import Navbar from "../components/Navbar"
import Intro from "../components/Intro"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Stats from "../components/Stats"

const Landing = () => {
    return (
        <div className="scroll">
            <Navbar />
            <Intro /><br/>
            <Projects />
            <Stats />
            <Footer />
            Hello
        </div>
    )
}

export default Landing
