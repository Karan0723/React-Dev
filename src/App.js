import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";
import WordCount from "./components/WordCount";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  // State For Alert:
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#13315d";
      showAlert("Dark Mode Is Ready", "danger");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Is Ready", "success");
    }
  };

  const toggleBlue = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "blue";
      showAlert("Blue Color Has Been Updated ", "primary");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Is Ready", "success");
    }
  };

  const toggleGreen = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "Green";
      showAlert("Green Color Has Been Updated ", "primary");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Is Ready", "success");
    }
  };

  const toggleBrown = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "Brown";
      showAlert("Brown Color Has Been Updated ", "primary");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Is Ready", "success");
    }
  };

  return (
    // <Router>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Karan
        </a>
      </header> */}

        <Navbar
          title="Header"
          mode={mode}
          toggleMode={toggleMode}
          aboutUs="About Us"
          toggleBlue={toggleBlue}
          toggleGreen={toggleGreen}
          toggleBrown={toggleBrown}
        />

        {/* <Routes>
          <Route exact path="/about" element={<About />} />

          <Route  exact path="/wordCount" element={<WordCount />} />
        </Routes> */}

        <Alert alert={alert} />

        {/* <Textform /> */}

        <About />
        <WordCount showAlert={showAlert} mode={mode} />
      </div>
    // </Router>
  );
}

export default App;
