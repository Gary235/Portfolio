import { useState, useEffect } from "react"
import useDeviceSize from "../../hooks/useDeviceSize"

import NavListItem from "../nav-list-item/NavListItem"
import { Image, MenuToggle, NavBar, NavContainer, NavList, } from "./styles"

import profilePhoto from '../../assets/profile.jpg'

const INITIAL_NAV_ITEMS = [
  { section: 'home', active: true },
  { section: 'aboutme', active: false },
  { section: 'myprojects', active: false },
  { section: 'contact', active: false }
]

const Nav = () => {
  const [showMobileNavList, setShowMobileNavList] = useState(false)
  const [isProfileImageIntersecting, setIsProfileImageIntersecting] = useState(true)
  const size = useDeviceSize()

  useEffect(() => {
    const profileImageEl = document.querySelector('#profile-image')
    const profileImageElObserver = new IntersectionObserver(([entry]) => { setIsProfileImageIntersecting(entry.isIntersecting) })

    if (profileImageEl) profileImageElObserver.observe(profileImageEl);

    return function() {
      if (profileImageEl) profileImageElObserver.unobserve(profileImageEl);
    }
  }, [])

  const shouldShowMenuIcon = size.width < 700
  const toggleMobileNavList = () => setShowMobileNavList(!showMobileNavList)

  if (!shouldShowMenuIcon && showMobileNavList) setShowMobileNavList(false)

  return (
    <NavContainer>
      {shouldShowMenuIcon && (
        <MenuToggle onClick={toggleMobileNavList}>menu</MenuToggle>
      )}
      {(!shouldShowMenuIcon || showMobileNavList) && (
        <NavBar>
          <NavList>
            <Image src={profilePhoto} loading="lazy" show={!isProfileImageIntersecting} />
            <span className="link"><NavListItem text="home" url="#home" clickHandler={toggleMobileNavList} /></span>
            <span className="link"><NavListItem text="about me" url="#aboutme" clickHandler={toggleMobileNavList} /></span>
            <span className="link"><NavListItem text="my projects" url="#myprojects" clickHandler={toggleMobileNavList} /></span>
            <span className="link"><NavListItem text="contact me" url="#contact" clickHandler={toggleMobileNavList} /></span>
          </NavList>
        </NavBar>
      )}
    </NavContainer>
  )
}

export default Nav
