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
          <p><span>Nom : </span>{el.nom}</p>
          <p><span>Description : </span> {el.description}</p>
          <p><span>Technos : </span> {el.technologie}</p>
          {el.visite ? <a href={el.lien } target="_blank" rel="noreferrer"><span>Lien : </span>CLIQUEZ ICI</a> : null}        </div>
      </div>)
      :
      (<div key={el.id} className="containerEachProject__reverse">
        <div className="eachProject__details__reverse">
        <p><span>Nom : </span>{el.nom}</p>
          <p><span>Description : </span> {el.description}</p>
          <p><span>Technos : </span> {el.technologie}</p>
          {el.visite ? <a href={el.lien } target="_blank" rel="noreferrer"><span>Lien : </span>CLIQUEZ ICI</a> : null}
        </div>
        <div className="eachProject__img__reverse">
          <img src={require(`${el.img}`).default} alt={el.nom}/>
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