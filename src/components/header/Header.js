import React,{Component} from 'react';
import './header.css';



export default function Header (){

    window.addEventListener("scroll",()=>{
        let windoww = window.pageYOffset;
        document.querySelector('.link--presentation').classList.toggle("nav--Active",windoww > 0 && windoww < 574);
        document.querySelector('.link--competences').classList.toggle("nav--Active",windoww > 575 && windoww < 1385);
        document.querySelector('.link--experiences').classList.toggle("nav--Active",windoww > 1386 && windoww < 2029);
        document.querySelector('.link--projets').classList.toggle("nav--Active",windoww > 2030);
    })

    return(
            <div className='containerHeader'>
                <div className="header">
                <div className="headerEmptyLeftSpace">
                </div>
                <nav className='navBar'>
                    <ul>
                        <li className='elementInNav nav__presentation' > <span className="navBar__numbers">01</span><a href='#presentation' className="a-link link--presentation"> Présentation </a> </li>
                        <li className='elementInNav nav__competences' > <span className="navBar__numbers">02</span><a href='#competences' className="a-link link--competences" > Compétences </a> </li>
                        <li className='elementInNav nav__experiences' > <span className="navBar__numbers">03</span><a href='#experiences' className="a-link link--experiences" > Experiences </a> </li>
                        <li className='elementInNav nav__projets' > <span className="navBar__numbers">04</span><a href='#projets' className="a-link link--projets" > Projets </a> </li>            
                    </ul>
    
                </nav>
                </div>

                <div className="header__bottomLine"></div>
            </div>
    )
}