import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [textColor, setTextColor] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextColor("light");
      document.body.style.backgroundColor = "#3a405e";
      showAlert("success", "Dark Mode has been enabled successfully!");

      // document.title = "TextNeeds - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextNeeds is amazing app.";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextNeeds now.";
      // }, 1500);
    } else {
      setMode("light");
      setTextColor("dark");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Dark Mode has been disabled successfully!");

      // document.title = "TextNeeds - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextNeeds"
          mode={mode}
          textColor={textColor}
          toggleMode={toggleMode}
          showAlert={showAlert}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <TextForm
            heading="Enter the text to analyze below"
            mode={mode}
            showAlert={showAlert}
          />

          {/* <Routes>
            <Route
              // React does partial matching that's why we should use (exact path) instead of path.
              // /users --> Component 1
              // /users/home --> Component 2

              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />

            <Route exact path="/about" element={<About />} />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
