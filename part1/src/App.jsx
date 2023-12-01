import './App.css'
import Mensaje from './Mensaje'


const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

function App() {
  return (
    <>
      <Mensaje color='red' message='Tamos trajando'/>      
      <Mensaje color='green' message='En un curso'/>      
      <Mensaje color='blue' message='de React'/>
      <Description/>
    </>
  )
}

export default App
