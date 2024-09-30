import React from 'react'
import "./About.css"
import theme from "../../assets/Untitled design.png";
import profile_img from "../../assets/About-Avatar.png"

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt="" />
        </div>

        <div className="about-sections">
          <div className="about-left">
            <img src={profile_img} alt="profile-img" height={"450px"} />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>I recently graduated with a degree in Robotics and Automation from Muthayammal Engineering College. My journey in tech began with a strong foundation in computer science during my higher secondary education, and I’ve since honed my skills in both front-end and back-end development.</p>
              <p>I aspire to become a Senior Full-Stack Developer. With expertise in HTML, CSS, JavaScript, React.js, Node.js, Express.js, PostgreSQL and Mango DB. I aim to contribute to innovative projects. My goal is to create seamless user experiences and grow through challenging roles.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width : "90%"}}/></div>
            <div className="about-skill"><p>React</p><hr style={{width : "65%"}}/></div>
            <div className="about-skill"><p>Java Script</p><hr style={{width : "75%"}}/></div>
            <div className="about-skill"><p>Node.js</p><hr style={{width : "70%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>4 +</h1>
          <p>COURSES COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>15 +</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>10 +</h1>
          <p>TECHNOLOGIES LEARNED</p>
        </div>
      </div>
    </div>
  )
}

export default About