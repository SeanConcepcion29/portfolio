import "./App.css";
import "./Font.css";

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

import artisanImage from "./images/artisan.png";
import bricsImage from "./images/brics.png";
import cardboardvoyageImage from "./images/cardboard_voyage.png";
import travelwheelsImage from "./images/travelwheels.png";
import healthmonImage from "./images/healthmon.png";
import icsmsImage from "./images/icsms.png";


function App() {
  return (
    <div>
      <div className="grid-container">

      <div className="header item">
        <span className="title title-text">skiconcepcion</span>
        <div className="social-icons">
          <a href="https://github.com/SKIConcepcion" target="_blank" rel="noopener noreferrer" className="icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sean-concepcion-00594430b/" target="_blank" rel="noopener noreferrer" className="icon">
            <FaLinkedin />
          </a>
          <a href="mailto:skiconcepcion@gmail.com" className="icon">
            <FaEnvelope />
          </a>
          <a href="https://www.facebook.com/seankierby.concepcion/" target="_blank" rel="noopener noreferrer" className="icon">
            <FaFacebook />
          </a>
        </div>
      </div>


        <div className="item profile-card title-text"> 
          <h1> Hi, I am Sean Concepcion </h1>
          <h4> full-stack web developer </h4>
          <h4> 2D game designer </h4>
          <h4> mobile developer </h4>
        </div>


        <div id="about-me" className="item about-card">
          <div className="about-card-item about-item-1 title-text">
            <h1 className=""> ABOUT <br/> ME </h1>
          </div>

          <div className="about-card-item about-item-2 body-text">
            <p> Sean Concepcion is a senior BS Computer Science student from the University of the Philippines Los Baños (UPLB). His experience includes serving as a Backend Team Leader of a website dev team in UPLB and numerous school-related and personal projects. </p>
          </div>

          <div className="about-card-item about-item-3 title-text">
            <h1 className=""> MY <br/> WORK </h1>
          </div>

          <div className="about-card-item about-item-4 body-text">
            <p> Most of my work revolves around mobile application, <br/> full-stack website, and 2D game development. </p>
          </div>
        </div>






        <a href="#project" className="item main-nav-card project-card title-text">
          <img src={projectImage} alt="Project Thumbnail" className="project-image" />
          <h4> PROJECTS </h4>
        </a>


        <a href="https://concepcion-resume.tiiny.site/" target="_blank" rel="noopener noreferrer" className="item main-nav-card cv-card title-text">
          <img src={cvImage} alt="Project Thumbnail" className="project-image" />
          <h4> VIEW CV </h4>
        </a>


        <div className="item main-nav-card contact-card title-text">
          <img src={contactImage} alt="Project Thumbnail" className="project-image" />
          <h4> CONTACTS </h4>
        </div>

        <a href="#about-me" className="item main-nav-card info-card title-text">
          <img src={idImage} alt="Project Thumbnail" className="project-image" />
          <h4> MORE ABOUT ME </h4>
        </a>




        

        

        <div className="item education-card title-text">
          <h2 className="education-title"> EDUCATION </h2>

          <div className="education-card-item body-text">
            <img src={ccshsImage} alt="Sean Concepcion" className="education-image" />
            <h2> Calamba City Science High School <br/> 2015 - 2019 </h2>
          </div>

          <div className="education-card-item body-text">
            <img src={ccsisImage} alt="Sean Concepcion" className="education-image" />
            <h2> Calamba City Science Integrated School <br/> 2019 - 2021 </h2>
          </div>

          <div className="education-card-item body-text">
            <img src={uplbImage} alt="Sean Concepcion" className="education-image" />
            <h2> University of the Philippines Los Baños  <br/> 2021 - Present </h2>
          </div>
        </div>



        <div className="item experience-card title-text">
          <h2 className="experience-title"> EXPERIENCE </h2>

          <div className="experience-card-item body-text">
            <img src={freelancerImage} alt="Sean Concepcion" className="experience-image" />
            <h2> Mobile and Web Dev Freelancer <br/> 2023 - 2025 </h2>
          </div>
        </div>


        <div className="item techstack-card title-text">
          <h2 className="techstack-title"> SKILLS & TECH STACK </h2>

          <div className="techstack-grid">
            <div className="techstack-card-item body-text">
              <img src={kotlinImage} alt="Tech" className="techstack-image" />
            </div>

            <div className="techstack-card-item body-text">
              <img src={composeImage} alt="Tech" className="techstack-image" />
            </div>

            <div className="techstack-card-item body-text">
              <img src={gdscriptImage} alt="Tech" className="techstack-image" />
            </div>

            <div className="techstack-card-item body-text">
              <img src={javaImage} alt="Tech" className="techstack-image" />
            </div>

            <div className="techstack-card-item body-text">
              <img src={reactjsImage} alt="Tech" className="techstack-image" />
            </div>

            <div className="techstack-card-item body-text">
              <img src={pythonImage} alt="Tech" className="techstack-image" />
            </div>

            <div className="techstack-card-item body-text">
              <img src={flutterImage} alt="Tech" className="techstack-image" />
            </div>

            <div className="techstack-card-item body-text">
              <img src={mongodbImage} alt="Tech" className="techstack-image" />
            </div>
          </div>
        </div>
      </div>



      <div id="project" className="project-grid-container">

        <div className="project-header">
          <h1 className="project-title"> MY PROJECTS </h1>
        </div>

        <a href="https://brics-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-item project-item-1 body-text">
          <img src={bricsImage} alt="brics" className="project-item-image" />
        </a>

        <div className="project-item project-item-2 body-text">
          <img src={artisanImage} alt="artisan" className="project-item-image" />
        </div>

        <a href="https://travelwheelsph.com/" target="_blank" rel="noopener noreferrer" className="project-item project-item-3 body-text">
          <img src={travelwheelsImage} alt="travelwheels" className="project-item-image" />
        </a>

        <div className="project-item project-item-4 body-text">
          <img src={cardboardvoyageImage} alt="cardboardvoyage" className="project-item-image" />
        </div>

        <div className="project-item project-item-5 body-text">
          <img src={healthmonImage} alt="healthmon" className="project-item-image" />
        </div>

        <div className="project-item project-item-6 body-text">
          <img src={icsmsImage} alt="icsms" className="project-item-image" />
        </div>
      </div>
    </div>

  );
}

export default App;
