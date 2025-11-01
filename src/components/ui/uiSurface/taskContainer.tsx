import useTasks from "../../../hooks/tasks/useTasks";
import { uiSurfaceProps } from "../interfaces/surfaceProps";
import { basicContainerStyle } from "../styles/base";
import { TaskList } from "./taskList";

export default function TaskContainer({ onDashboardClick }: uiSurfaceProps) {

    const {listOfTasks, onTaskClick, onTaskAdd} = useTasks();

    return(
        <>
        <div className={basicContainerStyle}>
            <ul className="flex min-w-[240px] flex-col gap-1 p-1.5">
                <TaskList taskList={listOfTasks.taskList} onTaskClick={onTaskClick} onTaskAdd={onTaskAdd}/>
            </ul>
        </div>
        <div>
            <button className={basicContainerStyle} onClick={onDashboardClick}>Return to Dashboard</button>
        </div>
        </>
    )
}