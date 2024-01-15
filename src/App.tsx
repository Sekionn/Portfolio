import React, { Component } from 'react';
import './App.css';
import ShowProject from './ShowProject';
import { PreviewObject } from './types'

export class App extends Component {
  state={
    projectSelected: undefined
  }
sliderGrabbed = false;
areas: Array<PreviewObject> = [
  { name: "Again", img: "./Images/ProjectImages/again.png" },
  { name: "Boss Slayers", img: "./Images/ProjectImages/BossSlayers.png" },
  { name: "Escape", img: "./Images/ProjectImages/Escape.png" },
  { name: "Introvert Shopping", img: "./Images/ProjectImages/IntroShop.png" },
  { name: "School", img: "./Images/ProjectImages/School.png" },
  { name: "Silk Route", img: "./Images/ProjectImages/silkroutegame.png" }];

projectSelected?: PreviewObject;
dragging: boolean = false;

handleEvent(event: any) {
  const slider = document.querySelector(".slider-inner") as HTMLDivElement;
  if (event.type === 'mousedown') {
    this.sliderGrabbed = true;
    this.dragging = false;
  } else if (event.type === 'mouseup') {
    this.sliderGrabbed = false;
  } else if (event.type === 'mouseleave') {
    this.sliderGrabbed = false;
    this.dragging = false;
  } else if (event.type === 'scroll') {
    const progressBar = document.querySelector(".inner-bar") as HTMLDivElement;
    progressBar.style.width = `${this.getScrollPercentage(slider, progressBar.style.width)}%`

  } else if(event.type === 'wheel' && slider.parentElement){
    event.preventDefault()
    slider.parentElement.scrollLeft += event.deltaY;
  }
}

getScrollPercentage(slider: HTMLDivElement, currentPercentage: string) {
  let percentage;
  if (slider.parentElement) {
    percentage = ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) * 100)
  }
  return percentage ? percentage : currentPercentage;
}

handleMouseMove(event: any) {
  event.preventDefault()
  event.stopPropagation()
  this.dragging = true;
  const slider = (document.querySelector('.slider-inner') as HTMLDivElement);
  if (this.sliderGrabbed && slider.parentElement) {
    slider.parentElement.scrollLeft -= event.movementX;
  }
    
}

handleClick(clickedObject: PreviewObject) {
  if (this.dragging !== true) {
    this.projectSelected = clickedObject;
    this.setState({projectSelected: clickedObject})
  }
}

render() {
  console.log('render', this.projectSelected)
  if (!this.projectSelected) {
    return (
      <div className="App">
        <body style={{ overflow: "hidden" }}>
          <img src='Images/Welcome.png' alt='Not available' style={{ width: "100vw", height: "100vh", objectFit: "contain" }} />
          <div className='slider-wrap'>
            <div className="slider"  onMouseEnter={(e) => this.handleEvent(e)} onMouseDown={(e) => this.handleEvent(e)} onMouseMove={(e) => this.handleMouseMove(e)} onMouseLeave={(e) => this.handleEvent(e)} onMouseUp={(e) => this.handleEvent(e)} onScroll={(e) => this.handleEvent(e)}>
              <div className='slider-inner' >
                {this.areas.map((area) => (
                  <div className='slide-img' title={area.name} onClick={() => this.handleClick(area)}> {area.img ? <img className='project-images' src={area.img} alt="" /> : ''}
                    {area.name}
                  </div>
                ))}
              </div>
            </div>
            <div className='progress-bar'>
              <div className='inner-bar'></div>
            </div>
          </div>
        </body>
      </div>
    );
  } else {
    return (
      <ShowProject />
    );
  }

}
}