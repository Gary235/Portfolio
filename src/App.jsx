import Home from "./views/home/Home"
import AboutMe from "./views/about-me/AboutMe"
import MyProjects from "./views/my-projects/MyProjects"

import Nav from "./components/nav/Nav"

const App = () => {

  return (
    <>
      <Nav />
      <Home />
      <AboutMe />
      <MyProjects />
      {/* <Contact />
      <Footer /> */}
    </>
  )
}

export default App
