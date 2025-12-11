import './App.css'
import Body from './Components/Body/Body'
import NavBar from './Components/NavBar/NavBar'
import Projects from './Components/SectionProject/Project'

function App() {

  return (
    <>      
    <div className="div-pai-de-todos">
        <NavBar/>
        <Body/>
        <Projects/>
      </div> 
    </>
  )
}

export default App
