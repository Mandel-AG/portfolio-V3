import React,{Component} from 'react';
import './header.css';



export default class Header extends Component{

    render(){
        return(
                <div className='containerHeader'>
                    <div className="header">
                    <div className="headerEmptyLeftSpace">
                    </div>
                    <nav className='navBar'>
                        <ul>
                            <li className='elementInNav' > <span className="navBar__numbers">01</span><a href='home'> Présentation </a> </li>
                            <li className='elementInNav' > <span className="navBar__numbers">02</span><a href='competences'> Compétences </a> </li>
                            <li className='elementInNav' > <span className="navBar__numbers">03</span><a href='formations'> Experiences </a> </li>
                            <li className='elementInNav' > <span className="navBar__numbers">04</span><a href='projets'> Projets </a> </li>            
                        </ul>
       
                    </nav>
                    </div>

                    <div className="header__bottomLine"></div>
                </div>
        )
    }
}