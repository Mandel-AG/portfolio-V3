import React from 'react';
import './aboutMe.css';



class AboutMe extends React.Component{

    render(){

        return(
            <div className="containerAboutMe">
                    <div className='aboutMe__title'>
                        <p><span>01.</span> A propos de moi</p>
                    </div>

                    <div className='aboutMe__picture'>
                        <p>Développeur Web</p>
                    </div>

                    <div className="aboutMe__description">
                      <p> Je suis Développeur web basé en région Parisienne. Je crée des sites et applications web, et j'utilise généralement la MERN stack.</p>
                    </div>
            </div>
        )
    }
}

export default AboutMe;