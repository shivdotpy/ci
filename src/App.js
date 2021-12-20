import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import A from "./components/A";
import B from "./components/B";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<A />} />
        <Route exact path="/b" element={<B />} />
      </Routes>
    </Router>
  );
}

export default App;
