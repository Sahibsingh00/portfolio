import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faAngular,faGithub  } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';



function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'Angular',
    des: 'Proficient in Angular for building large-scale, enterprise-level applications with TypeScript and RxJS.',
    icon: faAngular
  },
  {
    name: 'ReactJS',
    des: 'Expert in developing scalable and high-performance web applications using ReactJS and its ecosystem, including hooks and state management.',
    icon: faReact
  },
  {
    name: 'GitHub',
    des: 'Proficient in using GitHub for version control, collaboration, and project management.',
    icon: faGithub,
  },
  {
    name: 'HTML',
    des: 'Proficient in creating well-structured, semantic HTML5 code for building robust and accessible web applications.',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'Skilled in crafting responsive designs using CSS3, including advanced techniques like flexbox, grid, and animations with SCSS.',
    icon: faCss3
  },
  {
    name: 'JavaScript',
    des: 'Experienced in modern JavaScript (ES6+) for building dynamic and interactive web applications.',
    icon: faJs
  },
 
  
 


]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        I am a passionate web developer with a strong foundation in both frontend and backend technologies. Here are the skills I've acquired throughout my journey...
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

