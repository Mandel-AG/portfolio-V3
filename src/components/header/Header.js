import React,{Component} from 'react';
import './header.css';



export default class Header extends Component{

    render(){
        return(
                <div className='containerHeader'>
                    <div className="headerEmptyLeftSpace">
                    </div>
                    <nav className='navBar'>
                        <ul>
                            <li className='elementInNav' > <a to='home'> Présentation </a> </li>
                            <li className='elementInNav' > <a to='competences'> Compétences </a> </li>
                            <li className='elementInNav' > <a to='formations'> Experiences </a> </li>
                            <li className='elementInNav' > <a to='projets'> Projets </a> </li>            
                        </ul>
       
                    </nav>
                </div>
        )
    }
}