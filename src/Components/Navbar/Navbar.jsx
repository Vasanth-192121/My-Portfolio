import { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from "../../assets/Underline.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"


function Navbar() {

  const [menu, setMenu] = useState("home");

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo-img'/>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
        <li> <AnchorLink className='anchor-link' href='#home'> <p onClick={() => {setMenu("home")}} >Home</p> </AnchorLink> {menu === "home" ? <img src={underline} alt='' width={"75px"}/> : null}</li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#about'> <p onClick={() => {setMenu("about")}} >About Me</p> </AnchorLink> {menu === "about" ? <img src={underline} alt='' width={"75px"}/> : null}</li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#services'> <p onClick={() => {setMenu("skills")}} >Skills</p> </AnchorLink> {menu === "skills" ? <img src={underline} alt='' width={"75px"}/> : null}</li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#work'> <p onClick={() => {setMenu("contact")}} >Projects</p> </AnchorLink> {menu === "contact" ? <img src={underline} alt='' width={"75px"}/> : null}</li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#contact'> <p onClick={() => {setMenu("portfolio")}} >Contact</p> </AnchorLink> {menu === "portfolio" ? <img src={underline} alt='' width={"75px"}/> : null}</li>
      </ul>
      <div className="nav-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with Me </AnchorLink></div>
    </div>
  )
}

export default Navbar