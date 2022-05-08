import { useState, useEffect } from "react"
import useDeviceSize from "../../hooks/useDeviceSize"

import NavListItem from "../nav-list-item/NavListItem"
import { Image, MenuIcon, NavBar, NavContainer, NavList, } from "./styles"

import profilePhoto from '../../assets/profile.jpg'

const INITIAL_NAV_ITEMS = [
  { section: 'home', active: true },
  { section: 'aboutme', active: false },
  { section: 'myprojects', active: false },
  { section: 'contactme', active: false }
]

const Nav = () => {
  const [showMobileNavList, setShowMobileNavList] = useState(false)
  const [isProfileImageIntersecting, setIsProfileImageIntersecting] = useState(true)
  const size = useDeviceSize()

  useEffect(() => {
    const profileImageEl = document.querySelector('#profile-image')
    const profileImageElObserver = new IntersectionObserver(([entry]) => { setIsProfileImageIntersecting(entry.isIntersecting) })

    if(profileImageEl) profileImageElObserver.observe(profileImageEl)
  
    return function() {
      if(profileImageEl) profileImageElObserver.unobserve(profileImageEl)
    }
  }, [])

  const shouldShowMenuIcon = size.width < 700
  const toggleMobileNavList = () => setShowMobileNavList(!showMobileNavList)

  if (!shouldShowMenuIcon && showMobileNavList) setShowMobileNavList(false)

  console.log({isProfileImageIntersecting})
  return (
    <NavContainer>
      <MenuIcon show={shouldShowMenuIcon} onClick={toggleMobileNavList} />
      <NavBar show={!shouldShowMenuIcon || showMobileNavList}>
        <NavList>
          <Image src={profilePhoto} show={!isProfileImageIntersecting} />
          <NavListItem text="home" url="#home" clickHandler={toggleMobileNavList} />
          <NavListItem text="about me" url="#aboutme" clickHandler={toggleMobileNavList} />
          <NavListItem text="my projects" url="#myprojects" clickHandler={toggleMobileNavList} />
          <NavListItem text="contact me" url="#home" clickHandler={toggleMobileNavList} />
        </NavList>
      </NavBar>
    </NavContainer>
  )
}

export default Nav
