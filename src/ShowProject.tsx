import './ShowProject.css';
import { PreviewObject, projectInfoType } from './types'
import projectInfo from "./projectInfo/projectInfo.json";


const info = projectInfo as projectInfoType
export function ShowProject({ selectedProject,
  changeProject
}: { selectedProject: PreviewObject, changeProject: Function }) {
  const backgroundImages = ['Images/Show.png', 'Images/ShowSecond.png']
  return (<div className="App">
    <body style={{ overflow: "hidden" }}>
      <img src={require("./"+backgroundImages[Math.floor((Math.random() * backgroundImages.length))])} alt='Not available' style={{ width: "100vw", height: "100vh", objectFit: "contain" }} />
      <div className='infoContainer'>
        <div style={{ width: "100%", borderBottom: "solid 1px white" }}><div style={{ fontSize: "50px" }}>{selectedProject.name}</div></div>
        <br />
        <img src={require("./"+selectedProject.img)} alt='Not available' className='previewImage' />
        <div className='descriptionContainer'>
          {info[selectedProject.key as keyof projectInfoType]}
        </div>
        <br />
        <button className='button' onClick={() => changeProject()}>Back</button>
        <a className='floatRight' href={`/Portfolio/downloads/${selectedProject.downloadKey}`} download={selectedProject.downloadKey}>
          <button className='button'>Download</button>
        </a>
      </div>
    </body>
  </div>
  );
}

export function ShowIntro(nextString: String, setToViewed: Function) {
  return (
    <div className="App">
      <body style={{ overflow: "hidden" }}>
        <img src={require("./Images/Welcome.png")} alt='Not available' style={{ width: "100vw", height: "100vh", objectFit: "contain" }} />
        <div className='introContainer'>
          <div className='introTextContainer'>
            {nextString}
          </div>
          <br />
          <button className='button bottomRightCorner' onClick={() => setToViewed()}>Proceed</button>
        </div>
      </body>
    </div>
  );
}