import React from 'react';
import './aboutMe.css';
import img from '../../utils/img/me.png';



class AboutMe extends React.Component{

    render(){

        return(
            <div className="containerAboutMe">
                    <div className='aboutMe__title'>
                        <p><span className="title__number">01.</span> A propos de moi</p>
                    </div>
                <div className="container__description">
                    <div className="aboutMe__description">
                      <p> Je suis Développeur web basé en région Parisienne. Je crée des sites et applications web, et j'utilise généralement la MERN stack.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;