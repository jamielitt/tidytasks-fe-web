import Dashboard from "./uiSurface/dashboard";
import TaskContainer from "./uiSurface/taskContainer";
import { currentSelection } from "../enums/uiSurface";
import useUiSurface from "../../hooks/uiSurface/useUiSurface";
import AddTask from "./uiSurface/addTask";

export default function UISurface() {

    const {activeSurface, displayTaskList, 
        displayDashboard, displayAddTask, goBack} = useUiSurface();

    return(
        <>
        {activeSurface === currentSelection.DASHBOARD && <Dashboard onTaskContainerClick={displayTaskList} onAddTaskClick={displayAddTask}/>}
        {activeSurface === currentSelection.TASK_CONTAINER && <TaskContainer onDashboardClick={displayDashboard} onAddTaskClick={displayAddTask}/>}
        {activeSurface === currentSelection.ADD_TASK && <AddTask onCancelClick={goBack}/>}
        </>
    );
};