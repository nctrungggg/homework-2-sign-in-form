import { useSelector } from "react-redux";
import "./App.css";
import { Router } from "./Routers/Router";

function App() {
  return (
    <div className="px-20 pt-10">
      <Router />
    </div>
  );
}

export default App;
