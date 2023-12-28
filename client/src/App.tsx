import { useState, useEffect } from 'react'
import { useFetch } from './utils/hooks'
import { loadTheme, changeTheme } from './utils/mode'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

interface headItem { 
  name: string;
  link: string; 
}

function App() {
  const [user, setuser] = useState<string>()
  const [mode, setMode] = useState<any>(localStorage.getItem("theme"))
  const routes: headItem[] = [
    {name: "Home", link:"/"},
    {name: "Products", link:"/products"},
    {name: "My Orders", link:"/orders"},
    {name: "About", link:"/about"},
    {name: "Contact", link:"/contact" },
  ]
  const [selected, setSelected] = useState<string>();

  const handleMode = () => {
    if(localStorage.getItem("theme") === "dark") {
      changeTheme("light") 
      setMode("light")
    } else {
      changeTheme("dark")
      setMode("dark")
    }
  }

  useEffect(() => {
    useFetch("/", setuser)
    loadTheme();
    routes.map((route) => route.link === window.location.pathname? setSelected(route.name) : null)
  }, [])

  return (
    <div className={`${mode == "dark"? "dark" : "light"}`}>
      <Header mode={mode} handleMode={handleMode} login={true} routes={routes} selected={selected} setSelected={setSelected} user={user}/>
      <Router>
        <Routes>
          <Route path="/" element={
            <div className={`${mode == "dark"? "dark" : "light"}`}></div>
          } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
