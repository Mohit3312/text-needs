import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

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
    } else {
      setMode("light");
      setTextColor("dark");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Dark Mode has been disabled successfully!");
    }
  };

  return (
    <>
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
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
