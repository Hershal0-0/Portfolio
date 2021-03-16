import React from 'react'

const Stats = () => {
    return (
        <div className="container back-blue stats">
            <div>
                <h2>Github Stats</h2>
                <a 
                href="https://github.com/Hershal0-0" className="link"
                target="_blank" rel="noreferrer">
                Click For Repos</a>
            </div>
            <div >
            <a href="#" ><img className="mt-2" alt="Hershal's Github Stats" src="https://github-readme-stats.vercel.app/api?username=Hershal0-0&theme=tokyonight&show_icons=true&count_private=true" /></a> 
            <br/>
            <a href="#" ><img className="mt-2" alt="Hershal's Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Hershal0-0&langs_count=8&layout=compact&theme=tokyonight" /></a>
            </div>


        </div>
    )
}

export default Stats
