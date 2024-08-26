import React, { useState, useRef } from 'react' 
import CustomHook from './CustomHook';
import TextAnimator from './TextAnimator';

function Contacts() {
const [listContacts] = useState([
  
  {
    title: 'Email',
    value: 'singh0sahib@gmail.com'  // Update with your actual email address
  },
  {
    title: 'LinkedIn',
    value: 'https://www.linkedin.com/in/sahib-0-singh'  // Update with your LinkedIn profile URL
  },
  {
    title: 'GitHub',
    value: 'https://github.com/Sahibsingh00'  // Update with your GitHub profile URL
  }
])
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Feel free to reach out to me through the following channels. I’m open to discussing job opportunities, collaborations, or any questions you might have about my work , I’m here to connect and help!
       </div>
       <div className="list"  ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <h3>{value.title}</h3>
              <div><TextAnimator text={value.value} animationType="matrix" /></div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Contacts
