import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ScoreBoard from "views/ScoreBoard";

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Score Board</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/tasks" element={<h2>Second View</h2>}></Route>
          <Route path="/" element={<ScoreBoard />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
