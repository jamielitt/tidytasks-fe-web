import { useState } from "react";
import { currentSelection } from "../../components/enums/uiSurface";

export default function useUiSurface() {
    const [activeSurface, setActiveSurface] = useState<currentSelection>(currentSelection.DASHBOARD);
    
    const onDashboardClick = () => {
        setActiveSurface(currentSelection.DASHBOARD);
    }

    const onTaskContainerClicked = () => {
        setActiveSurface(currentSelection.TASK_CONTAINER);
    }

    return{
        activeSurface,
        onDashboardClick,
        onTaskContainerClicked,
    };
}