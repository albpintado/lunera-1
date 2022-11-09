import React, { useState } from "react";
import TaskItems from "./TaskItems";
import "../css/task.css";

const DUMMY_TASKS = [
  {
    id: "1",
    title: "Toilet Paper",
    score: 0,
  },
];

function Tasks() {
  return (
    <div className="main-container">
        <div className="titulos">
      <span className="title">Team X</span>
      <span className="title"> X puntos </span>
      </div>
      <hr />
      <div className="table">
        <div className="item">
          <span>lunera s1</span>
          <span>1</span>
        </div>
        <div className="item">
          <span>lunera s1</span>
          <span>1</span>
        </div>
        <div className="item">
          <span>lunera s1</span>
          <span>1</span>
        </div>
        <div className="item">
          <span>lunera s1</span>
          <span>1</span>
        </div>
        <div className="item">
          <span>lunera s1</span>
          <span>1</span>
        </div>
        <div className="item">
          <span>lunera s1</span>
          <span>1</span>
        </div>
      </div>
    </div>

    // <div classNameName='main-container'>

    //     <table >
    //         <thead>
    //             <tr>
    //                 <th>Team 1</th>
    //                 <th>Total Score</th>
    //             </tr>

    //         </thead>
    //         <tbody>

    //             <TaskItems></TaskItems>

    //         </tbody>
    //     </table>

    // </div>
  );
}

export default Tasks;
