import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css"

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
} from "mdb-react-ui-kit";

import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";

import projectImage from "./images/project.png";
import cvImage from "./images/cv.png";
import contactImage from "./images/contact.png";
import idImage from "./images/id.png";

import ccshsImage from "./images/ccshs_logo.png";
import ccsisImage from "./images/ccsis_logo.jpg";
import uplbImage from "./images/uplb_logo.png";

import freelancerImage from "./images/freelancer.png";

import mongodbImage from "./images/mongodb.png";
import composeImage from "./images/compose.png";
import gdscriptImage from "./images/gdscript.png";
import javaImage from "./images/java.png";
import reactjsImage from "./images/reactjs.png";
import kotlinImage from "./images/kotlin.jpg";
import pythonImage from "./images/python.png";
import flutterImage from "./images/flutter.png";

import glgImage from "./images/glg.jpg";
import gdsImage from "./images/gds.png";

import artisanImage from "./images/artisan.png";
import bricsImage from "./images/brics.png";
import cardboardvoyageImage from "./images/cardboard_voyage.png";
import travelwheelsImage from "./images/travelwheels.png";
import healthmonImage from "./images/healthmon.png";
import icsmsImage from "./images/icsms.png";
import firstraiderImage from "./images/firstraider.jpg";


function App() {
  return (
    <MDBContainer fluid className="min-vh-100 p-0">


      {/* Header Section */}
      <MDBNavbar dark bgColor="dark" className="px-3">
      <MDBContainer fluid>
        <MDBRow className="w-100 d-flex align-items-center justify-content-between">
          
          {/* Leftmost Text */}
          <MDBCol size="auto">
            <MDBNavbarBrand className="text-white">skiconcepcion</MDBNavbarBrand>
          </MDBCol>

          {/* Rightmost Icons */}
          <MDBCol size="auto" className="d-flex">
            <MDBCol size="auto" className="me-4">
              <a 
                href="https://github.com/SeanConcepcion29" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="d-flex align-items-center gap-2 text-white text-decoration-none"
              >
                <FaGithub size={25} />
                <p className="m-0">school</p>
              </a>
            </MDBCol>

            <MDBCol size="auto" className="me-4">
              <a 
                href="https://github.com/SKIConcepcion" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="d-flex align-items-center gap-2 text-white text-decoration-none"
              >
                <FaGithub size={25} />
                <p className="m-0">professional</p>
              </a>
            </MDBCol>

            <MDBCol size="auto" className="me-4">
              <a 
                href="https://www.linkedin.com/in/sean-concepcion-00594430b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaLinkedin size={25} />
              </a>
            </MDBCol>

            <MDBCol size="auto" className="me-0">
              <a href="mailto:skiconcepcion@gmail.com" className="text-white">
                <FaEnvelope size={25} />
              </a>
            </MDBCol>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    </MDBNavbar>



      {/* Main Content */}
      <MDBContainer fluid className="my-5">
        <MDBRow className="w-100 m-0 d-flex align-items-stretch">
   
          {/* Profile Section */}
          <MDBCol md="7" className="d-flex">
            <MDBCardBody className="d-flex flex-column justify-content-end align-items-end text-end" style={{ padding: '40px' }}>
              <h1 className="fw-bold" style={{ fontSize: '70px', marginBottom: '10px' }} >Hi, I am Sean Concepcion</h1>
              <h4 style={{ fontSize: '40px', marginBottom: '0px' }}> full-stack web developer </h4>
              <h4 style={{ fontSize: '40px', marginBottom: '0px' }}> 2d game designer </h4>
              <h4 style={{ fontSize: '40px', marginBottom: '0px' }}> mobile developer </h4>
            </MDBCardBody>
          </MDBCol>

          {/* Nav Cards Section */}
          <MDBCol md="5">
            <MDBRow className="w-100 m-0 h-100 d-flex">
              {[
                { img: projectImage, title: "Projects", link: "#projects" },
                { img: cvImage, title: "View CV", link: "https://concepcion-resume.tiiny.site/" },
                { img: contactImage, title: "Contacts", link: "#contacts" },
                { img: idImage, title: "More About Me", link: "#aboutme" }
              ].map((item, index) => (
                <MDBCol md="6" className="p-2" key={index}>

                  <a 
                    href={item.link} 
                    target={item.link.startsWith("http") ? "_blank" : "_self"} 
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : ""}
                    style={{ textDecoration: "none" }}
                  >
                    <MDBCard className="small-card h-100 card-hover">
                      <MDBCardImage 
                        src={item.img} 
                        alt={item.title} 
                        className="img-fluid" 
                        style={{ width: "50%", margin: "auto" }} 
                      />
                      <MDBCardBody>
                        <MDBCardTitle style={{ fontSize: '25px', color: '#333' }}>{item.title}</MDBCardTitle>
                      </MDBCardBody>
                    </MDBCard>
                  </a>
                  
                </MDBCol>
              ))}
            </MDBRow>
          </MDBCol>
        </MDBRow>




        {/* About Me Card */}
        <MDBRow className="mt-4 w-100 m-0 h-100 d-flex" id="aboutme">
          <MDBCol>
            <MDBCard className="p-3" style={{ backgroundColor: '#333', color: 'white' }}>
              <MDBRow>
                <MDBCol md="4" className="text-center">
                  <MDBCardBody>
                    <MDBCardTitle> ABOUT ME </MDBCardTitle>
                    <p>Sean Concepcion is a senior BS Computer Science student from the University of the Philippines Los Baños (UPLB). His experience includes serving as a Backend Team Leader of a website dev team in UPLB and numerous school-related, freelance, and personal projects.</p>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol md="4" className="text-center">
                  <MDBCardBody>
                    <MDBCardTitle> MY WORK </MDBCardTitle>
                    <p>Most of his work revolves around mobile application, full-stack website, and 2D game development.</p>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol md="4" className="text-center">
                  <MDBCardBody>
                    <MDBCardTitle>FUN FACT</MDBCardTitle>
                    <p>His favorite sorting algorithm is no other than Bogo Sort, not for its efficiency, but for its fairness — every permutation given an equal chance, every shuffle a test of fate.</p>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
              </MDBCard>
          </MDBCol>
        </MDBRow>



        {/* More About Me Sections */}
        <MDBRow className="mt-4 w-100 m-0 h-100 d-flex">
          {/* Skills Card */}
          <MDBCol md="3" className="p-2">
            <MDBCard className="h-100 text-center">
              <MDBCardBody>

                <MDBContainer className="text-center mt-2">
                  <h2 className="techstack-title"> SKILLS & TECH STACK </h2>
                  
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
                      <MDBCol md="4" sm="6" xs="12" className="p-2 d-flex justify-content-center" key={index}>
                      <MDBCard className="techstack-card">
                        <MDBCardBody className="d-flex justify-content-center align-items-center">
                          <MDBCardImage 
                            src={imgSrc} 
                            alt={`Tech ${index + 1}`} 
                            style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                          />
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    ))}
                  </MDBRow>
                </MDBContainer>



              </MDBCardBody>
            </MDBCard>
          </MDBCol>


          {/* Education Card */}
          <MDBCol md="3" className="p-2">
            <MDBCard className="h-100 text-center">
              <MDBCardBody>
                <h2 className="mt-2 mb-4"> EDUCATION </h2>

                <MDBCol md="" className="p-2 d-flex flex-column">
                  {[
                    { img: ccshsImage, title: "Calamba City Science High School", content: "2015 - 2019" },
                    { img: ccsisImage, title: "Calamba City Science Integrated School", content: "2019 - 2021" },
                    { img: uplbImage, title: "University of the Philippines Los Baños", content: "2021 - Present" }
                  ].map((item, index) => (
                    <MDBCard className="mb-3 d-flex flex-row align-items-center" key={index}>
                      <MDBCardImage src={item.img} alt={item.title} className="img-fluid" style={{ width: "110px", height: "100px", objectFit: "contain", padding: '10px', paddingLeft: '20px' }} />
                      <MDBCardBody style={{width: '90%'}}>
                        <MDBCardTitle>{item.title}</MDBCardTitle>
                        <p className="mb-0">{item.content}</p>
                      </MDBCardBody>
                    </MDBCard>
                  ))}
                </MDBCol>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>


          {/* Organization Card */}
          <MDBCol md="3" className="p-2">
            <MDBCard className="h-100 text-center">
              <MDBCardBody>
                <h2 className="mt-2 mb-4"> ORGANIZATION </h2>

                <MDBCol md="" className="p-2 d-flex flex-column">
                  {[
                    { img: glgImage, title: "Graphic Literature Guild", content: "2023 - present" },
                    { img: gdsImage, title: "Game Development Society", content: "2025 - present" }
                  ].map((item, index) => (
                    <MDBCard className="mb-3 d-flex flex-row align-items-center" key={index}>
                      <MDBCardImage src={item.img} alt={item.title} className="img-fluid" style={{ width: "110px", height: "100px", objectFit: "contain", padding: '10px', paddingLeft: '20px' }} />
                      <MDBCardBody style={{width: '90%'}}>
                        <MDBCardTitle>{item.title}</MDBCardTitle>
                        <p className="mb-0">{item.content}</p>
                      </MDBCardBody>
                    </MDBCard>
                  ))}
                </MDBCol>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>


          {/* Experience Card */}
          <MDBCol md="3" className="p-2">
            <MDBCard className="h-100 text-center">
              <MDBCardBody>
                <h2 className="mt-2 mb-4"> EXPERIENCE </h2>

                <MDBCol md="" className="p-2 d-flex flex-column">
                  {[
                    { img: freelancerImage, title: "Mobile and Web Dev Freelancer", content: "2023 - present" }
                  ].map((item, index) => (
                    <MDBCard className="mb-3 d-flex flex-row align-items-center" key={index}>
                      <MDBCardImage src={item.img} alt={item.title} className="img-fluid" style={{ width: "40%", height: "100px", objectFit: "cover" }} />
                      <MDBCardBody>
                        <MDBCardTitle>{item.title}</MDBCardTitle>
                        <p className="mb-0">{item.content}</p>
                      </MDBCardBody>
                    </MDBCard>
                  ))}
                </MDBCol>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>


        {/* Project Section */}
        <MDBRow className="mt-5 w-100 m-0 h-100 d-flex" id="projects">
          <MDBCol>


          <MDBContainer className="text-center mt-2 mb-4">
            <MDBCardTitle className="fw-bold" style={{ fontSize: '3em', paddingBottom: '10px', marginBottom: '-10px' }}>
              MY PROJECTS
            </MDBCardTitle>

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
                <MDBCard className="card-hover" style={{ height: '45vh' }}>
                  <MDBCardBody>
                    <MDBCardTitle style={{ fontSize: '1.7em', marginBottom: '0' }}> ARTISAN </MDBCardTitle>
                    <p className="mb-1">
                      Network Simulator Mobile Application
                      <span style={{ width: '10px', height: '10px', backgroundColor: '#fddc5c', borderRadius: '50%', display: 'inline-block', marginLeft: '7px'}}></span>
                    </p>
                    <MDBCardImage src={artisanImage} className="img-fluid" style={{ objectFit: "contain", width: "90%", height: "90%" }} />
                  </MDBCardBody>
                </MDBCard>
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
              <MDBCard className="card-hover" style={{ height: '60vh' }}>
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
                  <MDBCard className="card-hover" style={{ height: '60vh' }}>
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



      </MDBContainer>
    </MDBContainer>
  );
}

export default App;
