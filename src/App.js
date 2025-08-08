import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaItchIo } from "react-icons/fa";

import {
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBRow
} from "mdb-react-ui-kit";

import logoImage from './images/logo.png'
import titleImage from './images/title.png'
import aboutTitle from './images/about-title.png'
import techTitle from './images/tech-title.png'
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
import noahImage from "./images/noah-alt.png";
import bricsImage from "./images/brics.png";
import ncnpImage from "./images/ncnp.png";
import travelwheelsImage from "./images/travelwheels.png";
import healthmonImage from "./images/healthmon.png";
import icsmsImage from "./images/icsms.png";
import firstraiderImage from "./images/firstraider.png";
import boatsImage from "./images/boats.png";


function ProjectCard(title, desc, done, type, purpose) {

  const doneColor = done ? '#C4D498' : '#FECE52'; 

  const typeColor = type === 'mobile application'
  ? '#83E2DA'
  : type === 'website'
  ? '#BC8CE0'
  : type === '2d video game'
  ? '#F376A0'
  : '#BFBFBF';

  const purposeColor = purpose === 'school activity' 
  ? '#FFA039' 
  : purpose === 'personal project' 
  ? '#BC8CE0' 
  : purpose === 'freelance project' 
  ? '#3FCFFD' 
  : purpose === 'internship project' 
  ? '#7ED957' 
  : '#BFBFBF';


  return (
    <div>
      <MDBCardTitle className="card-title" style={{ fontSize: '2rem' }}>
        {title}
      </MDBCardTitle>

      {/* Status Row */}
      <MDBRow className="mb-3 g-2">
        <MDBCol size="auto">
          <MDBCard style={{ backgroundColor: doneColor, fontSize: '0.8rem', padding: '0.3em 0.8em', letterSpacing: '1px', color: 'white', borderRadius: '7px', border: "none", boxShadow: "none" }}>
            {done ? 'completed' : 'ongoing'}
          </MDBCard>
        </MDBCol>
        <MDBCol size="auto">
         <MDBCard style={{ backgroundColor: typeColor, fontSize: '0.8rem', padding: '0.3em 0.8em', letterSpacing: '1px', color: 'white', borderRadius: '7px', border: "none", boxShadow: "none" }}>
            {type}
          </MDBCard>
        </MDBCol>
        <MDBCol size="auto">
          <MDBCard style={{ backgroundColor: purposeColor, fontSize: '0.8rem', padding: '0.3em 0.8em', letterSpacing: '1px', color: 'white', borderRadius: '7px', border: "none", boxShadow: "none" }}>
            {purpose}
          </MDBCard>
        </MDBCol>
      </MDBRow>


      <p className="card-text" style={{ fontSize: '1rem' }}>
        {desc}
      </p>
    </div>
  );
}



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
            width: "60vw", 
            maxWidth: "900px",
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
          <MDBCardTitle> CONTACTS </MDBCardTitle>
            <MDBCol size="auto" className="d-flex">

              <MDBCol size="auto" className="me-4">
                <a href="mailto:skiconcepcion@gmail.com" style={{color: '#333'}}>
                  <FaEnvelope size={35} style={{color: '#333'}}/>
                </a>
              </MDBCol>

              <MDBCol size="auto" className="me-4">
                <a 
                  href="https://www.linkedin.com/in/sean-concepcion/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{color: '#333'}}
                >
                  <FaLinkedin size={35} style={{color: '#333'}}/>
                </a>
              </MDBCol>

              <MDBCol size="auto" className="me-4">
                <a 
                  href="https://skiconcepcion.itch.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{color: '#333'}}
                >
                  <FaItchIo size={35} style={{color: '#333'}}/>
                </a>
              </MDBCol>

              <MDBCol size="auto" className="me-4">
                <a 
                  href="https://github.com/SeanConcepcion29" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="d-flex align-items-center gap-2 text-decoration-none"
                  style={{color: '#333'}}
                >
                  <FaGithub size={35} style={{color: '#333'}}/>
                  <p className="m-0" style={{color: '#333'}}>school</p>
                </a>
              </MDBCol>

              <MDBCol size="auto" className="me-4">
                <a 
                  href="https://github.com/SKIConcepcion" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="d-flex align-items-center gap-2 text-decoration-none"
                  style={{color: '#333'}}
                >
                  <FaGithub size={35} style={{color: '#333'}}/>
                  <p className="m-0" style={{color: '#333'}}>professional</p>
                </a>
              </MDBCol>

            </MDBCol>
          </MDBCol>
      </MDBRow>
      

      <MDBRow className="mt-2 g-4">
        <MDBCol md="4" className="text-start">
          <img src={techTitle} style={{ height: "auto", width: "50vw", maxWidth: '300px' }} className="p-2" />
          
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
              <MDBCol size="4" className="p-2 d-flex justify-content-center" key={index}>
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
            <img src={timelineTitle} style={{ height: "auto", width: "50vw", maxWidth: '240px' }} className="p-2" />
          </MDBCol>
          <MDBCol className="mt-4">
            <img src={timeline} className="img-fluid p-2 timeline-image" style={{ width: "100%", height: "auto", objectFit: "contain" }} alt="Timeline" />
          </MDBCol>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}



function Project() {
  return (
    <MDBCard style={{ border: "none", boxShadow: "none", overflow: "hidden", color: '#333'}} className="mt-3">

      <div className="d-flex justify-content-center mb-4">
        <img src={projectTitle} style={{height: "auto", width: "50vw", maxWidth: '300px'}} className="p-2 text-center"/>
      </div>


      <MDBCard className="border mb-3">
        <MDBCardBody> 
          <MDBRow className="g-4">
            <MDBCol md="5">
              <MDBCardImage src={noahImage} alt="Card image" fluid className="rounded h-100" style={{objectFit: 'contain'}}/>
            </MDBCol>
            <MDBCol md="7">
              <MDBCardBody className="text-start">
                {ProjectCard(
                  "Nationwide Operational Assessment of Hazards (Project NOAH)",
                  "Project NOAH is the Philippines'  primary disaster risk reduction and management program, managed by UP and formerly led by DOST from 2012 to 2017. My contribution here as an intern focuses on backend development for the data extraction component of the typhoon tracker feature.",
                  true, "website", "internship project"
                )}
                <div className="mt-3"/>
                <a href="https://noah.up.edu.ph/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}> Click here to visit website </a>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>


      <MDBCard className="border mb-3">
        <MDBCardBody> 
          <MDBRow className="g-4">
            <MDBCol md="5">
              <MDBCardImage src={bricsImage} alt="Card image" fluid className="rounded h-100" style={{objectFit: 'contain'}}/>
            </MDBCol>
            <MDBCol md="7">
              <MDBCardBody className="text-start">
                {ProjectCard(
                  "BRICS: Booking and Reservation System of Institute of Computer Science",
                  "BRICS is a website which aims to ease the process of booking and reservation of ICS rooms and facilities. This system is an improvement from the current manual system of booking and reservation, having the vision to digitize most of the process for convenience and faster transactions.",
                  true, "website", "school activity"
                )}
                <div className="mt-3"/>
                <a href="https://brics-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}> Click here to visit website </a>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>


      <MDBCard className="border mb-3">
        <MDBCardBody> 
          <MDBRow className="g-4">
            <MDBCol md="5">
              <MDBCardImage src={travelwheelsImage} alt="Card image" fluid className="rounded h-100" style={{objectFit: 'contain'}}/>
            </MDBCol>
            <MDBCol md="7">
              <MDBCardBody className="text-start">
                {ProjectCard(
                  "TravelWheels",
                  "TravelWheels is a freelance website project that offers user-friendly process and transcations for booking, rentals, and other various services. This system includes chatbot and admin-user account type among many other features.",
                  true, "website", "freelance project"
                )}
                <div className="mt-3"/>
                <a href="https://travelwheelsph.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}> Click here to visit website </a>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      
      <MDBCard className="border mb-3">
        <MDBCardBody> 
          <MDBRow className="g-4">
            <MDBCol md="5">
              <MDBCardImage src={ncnpImage} alt="Card image" fluid className="rounded h-100" style={{objectFit: 'contain'}}/>
            </MDBCol>
            <MDBCol md="7">
              <MDBCardBody className="text-start">
                {ProjectCard(
                  "Nor Crying, Nor Pain",
                  "Nor Crying, Nor Pain or NCNP is a personal project on a 2D side-scroller puzzle game made using personally drawn assets and Godot Engine. It follow the story of a reporter investigating a peculiar election process on a secluded village where the protagonist must navigate through the area and use the environment to solve puzzles and escape the eldtrich horror that lies within.",
                  false, "2d video game", "personal project"
                )}
              <div className="mt-3"/>
              <a href="https://skiconcepcion.itch.io/nor-crying-nor-pain" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}> Click here to visit itch.io page </a>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="border mb-3">
        <MDBCardBody> 
          <MDBRow className="g-4">
            <MDBCol md="5">
              <MDBCardImage src={boatsImage} alt="Card image" fluid className="rounded h-100" style={{objectFit: 'contain'}}/>
            </MDBCol>
            <MDBCol md="7">
              <MDBCardBody className="text-start">
                {ProjectCard(
                  "BOATS (Boat in Ocean: Animation and Terrain Simulation)",
                  "Boat in Ocean - Animation and Terrain Simulation” or “BOATS” is an interactive simulation highlighting WebGL capabilities to render animations and objects.",
                  true, "website", "school activity"
                )}
                <div className="mt-3"/>
                <a href="https://seanconcepcion29.github.io/CMSC-161-BOATS/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}> Click here to visit website </a>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="border mb-3">
        <MDBCardBody> 
          <MDBRow className="g-4">
            <MDBCol md="5">
              <MDBCardImage src={firstraiderImage} alt="Card image" fluid className="rounded h-100" style={{objectFit: 'contain'}}/>
            </MDBCol>
            <MDBCol md="7">
              <MDBCardBody className="text-start">
                {ProjectCard(
                  "FirstRaider",
                  "First Raider is a freelance mobile application prototype that works for Android and IOS designed to improve first aid response through a grab-like system which allows nearby respondents to attend to the emergency quickly.",
                  true, "mobile application", "freelance project"
                )}
                <div className="mt-3"/>
                <a href="https://expo.dev/preview/update?message=Fix%20SDK%20issue&updateRuntimeVersion=1.0.0&createdAt=2025-03-26T10%3A18%3A30.706Z&slug=exp&projectId=1803f557-182b-4193-a1ce-7b1f53b2968f&group=94e01bfb-47dc-4bb6-bd40-9fb2ecb5aed7" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}> Click here to view downloadable qr code </a>        
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="border mb-3">
        <MDBCardBody> 
          <MDBRow className="g-4">
            <MDBCol md="5">
              <MDBCardImage src={healthmonImage} alt="Card image" fluid className="rounded h-100" style={{objectFit: 'contain'}}/>
            </MDBCol>
            <MDBCol md="7">
              <MDBCardBody className="text-start">
                {ProjectCard(
                  "HealthMon: Health Monitoring Mobile Application",
                  "HealthMon is a health monitoring system application created using the Flutter framework which is connected to a Firebase Cloud Firestore for database and Firebase Authentication for the login and signup features.",
                  true, "mobile application", "school activity"
                )}
                <div className="mt-3"/>
                <a href="https://github.com/SKIConcepcion/healthmon" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}> Click here to visit Github repository </a>        
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

            <MDBCard className="border mb-3">
        <MDBCardBody> 
          <MDBRow className="g-4">
            <MDBCol md="5">
              <MDBCardImage src={icsmsImage} alt="Card image" fluid className="rounded h-100" style={{objectFit: 'contain'}}/>
            </MDBCol>
            <MDBCol md="7">
              <MDBCardBody className="text-start">
                {ProjectCard(
                  "ICS Clearance Management System Website",
                  "ICSMS is a website for clearance management system which features an admin-approver-user account system for better handling of accounts, clearances, and documents.",
                  true, "website", "school activity"
                )}
                <div className="mt-3"/>
                <a href="https://github.com/SKIConcepcion/icscms" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}> Click here to visit Github repository </a>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    
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

      <MDBContainer fluid className="d-flex justify-content-between align-items-center py-2">
        <div>
          <img
            src={logoImage}
            alt="Logo"
            style={{ height: "60px", width: "60px", objectFit: "contain" }}
          />
        </div>

        <div className="ms-auto">
          <MDBNavbarNav className="d-flex flex-row nav-items">
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

      <div style={{ flex: 1, position: "relative", minHeight: "0" }}>{renderCard()}</div>
    </div>
  );
}


export default App;
