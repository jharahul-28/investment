import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import HeroSection from './Components/HeroSection'
import InvestOptions from './Components/InvestmetnOptions/InvestOptions'
import Membership from './Components/Membership'
import Navbar from './Components/Navbar'
import PortfolioManagement from './Components/PortfolioManagement'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Membership/>
      <InvestOptions/>
      <PortfolioManagement/>
      <Contact/>
    </>
  )
}

export default App
