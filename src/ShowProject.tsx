import './ShowProject.css';
import { PreviewObject, projectInfoType, IProps, IState } from './types'
import projectInfo from "./projectInfo/projectInfo.json";
import React, { Component, useState } from 'react';


const info = projectInfo as projectInfoType
export function ShowProject({ selectedProject,
  changeProject
} : {selectedProject: PreviewObject, changeProject: Function}) {
  return (<div className="App">
    <body style={{ overflow: "hidden" }}>
      <img src='Images/Show.png' alt='Not available' style={{ width: "100vw", height: "100vh", objectFit: "contain" }} />
      <div className='infoContainer'>
        <img src={selectedProject.img} alt='Not available' className='previewImage' />
        <div className='descriptionContainer'>
          {info[selectedProject.key as keyof projectInfoType]}
        </div>
        <button onClick={() => changeProject()}>Hello</button>
      </div>
    </body>
  </div>
  );
}