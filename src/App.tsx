import React from 'react';
import './App.css';
import ShowProject from './ShowProject';
import { PreviewObject } from './types'

let sliderGrabbed = false;
let startX: number;
let areas: Array<PreviewObject> = [
  { name: "Again", img: "./Images/ProjectImages/again.png" },
  { name: "Boss Slayers", img: "./Images/ProjectImages/BossSlayers.png" },
  { name: "Escape", img: "./Images/ProjectImages/Escape.png" },
  { name: "Introvert Shopping", img: "./Images/ProjectImages/IntroShop.png" },
  { name: "School", img: "./Images/ProjectImages/School.png" },
  { name: "Silk Route", img: "./Images/ProjectImages/silkroutegame.png" }];

let projectSelected: boolean = false;
let dragging: boolean = false;

function handleEvent(event: any) {
  const slider = document.querySelector(".slider-inner") as HTMLDivElement;
  if (event.type === 'mousedown') {
    sliderGrabbed = true;
    dragging = false;
  } else if (event.type === 'mouseup') {
    sliderGrabbed = false;
  } else if (event.type === 'mouseleave') {
    sliderGrabbed = false;
    dragging = false;
  } else if (event.type === 'scroll') {
    const progressBar = document.querySelector(".inner-bar") as HTMLDivElement;
    progressBar.style.width = `${getScrollPercentage(slider, progressBar.style.width)}%`

  } else if(event.type === 'wheel' && slider.parentElement){
    event.preventDefault()
    slider.parentElement.scrollLeft += event.deltaY;
  }
}

function getScrollPercentage(slider: HTMLDivElement, currentPercentage: string) {
  let percentage;
  if (slider.parentElement) {
    percentage = ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) * 100)
  }
  return percentage ? percentage : currentPercentage;
}

function handleMouseMove(event: any) {
  event.preventDefault()
  event.stopPropagation()
  dragging = true;
  const slider = (document.querySelector('.slider-inner') as HTMLDivElement);
  if (sliderGrabbed && slider.parentElement) {
    slider.parentElement.scrollLeft -= event.movementX;
  }
    
}

function handleClick(event: any) {
  if (dragging !== true) {
    dragging = false;
  }
}

function App() {
  if (!projectSelected) {
    return (
      <div className="App">
        <body style={{ overflow: "hidden" }}>
          <img src='Images/Welcome.png' alt='Not available' style={{ width: "100vw", height: "100vh", objectFit: "contain" }} />
          <div className='slider-wrap'>
            <div className="slider" onMouseEnter={handleEvent} onMouseDown={handleEvent} onMouseMove={handleMouseMove} onMouseLeave={handleEvent} onMouseUp={handleEvent} onScroll={handleEvent}>
              <div className='slider-inner' >
                {areas.map((area) => (
                  <div className='slide-img' onClick={handleClick}> {area.img ? <img className='project-images' src={area.img} alt="" /> : ''}
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

export default App;