import React from 'react';
import './skills.css';
import skillTab from './skillTab';



class Skills extends React.Component{

    render(){

      const eachSkill = skillTab.map(el => (
              <div key={Math.random()} className="skill__containerCircle">
                <div className="skill__Circle"> <img src ={require(`${el.img}`).default} alt={el.skill} /> </div>
                <span>{el.skill}</span>
              </div>
      ));

        return(
            <div className="containerSkills" id="competences">
                    <div className='skills__title'>
                      <p><span className="title__number">02.</span> Compétences</p>
                    </div>
                   

                    <div className="allSkills">
                      {eachSkill}
                    </div>
            </div>
        )
    }
}

export default Skills;