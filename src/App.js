import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="" Component={Screen1} />
        <Route exact path="Get-Location" Component={Screen1} />
        <Route exact path="data" Component={Screen2} />
      </Routes>
    </Router>
    // <div>
    //     <Screen1 />
    // </div>
  );
}
