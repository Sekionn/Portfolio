import React from 'react';
import './App.css';
import welcome from './Welcome.png'
let pressed = false;
let startX: number;

function handleEvent(event: any) {
  const slider = document.querySelector(".slider") as HTMLDivElement;
  if (event.type === 'mousedown'){
    const offsetX = (document.querySelector('.slider-inner') as HTMLDivElement).offsetLeft;
    pressed = true;
    startX = event.nativeEvent.offsetX - offsetX;
  } else if(event.type === 'mouseenter') {
    slider.style.cursor = 'grab';
  } else if(event.type === 'mouseleave') {
    slider.style.cursor = 'default';
  } else if(event.type === 'mouseup') {
    slider.style.cursor = 'grab';
    pressed = false;
  }
}

function handleMouseMove(event: any){
  if(!pressed) return;
  event.preventDefault();

  let x = event.nativeEvent.offsetX;

  const innerSlider = (document.querySelector('.slider-inner') as HTMLDivElement);
  innerSlider.style.left = `${x - startX}px`;
  checkBoundaries(innerSlider);
}
    
function checkBoundaries(inner: HTMLDivElement){
  const innerRect = inner.getBoundingClientRect();
  const outerRect = (document.querySelector(".slider") as HTMLDivElement).getBoundingClientRect();

  if(parseInt(inner.style.left) > 0){
    inner.style.left = '0px';
  } else if(innerRect.right < outerRect.right) {
    inner.style.left = `-${innerRect.width - outerRect.width}px`
  }
}

function App() {

  const  areas: Array<PreviewObject> = [
    {name: "Hello", img: ""},
    {name: "School", img: ""} , 
    {name: "YOYOY", img: ""}, 
    {name: "Well", img: ""}, 
    {name: "Well", img: ""}, 
    {name: "Well", img: ""}];

  

  return (
    <div className="App">
      <body style={{overflow: "hidden"}}>
      <img src={welcome} alt='Not available' style={{ width: "100vw", height: "100vh", objectFit: "contain"}}/>
      <div className="slider" onMouseEnter={handleEvent} onMouseDown={handleEvent} onMouseMove={handleMouseMove} onMouseLeave={handleEvent} onMouseUp={handleEvent}>
          <div className='slider-inner' >
            {areas.map((area) => (
              <div className='slide-img' >{area.name}</div>
            ))}
          </div>
      </div>
      </body>
    </div>
  );
}

export default App;
//
// style={{overflowX: "scroll",  whiteSpace: "nowrap", position: 'absolute', top: "37%", left: "25vw", width: "50vw"}}
// style={{display: "inline-block", width: "200px", height: "200px", border: "1px solid white", borderRadius: "10px", padding: "0px 10px", margin: "10px 25px"}}

interface PreviewObject{
  name: string;
  url?: string;
  img: string;
}