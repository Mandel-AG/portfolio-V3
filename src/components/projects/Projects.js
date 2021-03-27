import React from 'react';
import './project.css';
import projectsList from './listeprojets';

export default function Projects (){

  const projectTab = projectsList.map(skill =>
    ( skill.id%2 === 0 ?
      (<div key={skill.id} className="containerEachProject">
        <div className="eachProject__img">
          <img src={require(`${skill.img}`).default} alt={skill.nom}/>
        </div>
        <div className="eachProject__details">
          <p><span>Nom : </span>{skill.nom}</p>
          <p><span>Description : </span> {skill.description}</p>
          <p><span>Technos : </span> {skill.technologie}</p>
          {skill.visite ? <a href={skill.lien } target="_blank" rel="noreferrer"><span>Lien : </span>CLIQUEZ ICI</a> : null}        </div>
      </div>)
      :
      (<div key={skill.id} className="containerEachProject__reverse">
        <div className="eachProject__details__reverse">
        <p><span>Nom : </span>{skill.nom}</p>
          <p><span>Description : </span> {skill.description}</p>
          <p><span>Technos : </span> {skill.technologie}</p>
          {skill.visite ? <a href={skill.lien } target="_blank" rel="noreferrer"><span>Lien : </span>CLIQUEZ ICI</a> : null}
        </div>
        <div className="eachProject__img__reverse">
          <img src={require(`${skill.img}`).default} alt={skill.nom}/>
        </div>
      </div>)
    )
  )

  return(
    <div className="containerProjects" id="projets">
       <div className='projects__title'>
          <p><span className="title__number">02.</span> Projets</p>
        </div>
        <div className="container__allProjects">
          {projectTab}
        </div>
      
    </div>
  )
}