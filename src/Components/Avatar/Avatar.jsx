import React from 'react';
import "./Avatar.css";
import avatar from "../../assets/Avatar.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from "../../assets/Resume/Vasanthamohan_R.pdf"

function Avatar() {
  return (
    <div id='home' className='avatar'>
        <img src={avatar} alt="avatar-img"/>
        <h1> <span>I'm Vasanth Mohan, </span> Full stack web developer </h1>
        <p>I'm a full-stack developer from Tamil Nadu, with hands-on experience in both frontend and backend technologies.</p>
        <div className="avatar-action">
            <div className="avatar-connect"> 
                <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with me</AnchorLink>
            </div>
            <div className="avatar-resume">
                <a href={resume} download="Vasanthamohan_Resume.pdf">My resume</a>
            </div>
        </div>
    </div>
  );
}

export default Avatar;
