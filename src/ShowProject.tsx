import './ShowProject.css';
import { PreviewObject, projectInfoType, IProps, IState } from './types'
import projectInfo from "./projectInfo/projectInfo.json";


const info = projectInfo as projectInfoType
export function ShowProject({ selectedProject,
  changeProject
}: { selectedProject: PreviewObject, changeProject: Function }) {
  const backgroundImages = ['Images/Show.png', 'Images/ShowSecond.png']
  return (<div className="App">
    <body style={{ overflow: "hidden" }}>
      <img src={backgroundImages[Math.floor((Math.random() * backgroundImages.length))]} alt='Not available' style={{ width: "100vw", height: "100vh", objectFit: "contain" }} />
      <div className='infoContainer'>
        <img src={selectedProject.img} alt='Not available' className='previewImage' />
        <div className='descriptionContainer'>
          {info[selectedProject.key as keyof projectInfoType]}
        </div>
        <br />
        <button className='button' onClick={() => changeProject()}>Back</button>
        <a className='floatRight' href={`/downloads/${selectedProject.downloadKey}`} download={selectedProject.downloadKey}>
          <button className='button'>Download</button>
        </a>
      </div>
    </body>
  </div>
  );
}