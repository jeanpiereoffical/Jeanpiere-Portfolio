import React from 'react'
import './About.css'
import theme_patten from '../../assets/theme_pattern.svg'
import profile_img from  '../../assets/about_profile.svg'
const About = () => {
  return (
    <div id='about'  className='about'>

      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_patten} alt="" />
      </div>
      
      <div className="about-sections">
      
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
            <div className="about-right">
                <div className="about-para">
                <p>I’ve built this portfolio with my own front-end knowledge, and the skills you see here are a true reflection of what I can create</p>
                <p>In the next 5 years, I see myself growing into a highly skilled Java Full-Stack Developer, building smarter and more impactful applications.</p>
                </div>
            <div className="about-skills">
                <div className="about-skill">
                       <p>HTML & CSS</p><hr style={{width:"80%"}}/> 
                </div> <div className="about-skill">
                       <p>JavaScript</p><hr style={{width:"70%"}}/> 
                </div> <div className="about-skill">
                       <p>React JS</p><hr style={{width:"90%"}}/> 
                </div> <div className="about-skill">
                       <p>Java</p><hr style={{width:"90%"}}/> 
                </div> <div className="about-skill">
                       <p>MY SQL</p><hr style={{width:"80%"}}/> 
                </div> <div className="about-skill">
                       <p>Spring Boot</p><hr style={{width:"80%"}}/> 
                </div>

            </div>        
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE IN MY ACADAMY JOURNAL</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>1+</h1>
                <p>I Did Project Myself to Happy</p>
            </div>
            </div>
    </div>
  )
}

export default About
