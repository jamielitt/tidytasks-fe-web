import { TaskList } from "./taskList";
import { task, tasks } from "../models/tasks";

export default function TaskContainer() {

    // Do some stuff here to get tasks
    // Get tasks from task context, but for now just hard code to test
    const listOfTasks: tasks = {
        owner: "Jamie",
        taskList: new Array<task>() 
    }

    listOfTasks.taskList.push({
        name: "First Task",
        description: "This is the first task"
    })

        listOfTasks.taskList.push({
        name: "Second Task",
        description: "This is the second task"
    })

    return(
        <ul>
        <TaskList taskList={listOfTasks.taskList} />
        </ul>
    )
}