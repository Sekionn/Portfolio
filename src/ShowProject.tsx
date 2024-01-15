import React, { Component } from 'react';
import './App.css';
import { PreviewObject } from './types'
import projectInfo from "./projectInfo/projectInfo.json";

type values={
  selectedProject: PreviewObject
}
export class ShowProject extends Component<values>{


render() {
  
    return (
      <div>{projectInfo.Again}</div>
    );
  
}

}