import { Button } from '@material-ui/core'
import React from 'react'
import { db } from '../firebase_config'

import './Task.css'

export default function TaskListItem({ task, in_progress, id}) {

    function toggleInProgress() {
        db.collection("tasks").doc(id).update({
            in_progress: !in_progress
        });
    }

    function deleteTask() {
        db.collection("tasks").doc(id).delete();
    }

  return (
    <div className="list">
        <li className="listItem">
            <p className={in_progress ? "undone" : "done" } onClick={toggleInProgress}>{task}</p>
            {in_progress ? '' : <Button onClick={deleteTask}>X</Button>}
        </li>
    </div>
  )
}
