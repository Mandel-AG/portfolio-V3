import React from 'react';
import './landingPresentation.css';



export default function LandingPresentation (){

    return(
        <div className="containerLandingPresentation" id="presentation" >
                <div className='landingName'>
                    <h1><span className="blueLetters">A</span>GBOVON <span className="blueLetters">M</span>andel</h1>
                </div>

                <div className='landingCareer'>
                    <p className="blueLetters">Développeur d'application Web</p>
                </div>

                <div className="landingDescription">
                    <p> Je suis Développeur web basé en région Parisienne. Je crée des sites et applications web, et j'utilise généralement la MERN stack.</p>
                </div>
        </div>
    )
}

