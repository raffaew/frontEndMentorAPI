import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/advice-generator-app-main">
      <Home />
    </BrowserRouter>
  );
}

export default App;
