import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white'
      showAlert("Dark mode has been enabled.","success")
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black'
      showAlert("Light mode has been enabled.","success")
    }
  }
  return (  
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Switch>
          <Route path="/about"> 
            <About mode={mode}/>
          </Route> 
          <Route path="/"> 
            <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/> 
          </Route> 
      </Switch> */}
 
      <Routes>
        <Route path="/about" caseSensitive={false} element={ <About mode={mode}/> } /> 
        <Route path="/" caseSensitive={false} element={
          <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>} />
      </Routes> 
          
      </div>
    </Router>
  );
}

export default App;
