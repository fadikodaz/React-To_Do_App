import React ,{useState} from 'react'
import './App.css'
import Header from './components/Header/Header'
import ToDoApp from './components/ToDoApp/ToDoApp'

const App = () => {
  const [DarkMode, setDarkMode] = useState(false);
  return (
    <div className={`Main_Page ${DarkMode === true ? 'activeMode' : ''}`}>
        <Header mode={DarkMode} setMode={setDarkMode} />  
        <ToDoApp mode={DarkMode} />  
    </div>
  )
}

export default App
