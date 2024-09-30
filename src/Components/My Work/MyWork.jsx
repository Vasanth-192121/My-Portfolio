import React from 'react'
import './MyWork.css'
import theme from "../../assets/Untitled design.png";
import mywork_data from "../../Utils/mywork_data"
import arrow_icon from "../../assets/arrow_icon.svg"

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme} alt="" height={"120px"}/>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <img 
              key={index} 
              src={work.w_img} 
              onClick={() => {
                if (work.w_url) {
                  window.location.href = work.w_url;
                }
              }}
              alt="" 
              height={"200px"}
            />)
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork;
