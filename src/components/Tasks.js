import React, {useState} from 'react';
import TaskItems from './TaskItems';


const DUMMY_TASKS = [
  {
    id: '1',
    title: 'Toilet Paper',
    score: 0,
    
  },
 
];

function Tasks() {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Team 1</th>
                        <th>Total Score</th>
                    </tr>

                </thead>
                <tbody>

                    

                    <TaskItems></TaskItems>
                    
                </tbody>
            </table>
            
        </div>
    )
    
}

export default Tasks;