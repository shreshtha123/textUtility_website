// import logo from './logo.svg';
import { useState, } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextArea from './Components/TextArea';
import Alert from './Components/Alert'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Link
  } from "react-router-dom"; //follow the official documentation of react-router-dom
// let name = "Shreshtha Rana "
function App() {
    const [mode , setMode] = useState('light');
    // const [color,setColor] = useState('dark')
    const [alert,setAlert] = useState('');
    // var msg="hi"
    // var type="how are you"
    const showAlert=(message,type)=>{
        setAlert({
            msg:message,
            type:type
        })
        // setTimeout(()=>{
        //     setAlert(null)
        // },3000)
    }
    const toggleMode=()=>{
        if(mode==='light'){
            setMode('dark')
            document.body.style.backgroundColor='#042743'
            showAlert("you have switched to dark mode","success")
            
        }else{
            setMode('light')
            document.body.style.backgroundColor='white'
            showAlert("you have switched to light mode","success")
        }
    }
    
    // const textcolor=()=>{
    //     if(mode==='dark'){
    //     setColor('light')
    //     }else{
    //     setColor('dark')
    //     }
    // }
    return (
       
        <>
        
        <Router>
        <Navbar  title="TextUtils"name="Home"  about="About"  mode={mode}  toggleMode = {toggleMode} />
       <Alert alert={alert}  />
       {/* <div className="container"> */}
       <Routes>
        {/* path - partial matching
        exact path - full matching
        /users-component 1
        /users/home-component 1 */}
          <Route exact path="/about"  element={<About mode={mode} />}/>
          <Route exact path="/"  element={ <TextArea title="Enter the text here" mode={mode}/>}/>
          
        </Routes>
      
        
       {/* </div> */}
        </Router>
        
       
       

       </>
        
        

    );
}

export default App;