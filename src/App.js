import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react'
import Cx100Home from './pages/Cx100Home';
const App = () => {
  return (
        <div>
              <Router>
                        <Routes>
                          <Route path="/" element={<Cx100Home/>}/>
                          <Route path="/cx100Home" element={<Cx100Home/>}/>
                        </Routes>
                      </Router>
            </div>
  )
}
export default App
