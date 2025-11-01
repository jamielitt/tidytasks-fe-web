import Dashboard from "./uiSurface/dashboard";
import TaskContainer from "./uiSurface/taskContainer";
import { currentSelection } from "../enums/uiSurface";
import useUiSurface from "../../hooks/uiSurface/useUiSurface";

export default function UISurface() {

    const {activeSurface, onTaskContainerClicked, onDashboardClick} = useUiSurface();

    return(
        <>
        {activeSurface == currentSelection.DASHBOARD && <Dashboard onTaskContainerClick={onTaskContainerClicked}/>}
        {activeSurface == currentSelection.TASK_CONTAINER && <TaskContainer onDashboardClick={onDashboardClick}/>}
        </>
    );
};