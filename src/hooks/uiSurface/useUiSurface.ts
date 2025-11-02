import { useRef, useState } from "react";
import { currentSelection } from "../../components/enums/uiSurface";

export default function useUiSurface() {
    const [activeSurface, setActiveSurface] = useState<currentSelection>(currentSelection.DASHBOARD);
    const lastSurface = useRef<currentSelection>(currentSelection.DASHBOARD);
    
    function switchSurface(surface: currentSelection) {
        lastSurface.current = activeSurface;
        setActiveSurface(surface);
    }

    const goBack = () => {
        switchSurface(lastSurface.current);
    }

    const displayDashboard = () => {
        switchSurface(currentSelection.DASHBOARD);
    }

    const displayTaskList = () => {
        switchSurface(currentSelection.TASK_CONTAINER);
    }

    const displayAddTask = () => {
        switchSurface(currentSelection.ADD_TASK);
    }

    return{
        activeSurface,
        displayDashboard,
        displayTaskList,
        displayAddTask,
        goBack,
    };
}