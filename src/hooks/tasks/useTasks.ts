import { task, tasks } from "../../models/tasks";

export default function useTasks()
{
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

    const onTaskAdd = () => {
        console.log("Adding a task");
    }

    return {
        listOfTasks,
        onTaskClick,
        onTaskAdd,
    }
}