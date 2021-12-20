import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import A from "./components/A";
import B from "./components/B";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={A} />
      <Route exact path="/b" component={B} />
    </BrowserRouter>
  );
}

export default App;
