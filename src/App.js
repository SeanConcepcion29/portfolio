import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBTypography,
  MDBCol,
  MDBRow
} from "mdb-react-ui-kit";

import logoImage from './images/logo.png'
import titleImage from './images/title.png'
import aboutTitle from './images/about-title.png'
import techTitle from './images/tech-title.png'
import educTitle from './images/educ-title.png'
import orgTitle from './images/org-title.png'
import projectTitle from './images/project-title.png'
import timelineTitle from './images/timeline-title.png'
import timeline from './images/timeline.png'

import mongodbImage from "./images/mongodb.png";
import composeImage from "./images/compose.png";
import gdscriptImage from "./images/gdscript.png";
import javaImage from "./images/java.png";
import reactjsImage from "./images/reactjs.png";
import kotlinImage from "./images/kotlin.jpg";
import pythonImage from "./images/python.png";
import flutterImage from "./images/flutter.png";

import artisanImage from "./images/artisan.png";
import bricsImage from "./images/brics.png";
import cardboardvoyageImage from "./images/cardboard_voyage.png";
import travelwheelsImage from "./images/travelwheels.png";
import healthmonImage from "./images/healthmon.png";
import icsmsImage from "./images/icsms.png";
import firstraiderImage from "./images/firstraider.jpg";

function Home() {
  return (
    <MDBCard style={{ border: "none", boxShadow: "none", height: "90vh", overflow: "hidden" }}>
      <MDBCardBody 
        style={{ 
          marginTop: '-40px',
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", 
          textAlign: "center", 
          height: "100%"
        }}
      >

        <MDBCardTitle style={{ fontSize: "2vw", marginBottom: "0px", color: '#333'}} className="responsive-title">
          hi, my name is
        </MDBCardTitle>

        <img
          src={titleImage}
          style={{
            height: "auto",
            width: "50vw", 
            maxWidth: "60vw",
          }}
        />
      </MDBCardBody>
    </MDBCard>
  );
}


function About() {
  return (
    <MDBCard style={{ border: "none", boxShadow: "none", overflow: "hidden", color: '#333'}} className="mt-3">

      <img src={aboutTitle} style={{height: "auto", width: "50vw", maxWidth: '300px'}} className="p-2"/>

      <MDBRow className="mt-3 w-100 m-0 h-100 d-flex" id="aboutme">
        <MDBCol md="4" className="text-start">
          <MDBCardTitle> PERSONAL INFO </MDBCardTitle>
          <p>Sean Concepcion is a senior BS Computer Science student from the University of the Philippines Los Baños (UPLB). His experience includes serving as a Backend Team Leader of a website dev team in UPLB and numerous school-related, freelance, and personal projects.</p>
        </MDBCol>
        <MDBCol md="4" className="text-start">
          <MDBCardTitle> MY WORK </MDBCardTitle>
          <p>Most of his work revolves around Android mobile application, full-stack website, and 2D game development.</p>
        </MDBCol>
        <MDBCol md="4" className="text-start">
          <MDBCardTitle>FUN FACT</MDBCardTitle>
          <p>His favorite sorting algorithm is no other than Bogo Sort, not for its efficiency, but for its fairness — every permutation given an equal chance, every shuffle a test of fate.</p>
        </MDBCol>
      </MDBRow>

      <MDBRow className="mt-2 g-4">
        <MDBCol md="4" className="text-start">
          <img src={techTitle} style={{height: "auto", width: "50vw", maxWidth: '300px'}} className="p-2"/>
          <MDBRow className="mt-4">
            {[
              kotlinImage,
              composeImage,
              gdscriptImage,
              javaImage,
              reactjsImage,
              pythonImage,
              flutterImage,
              mongodbImage,
            ].map((imgSrc, index) => (
              <MDBCol sm="4" xs="12" className="p-2 d-flex justify-content-center" key={index}>
                <MDBCardImage 
                  src={imgSrc} 
                  alt={`Tech ${index + 1}`} 
                  style={{ width: '80%', height: 'auto', objectFit: 'contain' }}
                />
            </MDBCol>
            ))}
          </MDBRow>
        </MDBCol>

        <MDBCol md="8" className="text-start">
          <MDBCol>
            <img src={timelineTitle} style={{height: "auto", width: "50vw", maxWidth: '240px'}} className="p-2"/> 
          </MDBCol>
          <MDBCol className="mt-4">
            <img src={timeline} className="img-fluid p-2 timeline-image" style={{width: "100%", height: "auto", objectFit: "contain"}} alt="Timeline"/>
          </MDBCol>
        </MDBCol>
      </MDBRow>

    </MDBCard>
  );
}

function Project() {
  return (
    <MDBCard style={{ border: "none", boxShadow: "none", overflow: "hidden" }}>
        <MDBRow className="mt-3 w-100 m-0 h-100 d-flex" id="projects">
          <MDBCol>


          <MDBContainer className="text-center mb-4">
            <img src={projectTitle} style={{height: "auto", width: "50vw", maxWidth: '300px'}} className="p-2"/>

            <MDBRow className="justify-content-center" style={{ fontSize: '1em' }}>
              <MDBCol size="auto" className="d-flex align-items-center me-3">
                <span style={{ width: '10px', height: '10px', backgroundColor: '#fddc5c', borderRadius: '50%', display: 'inline-block', marginRight: '5px' }}></span>
                Ongoing
              </MDBCol>
              <MDBCol size="auto" className="d-flex align-items-center">
                <span style={{ width: '10px', height: '10px', backgroundColor: '#39e75f', borderRadius: '50%', display: 'inline-block', marginRight: '5px' }}></span>
                Finished
              </MDBCol>
            </MDBRow>
          </MDBContainer>



            <MDBRow>
              <MDBCol md="8" className="text-center">
                <a href="https://brics-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <MDBCard className="card-hover" style={{ height: '55vh' }}>
                    <MDBCardBody style={{ color: '#333' }}> 
                      <MDBCardTitle style={{ fontSize: '1.7em', marginBottom: '0' }}> BRICS </MDBCardTitle> 
                      <p className="mb-1">
                        ICS Booking and Reservation Website
                        <span style={{ width: '10px', height: '10px', backgroundColor: '#39e75f', borderRadius: '50%', display: 'inline-block', marginLeft: '7px'}}></span>
                      </p>
                      <span style={{fontSize: '1em', opacity: '0.5', fontStyle: 'italic'}}> {'<links to the website>'} </span>
                      <MDBCardImage src={bricsImage} className="img-fluid" style={{ objectFit: "contain", width: "90%", height: "90%" }} />
                    </MDBCardBody>
                  </MDBCard>
                </a>
              </MDBCol>

              <MDBCol md="4" className="text-center">
                <a href="https://travelwheelsph.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <MDBCard className="card-hover" style={{ height: '55vh' }}>
                    <MDBCardBody style={{ color: '#333' }}> 
                      <MDBCardTitle style={{ fontSize: '1.7em', marginBottom: '0' }}> Travel Wheels </MDBCardTitle>
                      <p className="mb-1">
                        Travel Booking and Quotation Website
                        <span style={{ width: '10px', height: '10px', backgroundColor: '#fddc5c', borderRadius: '50%', display: 'inline-block', marginLeft: '7px'}}></span>
                      </p>
                      <span style={{fontSize: '1em', opacity: '0.5', fontStyle: 'italic', marginBottom: '0' }}> {'<links to the website>'} </span>
                      <MDBCardImage src={travelwheelsImage} className="img-fluid" style={{ objectFit: "contain", width: "90%", height: "90%" }} />
                    </MDBCardBody>
                  </MDBCard>
                </a> 
              </MDBCol>
            </MDBRow>

            <MDBRow className="mt-4">
              <MDBCol md="4" className="text-center">
                <a href="https://github.com/SKIConcepcion/artisan" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <MDBCard className="card-hover" style={{ height: '45vh' }}>
                    <MDBCardBody style={{ color: '#333' }}>
                      <MDBCardTitle style={{ fontSize: '1.7em', marginBottom: '0' }}> ARTISAN </MDBCardTitle>
                      <p className="mb-1">
                        Network Simulator Mobile Application
                        <span style={{ width: '10px', height: '10px', backgroundColor: '#fddc5c', borderRadius: '50%', display: 'inline-block', marginLeft: '7px'}}></span>
                      </p>
                      <span style={{fontSize: '1em', opacity: '0.5', fontStyle: 'italic'}}> {'<links to the github repository>'} </span>
                      <MDBCardImage src={artisanImage} className="img-fluid" style={{ objectFit: "contain", width: "90%", height: "90%" }} />
                    </MDBCardBody>
                  </MDBCard>
                </a>
              </MDBCol>

              <MDBCol md="5" className="text-center">
                  <MDBCard className="card-hover" style={{ height: '45vh' }}>
                    <MDBCardBody>
                      <MDBCardTitle style={{ fontSize: '1.7em', marginBottom: '0' }}> ICS CMS </MDBCardTitle>
                      <p className="mb-1">
                        ICS Clearance Management System Website
                        <span style={{ width: '10px', height: '10px', backgroundColor: '#39e75f', borderRadius: '50%', display: 'inline-block', marginLeft: '7px'}}></span>
                      </p>
                      <MDBCardImage src={icsmsImage} className="img-fluid" style={{ objectFit: "contain", width: "90%", height: "90%" }} />
                    </MDBCardBody>
                  </MDBCard>
              </MDBCol>

              <MDBCol md="3" className="text-center">
                  <MDBCard className="card-hover" style={{ height: '45vh' }}>
                    <MDBCardBody>
                      <MDBCardTitle style={{ fontSize: '1.7em', marginBottom: '0' }}> HealthMon </MDBCardTitle>
                      <p className="mb-1">
                        Health Monitoring Mobile Application
                        <span style={{ width: '10px', height: '10px', backgroundColor: '#39e75f', borderRadius: '50%', display: 'inline-block', marginLeft: '7px'}}></span>
                      </p>
                      <MDBCardImage src={healthmonImage} className="img-fluid" style={{ objectFit: "contain", width: "90%", height: "90%" }} />
                    </MDBCardBody>
                  </MDBCard>
              </MDBCol>
            </MDBRow>

            <MDBRow className="mt-4">
              <MDBCol md="3" className="text-center">
              <MDBCard className="card-hover" style={{ height: '65vh' }}>
                  <MDBCardBody>
                    <MDBCardTitle style={{ fontSize: '1.7em', marginBottom: '0' }}> Cardboard Voyage </MDBCardTitle>
                    <p className="mb-1">
                      Turn-based RPG Mobile Game
                      <span style={{ width: '10px', height: '10px', backgroundColor: '#fddc5c', borderRadius: '50%', display: 'inline-block', marginLeft: '7px'}}></span>
                    </p>
                    <MDBCardImage src={cardboardvoyageImage} className="img-fluid" style={{ objectFit: "contain", width: "90%", height: "90%" }} />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="3" className="text-center">
                <a href="https://expo.dev/preview/update?message=Fix%20SDK%20issue&updateRuntimeVersion=1.0.0&createdAt=2025-03-26T10%3A18%3A30.706Z&slug=exp&projectId=1803f557-182b-4193-a1ce-7b1f53b2968f&group=94e01bfb-47dc-4bb6-bd40-9fb2ecb5aed7" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <MDBCard className="card-hover" style={{ height: '65vh' }}>
                   <MDBCardBody style={{ color: '#333' }}> 
                      <MDBCardTitle style={{ fontSize: '1.7em', marginBottom: '0' }}> First Raiders </MDBCardTitle>
                      <p className="mb-1">
                        First Aid Response Mobile App
                        <span style={{ width: '10px', height: '10px', backgroundColor: '#39e75f', borderRadius: '50%', display: 'inline-block', marginLeft: '7px'}}></span>
                      </p>
                      <span style={{fontSize: '1em', opacity: '0.5', fontStyle: 'italic'}}> {'<links to qr download>'} </span>
                      <MDBCardImage src={firstraiderImage} className="img-fluid" style={{ objectFit: "contain", width: "90%", height: "90%" }} />
                    </MDBCardBody>
                  </MDBCard>
                </a>
              </MDBCol>
            </MDBRow>


              
          </MDBCol>
        </MDBRow>
    </MDBCard>
  );
}






function Resume() {
  return (
    <MDBCard style={{ border: "none", boxShadow: "none" }}>
      <MDBCardBody>
        <MDBCardTitle>
        Resume
        </MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
  );
}



function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderCard = () => {
    switch (activeTab) {
      case "home": return (Home());
      case "about": return (About()); 
      case "project": return (Project()); 
      case "resume": return (Resume()); 
      default: return null;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 p-2">
      {/* Header */}
      <MDBContainer fluid className="d-flex justify-content-between align-items-center py-2">
        <div>
          <img
            src={logoImage}
            alt="Logo"
            style={{ height: "60px", width: "60px", objectFit: "contain" }}
          />
        </div>

        {/* Right-side nav */}
        <div className="ms-auto">
          <MDBNavbarNav className="d-flex flex-row" style={{ fontSize: "1.1em" }}>
            <MDBNavbarItem className="me-4">
              <MDBNavbarLink
                className={activeTab === "home" ? "active-tab-home" : ""}
                active={activeTab === "home"}
                onClick={() => setActiveTab("home")}
              >
                home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="me-4">
              <MDBNavbarLink
                className={activeTab === "about" ? "active-tab-about" : ""}
                active={activeTab === "about"}
                onClick={() => setActiveTab("about")}
              >
                about
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="me-4">
              <MDBNavbarLink
                className={activeTab === "project" ? "active-tab-project" : ""}
                active={activeTab === "project"}
                onClick={() => setActiveTab("project")}
              >
                project
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="me-2">
              <MDBNavbarLink
                className={activeTab === "resume" ? "active-tab-resume" : ""}
                active={activeTab === "resume"}
                onClick={() => window.open("https://concepcion-resume.tiiny.site/", "_blank")}
              >
                resume
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </div>
      </MDBContainer>

      {/* Main Content */}
      <div style={{ flex: 1, position: "relative", minHeight: "0" }}>{renderCard()}</div>
    </div>
  );
}


export default App;
