import React from "react"

// importing react scroll
import { Link } from "react-scroll";

// importing images
import Xo from "../images/xo.png"
import Tictactoe from "../images/tictactoe.png"

const Project3 = () => {
    return (
        <div className="project1-main-div">
            <div className="border-div">
                <h1 className="project1-heading">Tic-Tac-Toe</h1>
                <p className="project1-text">Good old Tic-Tac-Toe. I did this well-known game in Vanilla Javascript multiple times but ReactJS opened so many new possibilities that I really wanted to create a smoother version. And that is exactly what I did. In near future I'm also planning to dive deeper in some Tic-Tac-Toe AI so the CPU is not that easy to beat. But for now it is pretty simple to win so go ahead and click the button below to have some fun while testing my version of Tic-Tac-Toe.</p>
                <p className="project1-label">Check out my Tic-Tac-Toe</p>
                <a href="https://simon-ugor.github.io/tictactoe20/" target="_blank" rel="noopener noreferrer"><button className="button">Click Me!</button></a>
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
                <img alt="tictactoe" src={Tictactoe} className="tictactoe-img"></img>
                <img alt="xo" src={Xo} className="xo-img"></img>
            </div>
        </div>
    )
}

export default Project3