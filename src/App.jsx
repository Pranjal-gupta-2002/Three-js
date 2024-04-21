import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Feedbacks,Hero ,Navbar,Tech,Works,StarsCanvas} from'./components'
import Footer from "./components/Footer"
import Iternship from "./components/Internship"
import Verification from "./components/Verification"


function App() {
 

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Iternship/>
         {/* <Tech/>  */}
        {/*<Works/>
        <Feedbacks/> */}
        <div className="relative z-0">
           <Contact/>
          <StarsCanvas/>
        </div>
        <Footer/>
      <Verification/>
      </div>
    </BrowserRouter>
  )
}

export default App
