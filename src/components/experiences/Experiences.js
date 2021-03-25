import React from 'react';
import './experiences.css';
import experiencesTab from "./experiencesTab.js"



class Experiences extends React.Component{

    
    render(){
        const eachExperience = experiencesTab.map(el => (
            <div key={el.index} className={`eachExperience ${el.class}`}>
                {el.year}<div className="horizontalLine"></div>
                <div className="experience__description">
                    <span>{el.position}</span><br/>
                    <span>{el.company}</span><br/>
                    <span>{el.description}</span><br/>
                </div>
            </div>
        ) )


        return(
            <div className="containerExperiences">
                    <div className='experiences__title'>
                      <p><span className="title__number">02.</span> Experiences</p>
                    </div>
                    <div className="container__allExperiences">
                          <div className="verticalLine"></div>
                      <div className="allExperiences">
                          {eachExperience}

                      </div>

                    </div>
            </div>
        )
    }
}

export default Experiences;