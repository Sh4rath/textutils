import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React ,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>
  {
    if(mode==='dark')
      
    {
      setMode('light')
      showAlert("Light Mode Enabled", "success");
      document.body.style.backgroundColor='white'
      
    }
    else
    {
      setMode("dark");
      showAlert("Dark Mode Enabled", "success");
      document.body.style.backgroundColor = "#1f1c27";
      
    }
      
  };
  //Alert Part
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  };
  return (
    <Router>
      <>
        <Navbar title="TextUtilZ" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  title="Enter the Text To Analyse Below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />

            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
