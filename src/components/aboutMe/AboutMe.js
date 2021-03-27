import React from 'react';
import './aboutMe.css';



export default function AboutMe (){
    
        return(
            <div className="containerAboutMe">
                    <div className='aboutMe__title'>
                        <p><span className="title__number">01.</span> A propos de moi</p>
                    </div>
                <div className="container__description">
                    <div className="aboutMe__description">
                      <p> Passionné par le code, j'aime m'améliorer continuellement et me 
                          lancer des défis pour me mettre à l'épreuve.

                      </p>
                    </div>
                </div>
            </div>
        )
    
}

