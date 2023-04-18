import "./App.css";
import { Router } from "./Routers/Router";
import SelectLang from "./modules/i18n/components/SelectLang";

function App() {
  return (
    <div className="relative px-20 pt-10">
      <SelectLang />
      <Router />
    </div>
  );
}

export default App;
