import React from 'react';
import './aboutMe.css';
import oui from '../../utils/img/me.png';



class AboutMe extends React.Component{

    render(){

        return(
            <div className="containerAboutMe">
                    <div className='aboutMe__picture'>
                        <img className='myPicture' src={oui} alt="me"></img>
                        {/* <img src='../../utils/img/me.png' alt="me"></img> */}
                    </div>


                    <div className='aboutMe__title'>
                        <p><span className="title__number">01.</span> A propos de moi</p>
                    </div>


                    <div className="aboutMe__description">
                      <p> Je suis Développeur web basé en région Parisienne. Je crée des sites et applications web, et j'utilise généralement la MERN stack.</p>
                    </div>
            </div>
        )
    }
}

export default AboutMe;