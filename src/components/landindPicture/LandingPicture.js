import React from 'react';
import './landingPicture.css';
import img from '../../utils/img/me.png';


const LandingPicture = function (props) {
  return (
    <div className='container__landingPicture'>
                        <img className='myPicture2' src={img} alt="me"></img>
                        {/* <img src='../../utils/img/me.png' alt="me"></img> */}
    </div>
  )
}


export default LandingPicture;


