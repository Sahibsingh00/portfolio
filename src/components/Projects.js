import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: "E-commerce Platform Development",
      des: "Developed a dynamic e-commerce platform with features like user authentication, product management, and a secure payment gateway. Integrated RESTful APIs for real-time data exchange and optimized the platform for performance and scalability.",
      mission : "Front-end Developer, UI/UX Design, API Integration",
      language : "HTML5, CSS3, ReactJS, Node.js, Express, MongoDB",
    images: '/bagly-2.jpg'
  },
  {
    name: "Dynamic Blogging System",
      des: "Created a dynamic and responsive blogging system with features like post creation, editing, and comments. Integrated a rich text editor for an enhanced writing experience and ensured SEO optimization.",
      mission: "Full-Stack Developer, System Architecture Design",
      language: "HTML5, CSS3, Angular, Firebase, Node.js",
    images: '/blog-2.jpg'
  },
  {
    name: "AI-Powered Chatbot",
      des: "Developed an AI-powered chatbot for customer support on an e-commerce platform. The chatbot utilizes natural language processing (NLP) to provide accurate and context-aware responses to user queries.",
      mission: "AI/ML Integration, System Analysis, Backend Development",
      language: "Python, TensorFlow, ReactJS, Socket.IO, Node.js",
    images: '/ai.jpg'
  },

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        A collection of innovative projects including an e-commerce platform, a dynamic blogging system, and an AI-powered chatbot.
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
