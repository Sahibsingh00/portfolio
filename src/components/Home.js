import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
import TextAnimations from './TextAnimations';
import TextAnimator from './TextAnimator';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <br></br> <TextAnimations text="SAHIB SINGH" />
               </div>
            <div className="des">
            I am a passionate web developer with a strong background in Angular and ReactJS, specialized in creating dynamic and responsive web applications. I continuously explore AI technologies and have hands-on experience in developing <TextAnimator text="e-commerce platforms and blogs." animationType="matrix" />

        </div>
            
            <a href="/SahibResume-portfolio.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />
                <div className="info">
                <div>Web Developer</div>
                <div>Indian</div>
                <div>Graduated: 2024</div>
                <div>Male</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
