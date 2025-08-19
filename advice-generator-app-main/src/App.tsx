import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/frontEndMentorAPI">
      <Home />
    </BrowserRouter>
  );
}

export default App;
