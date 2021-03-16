import React from 'react'
import '../css/rubberband.css'
const Letters=(props)=>{
    return(
        props.val.split("").map(value=><span className="a">{value}</span>)
    )
}

const Intro = () => {
    return (
            <div className="container">
                <div className="intro">
                    <div>
                        <h1>
                            <Letters val="Hi," />
                            <br/>
                            <Letters val="I'm        Hershal,"/>
                            <br/>
                            <Letters val="Web        developer."/>
                        </h1>
                    </div>
                </div>
            </div>
    )
}

export default Intro
