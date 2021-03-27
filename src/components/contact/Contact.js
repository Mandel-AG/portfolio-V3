import React from 'react';
import './contact.css';

export default function Contact (){


  return(
    <div className="containerContact">
        <div className="verticalLine"></div>
        <div className="allContact">
        <a href="mailto:a.mandel@hotmail.fr"><img src={require('./img/mail.png').default} alt='mail' /></a>
        <a href="https://github.com/Mandel-AG" target="_blank" rel="noreferrer"><img src={require('./img/git.png').default} alt="github" /></a>
        </div>
    </div>
  )
}