import { useState, useEffect, useRef } from "react"

import NavListItem from "../nav-list-item/NavListItem"
import { NavBar, NavContainer, NavList, } from "./styles"


const INITIAL_NAV_ITEMS = [
  { section: 'home', active: true },
  { section: 'aboutme', active: false },
  { section: 'myprojects', active: false },
  { section: 'contactme', active: false }
]

const Nav = () => {
  // const [navItems, setNavItems] = useState(INITIAL_NAV_ITEMS);
  // const homeRef = useRef(null);
  // const aboutRef = useRef(null);
  // const projectsRef = useRef(null);
  // const contactRef = useRef(null);

  // const refs = [homeRef, aboutRef, projectsRef, contactRef];

  // useEffect(() => {
  //   navItems.map((item, i) => {
  //     if (!item.active) return;

  //     refs[i].current.active = true;
  //   })
  // }, [navItems])
  

  // const observerCallback = (entries, observer) => {
  //   console.log({entries})
  // }
  // const observerOptions = {
  //   rootMargin: '0px',
  //   threshold: 1.0
  // }
  // const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  // // const el =document.querySelector('#aboutme')
  // observer.observe(el)

  return (
    <NavContainer>
      <NavBar>
        <NavList>
          <NavListItem text="home" url="#home" />
          <NavListItem text="about me" url="#aboutme" />
          <NavListItem text="my projects" url="#home" />
          <NavListItem text="contact me" url="#home" />
        </NavList>
      </NavBar>
    </NavContainer>
  )
}

export default Nav
