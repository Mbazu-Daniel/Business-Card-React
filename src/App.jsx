import './App.css'
import About from "./components/About.components"
import Footer from "./components/Footer.components"
import Info from "./components/Info.components"
import Interest from "./components/Interest.components"

function App() {

  return (
    <div className='container'>
    <Info/>
    <About/>
    <Interest/>
    <Footer/>

    </div>
  )
}

export default App
