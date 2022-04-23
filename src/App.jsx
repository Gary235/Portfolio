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
      <div style={{height: '600px', width: '100%'}} />
      <div style={{height: '600px', width: '100%'}} />
      <div style={{height: '100vh', width: '100%', color: 'white', background: '#000', position: 'sticky', top: '0'}}>
        hola
      </div>
      {/* <Contact />
      <Footer /> */}
    </>
  )
}

export default App
