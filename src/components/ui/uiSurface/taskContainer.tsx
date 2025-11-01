import useTasks from "../../../hooks/tasks/useTasks";
import { TaskList } from "./taskList";

export default function TaskContainer() {

    const {listOfTasks, onTaskClick, onTaskAdd} = useTasks();

    return(
        <div className="flex gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200">
            <ul className="flex min-w-[240px] flex-col gap-1 p-1.5">
                <TaskList taskList={listOfTasks.taskList} onTaskClick={onTaskClick} onTaskAdd={onTaskAdd}/>
            </ul>
        </div>
    )
}