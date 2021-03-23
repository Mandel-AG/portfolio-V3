import React from 'react';
import './skills.css';
import skillTab from './skillTab';



class Skills extends React.Component{

    render(){

      const eachSkill = skillTab.map(el => (
              <div key={Math.random()} className="skill__containerCircle">
                <div className="skill__Circle"></div>
                <span>{el}</span>
              </div>
      ));

        return(
            <div className="containerSkills">
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