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

    const onTaskClick = () => {
        console.log("Task Clicked");
    }

    return(
        <div className="flex gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200">
            <ul className="flex min-w-[240px] flex-col gap-1 p-1.5">
                <TaskList taskList={listOfTasks.taskList} onTaskClick={onTaskClick}/>
            </ul>
        </div>
    )
}