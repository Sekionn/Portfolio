import React, { Component } from 'react';
import './App.css';
import { ShowProject, ShowIntro } from './ShowProject';
import { IProps, IState, PreviewObject } from './types'

export class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      selectedProject: undefined,
      introShowing: localStorage.getItem("IntroWasViewed") ? false : true,
    };
  }

  introText: Array<any> = [
    <p style={{ display: "inline-block" }}>Welcome to JUULS TRINKETS.<br />
      The best bargain bin this side of Storebaelt, here you can find anything your heart desires. <p style={{ fontSize: "10px" }}>If we have it in stock.</p>
    </p>
  ]

  sliderGrabbed = false;
  areas: Array<PreviewObject> = [
    { name: "Again", img: "./Images/ProjectImages/again.png", key: "again", downloadKey: "Again.zip" },
    { name: "Boss Slayers", img: "./Images/ProjectImages/bossSlayers.png", key: "bossSlayers", downloadKey: "BossSlayers.zip" },
    { name: "Escape", img: "./Images/ProjectImages/escape.png", key: "escape", downloadKey: "Escape.zip" },
    { name: "Introvert Shopping", img: "./Images/ProjectImages/introShop.png", key: "introShop", downloadKey: "IntrovertShopping.zip" },
    { name: "School", img: "./Images/ProjectImages/school.png", key: "school", downloadKey: "School.zip" },
    { name: "Silk Route", img: "./Images/ProjectImages/silkroutegame.png", key: "silkroutegame", downloadKey: "Silkroute.zip" }];

  projectSelected?: PreviewObject;
  dragging: boolean = false;

  changeProject() {
    this.setState(() => ({
      selectedProject: undefined,
    }));
  }

  setIntroToViewed() {
    localStorage.setItem("IntroWasViewed", "true");
    this.setState(() => ({
      selectedProject: undefined,
      introShowing: false
    }));
  }

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

    } else if (event.type === 'wheel' && slider.parentElement) {
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
      this.setState(() => ({
        selectedProject: clickedObject,
      }));
    }
  }

  render() {
    if (this.state.introShowing) {
      return ShowIntro(this.introText[0], this.setIntroToViewed.bind(this));
    }
    return this.showProject();
  }

  showProject() {
    if (!this.state.selectedProject) {
      return (
        <div className="App">
          <body style={{ overflow: "hidden" }}>
            <img src='Images/Welcome.png' alt='Not available' style={{ width: "100vw", height: "100vh", objectFit: "contain" }} />
            <div className='slider-wrap'>
              <div className="slider" onMouseEnter={(e) => this.handleEvent(e)} onMouseDown={(e) => this.handleEvent(e)} onMouseMove={(e) => this.handleMouseMove(e)} onMouseLeave={(e) => this.handleEvent(e)} onMouseUp={(e) => this.handleEvent(e)} onScroll={(e) => this.handleEvent(e)}>
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
        <ShowProject selectedProject={this.state.selectedProject!} changeProject={this.changeProject.bind(this)} />
      );
    }
  }
}