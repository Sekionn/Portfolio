import './ShowProject.css';
import { PreviewObject, projectInfoType } from './types'
import projectInfo from "./projectInfo/projectInfo.json";

const info = projectInfo as projectInfoType
export default function GetProjectInfo({ selectedProject }: { selectedProject: PreviewObject }) {
  return (<div className="App">
    <body style={{ overflow: "hidden" }}>
      <img src='Images/Show.png' alt='Not available' style={{ width: "100vw", height: "100vh", objectFit: "contain" }} />
      <div className='infoContainer'>
        <img src={selectedProject.img} alt='Not available' className='previewImage' />
        <div className='descriptionContainer'>
          {info[selectedProject.key as  keyof projectInfoType]}
        </div>
      </div>
    </body>
  </div>
  );
}