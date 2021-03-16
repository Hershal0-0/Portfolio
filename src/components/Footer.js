import React from 'react'

import {FaInstagramSquare,FaLinkedin,FaGithubSquare,FaTwitterSquare,FaHackerrank,FaMailBulk} from "react-icons/fa"
const Footer = () => {
    return (
        <>
        <div className="phantom" />
        <div className="footer">
            <a href={"https://www.instagram.com/hershal0_0/"} 
            target="_blank" rel="noreferrer" className="icon" >
            <FaInstagramSquare style={{fontSize:"2em"}} className="icon-padd" />
            </a>

            <a href={"https://www.linkedin.com/in/hershal-rao-95aa04156/"} 
            target="_blank" rel="noreferrer" className="icon" >
            <FaLinkedin style={{fontSize:"2em"}} className="icon-padd" />
            </a>

            <a href={"https://github.com/Hershal0-0"}
            target="_blank" rel="noreferrer" className="icon">
            <FaGithubSquare style={{fontSize:"2em"}} className="icon-padd" />
            </a>

            <a href={"https://twitter.com/HershalRao"}
            target="_blank" rel="noreferrer" className="icon">
            <FaTwitterSquare style={{fontSize:"2em"}} className="icon-padd" />
            </a>

            <a href={"https://www.hackerrank.com/hershalrao"}
            target="_blank" rel="noreferrer" className="icon">
            <FaHackerrank style={{fontSize:"2em"}} className="icon-padd" />
            </a>

            <a href={"mailto:hershalrao@gmail.com?subject=Hello From Portfolio"} 
            target="_blank" rel="noreferrer" className="icon">
            <FaMailBulk style={{fontSize:"2em"}} className="icon-padd" />
            </a> <br/> Copyright @2020           
        </div>
        </>
    )
}

export default Footer
