import React from "react"

// importing react scroll
import { Link } from "react-scroll";

// importing images
import Cloud from "../images/apicloud.png"
import Api from "../images/api.png"

const Project1 = () => {
    return (
        <div className="project1-main-div">
            <div className="border-div">
                <h1 className="project1-heading">API Calls</h1>
                <p className="project1-text">When I started to learn web development I had no idea what API calls are, but after diving deeper I found out how powerful they can be and decided it will probably be a good idea to include one in my portfolio. So I started to look around for some nice API to use and I stumbled upon this Fortnite one with good looking pictures and not too much data to handle. Well, yeah.. Fortnite.. Don't play Fortnite? Me neither, but this is about ReactJS and API calls so I went ahead and used it. Feel free to click the button below and check out the webpage fully created with data from fetching API.</p>
                <p className="project1-label">Check out my API Project</p>
                <a href="https://simonugor.github.io/FortniteApiCall/"><button className="button">Click Me!</button></a>
                <p className="project1-or">or</p>

                <Link
                    activeClass="active"
                    to="div1"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                    ><button className="button">Back to the Top</button>
                </Link>
                <img alt="cloud" src={Cloud} className="cloud-img"></img>
                <img alt="api" src={Api} className="api-img"></img>
            </div>
        </div>
    )
}

export default Project1