import './ShowProject.css';
import { PreviewCVObject, PreviewObject, projectInfoType } from './types'
import projectInfo from "./projectInfo/projectInfo.json";

function AddDownloadButton({ downloadKey }: { downloadKey?: string }) {
  if (!downloadKey) {
    return <a className='floatRight' href={`https://eg.dk/it/eg-ajour/`}>
    <button className='button'>Website</button>
  </a>
  }
  return <a className='floatRight' href={`/Portfolio/downloads/${downloadKey}`} download={downloadKey}>
    <button className='button'>Download</button>
  </a>
}


function ChooseImageStyle(selectedProject: PreviewObject) {
  switch (selectedProject.imageStyle) {
    case "logo":
      return <div style={{ fontSize: "50px" }}><img src={require("./" + selectedProject.img)} alt='Not available' className='previewLogo' /> {selectedProject.name} </div>;
    default:
      return <img src={require("./" + selectedProject.img)} alt='Not available' className='previewImage' />;
  }
}

function ajourInfoText() {
  return <div>
    I have wroked for Ajour for around 2.5 years.
    <br />
    <br />
    First as an intern where i made a test suite for their web application frontend, with the testing framework Cypress.
<br /><br />
    Three months later after my internship i was hired on as a student developer, to continue my work on the test suite.
<br /><br />
    On june 2022, i was hired as a software developer in the frontend team, where i have had alot of different assignments.
<br /><br />
    These include:
    <ul style={{display:'list-item', paddingInlineStart:'40px'}}>
      <li>Implementing an image cropper with cropperjs.</li>
      <li>Implementing an image viewer where you can add coordinate points to the image with zoom and dragging functionality and the possibility for re-centering the image, this was done using the HTML canvas element.</li>
      <li>Re-writing and updating design of 1,5 system sections from MVC/Javascript to Aurelia/Typescript.*</li>
      <li>Re-writing the Cypress test Suite in the Playwright framework.</li>
      <li>Teaching the new student developer how to write tests in both Cypress and Playwright.</li>
      <li>Implementing frontend of a Flutter application for IOS and Android.</li>
    </ul>
    <br />
    <p style={{ fontSize: "10px" }}>*These are not small sections they are basically the equivalent of a meduim - large sized web sites in terms of functionality.</p>
    <br />
    <br />
    Since The Ajour system is blocked by payment and i don't contractually own the code i produce while working here, i can't show any images from the app.
    <br />
    To learn more about Ajour check out their website by clicking the button below.
  </div>
}

const info = projectInfo as projectInfoType
export function ShowProject({ selectedProject,
  changeProject
}: { selectedProject: PreviewObject, changeProject: Function }) {
  const backgroundImages = ['Images/Show.png', 'Images/ShowSecond.png']
  const projectimageHTML = ChooseImageStyle(selectedProject)
  return (<div className="App">
    <body style={{ overflow: "hidden" }}>
      <img src={require("./" + backgroundImages[Math.floor((Math.random() * backgroundImages.length))])} alt='Not available' style={{ width: "100vw", height: "100vh", objectFit: "contain" }} />
      <div className='infoContainer'>
        <div style={{ width: "100%", borderBottom: "solid 1px white" }}>{selectedProject.imageStyle === "logo" ? projectimageHTML : <div style={{ fontSize: "50px" }}>{selectedProject.name}</div>}</div>
        <br />
        {!selectedProject.imageStyle ? projectimageHTML : null}
        <div className='descriptionContainer'>
          {selectedProject.key !== "eg_ajour" ? info[selectedProject.key as keyof projectInfoType] : ajourInfoText()}
        </div>
        <br />
        <button className='button' onClick={() => changeProject()}>Back</button>
        <AddDownloadButton downloadKey={selectedProject.downloadKey} />
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

export function ShowCV({ selectedProject,
  changeProject
}: { selectedProject: PreviewCVObject, changeProject: Function }) {
  const backgroundImages = ['Images/Show.png', 'Images/ShowSecond.png']
  return (<div className="App">
    <body style={{ overflow: "hidden" }}>
      <img src={require("./" + backgroundImages[Math.floor((Math.random() * backgroundImages.length))])} alt='Not available' style={{ width: "100vw", height: "100vh", objectFit: "contain" }} />
      <div className='infoContainer'>
          <object data={require("./pdfs/CV-Sebastian-Juul-Knudsen-English.pdf")} type="application/pdf" style={{width: "100%", height:"100%"}}></object>
          <br />
          <button className='button' onClick={() => changeProject()}>Back</button>
      </div>
    </body>
  </div>
  );
}
