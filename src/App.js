
import  { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode , setMode]=useState("light")
  const [alert ,setAlert] = useState(null)

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1300);
  }
  
 
  const toggleMode = ()=>{
  
     if(mode ==="light"){
      
      setMode("dark")
      document.body.style.backgroundColor="#021b34"
      showAlert("Dark mode enabled" , "success")
      document.title='TextUtils-Dark Mode'

    
      
    }
    else{
      setMode("light")
      

      document.body.style.backgroundColor="white"
      showAlert("Light mode enabled" , "success")
      document.title='TextUtils-Light Mode'

    }
  }
  return (
<>
 <Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
<Routes>

          <Route exact path="/about" element={<About mode= {mode}/>}>
            
          </Route>
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading ="Enter the text to analyze" mode= {mode}/>}>
         
          </Route>
        </Routes>

 </div>
 </Router>


</>
    
  );
}

export default App;