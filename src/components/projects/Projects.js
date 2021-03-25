import React from 'react';
import './project.css';
import projectsList from './listeprojets';

export default function Projects (){

  const projectTab = projectsList.map(el =>
    ( el.id%2 === 0 ?
      (<div key={el.id} className="containerEachProject">
        <div className="eachProject__img">
          <img src={require(`${el.img}`).default} alt={el.nom}/>
        </div>
        <div className="eachProject__details">
          <p>{el.nom}</p>
          <p>{el.description}</p>
          <p>{el.technologie}</p>
          <p>{el.lien}</p>
        </div>
      </div>)
      :
      (<div key={el.id} className="containerEachProject__reverse">
        <div className="eachProject__details__reverse">
          <p>{el.nom}</p>
          <p>{el.description}</p>
          <p>{el.technologie}</p>
          <p>{el.lien}</p>
        </div>
        <div className="eachProject__img__reverse">
          <img src={require(`${el.img}`).default} alt={el.nom}/>
        </div>
      </div>)
    )
  )

  return(
    <div className="containerProjects">
       <div className='projects__title'>
          <p><span className="title__number">02.</span> Projets</p>
        </div>
        <div className="container__allProjects">
          {projectTab}
        </div>
      
    </div>
  )
}