import React from 'react';
import './landingPresentation.css';



class LandingPresentation extends React.Component{

    render(){

        return(
            <div className="containerLandingPresentation">
                    <div className='landingName'>
                        <h1>AGBOVON Mandel</h1>
                    </div>

                    <div className='landingCareer'>
                        <p>Développeur d'application Web</p>
                    </div>

                    <div className="landingDescription">
                      <p> Je suis Développeur web basé en région Parisienne. Je crée des sites et applications web, et j'utilise généralement la MERN stack.</p>
                    </div>
            </div>
        )
    }
}

export default LandingPresentation;