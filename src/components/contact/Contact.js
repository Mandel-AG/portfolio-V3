import React from 'react';
import './contact.css';

export default function Contact (){


  return(
    <div className="containerContact">
        <div className="verticalLine"></div>
        <div className="allContact">
        <a href="mailto:m.bluth@example.com"><img src={require('./img/mail.png').default} alt='a.mandel@hotmail.fr' /></a>
        <a href="https://github.com/Mandel-AG" target="_blank" rrel="noreferrer"><img src={require('./img/git.png').default} /></a>
        </div>
    </div>
  )
}