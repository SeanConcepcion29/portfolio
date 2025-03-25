import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./Font.css";

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



function App() {
  return (
    <MDBContainer fluid className="min-vh-100 p-0">



      {/* Header Section */}
      <MDBNavbar dark bgColor="dark">
        <MDBContainer fluid>
          <MDBNavbarBrand>skiconcepcion</MDBNavbarBrand>
          <MDBNavbarNav className="d-flex flex-row">
            <MDBNavbarItem className="me-3">
              <a href="#"><FaGithub size={20} color="white" /></a>
            </MDBNavbarItem>
            <MDBNavbarItem className="me-3">
              <a href="#"><FaLinkedin size={20} color="white" /></a>
            </MDBNavbarItem>
            <MDBNavbarItem className="me-3">
              <a href="#"><FaEnvelope size={20} color="white" /></a>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <a href="#"><FaFacebook size={20} color="white" /></a>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>




      {/* Main Content */}
      <MDBContainer fluid className="my-5">
        <MDBRow className="w-100 m-0 d-flex align-items-stretch">

          
          {/* Left Section */}
          <MDBCol md="7" className="d-flex">
            <MDBCard className="p-3 text-center w-100 h-100 d-flex flex-column justify-content-center">
              <MDBCardBody>
                <h1 className="fw-bold">Hi, I am Sean Concepcion</h1>
                <h4>Full-Stack Web Developer | 2D Game Designer | Mobile Developer</h4>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          {/* Right Section */}
          <MDBCol md="5">
            <MDBRow className="w-100 m-0 h-100 d-flex">
              {[ 
                { img: projectImage, title: "Projects" },
                { img: cvImage, title: "View CV" },
                { img: contactImage, title: "Contacts" },
                { img: idImage, title: "More About Me" }
              ].map((item, index) => (
                <MDBCol md="6" className="p-2" key={index}>
                  <MDBCard className="small-card h-100">
                    <MDBCardImage src={item.img} alt={item.title} top className="img-fluid" style={{ width: "50%", margin: "auto" }} />
                    <MDBCardBody>
                      <MDBCardTitle style={{ backgroundColor: 'red' }}>{item.title}</MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBCol>
        </MDBRow>



        {/* New Card Below */}
        <MDBRow className="mt-4 w-100 m-0 h-100 d-flex">
          <MDBCol>
            <MDBCard className="p-3">
              <MDBRow>
                <MDBCol md="4" className="text-center">
                  <MDBCardBody>
                    <MDBCardTitle> ABOUT ME </MDBCardTitle>
                    <p>Sean Concepcion is a senior BS Computer Science student from the University of the Philippines Los Baños (UPLB). His experience includes serving as a Backend Team Leader of a website dev team in UPLB and numerous school-related and personal projects.</p>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol md="4" className="text-center">
                  <MDBCardBody>
                    <MDBCardTitle> MY WORK </MDBCardTitle>
                    <p>Most of my work revolves around mobile application, full-stack website, and 2D game development.</p>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol md="4" className="text-center">
                  <MDBCardBody>
                    <MDBCardTitle>Section 3</MDBCardTitle>
                    <p>Content for section 3.</p>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
              </MDBCard>
          </MDBCol>
        </MDBRow>







        {/* Four Individual Cards Below */}
        <MDBRow className="mt-4 w-100 m-0 h-100 d-flex">
          {/* Card 1 */}
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

          {/* Card 2 */}
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



          {/* Card 3 */}
          <MDBCol md="3" className="p-2">
            <MDBCard className="h-100 text-center">
              <MDBCardBody>
                <h2 className="mt-2 mb-4"> ORGANIZATIONS </h2>

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

          {/* Card 4 */}
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
      </MDBContainer>
    </MDBContainer>
  );
}

export default App;
