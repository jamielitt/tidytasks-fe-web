import { uiSurfaceProps } from "../interfaces/surfaceProps";
import { basicContainerStyle } from "../styles/base";

export default function Dashboard ({ onTaskContainerClick }: uiSurfaceProps) {
    return (
        <div className={basicContainerStyle}>
            <span>Dashboard Commponent goes here</span>
            <button type="button" 
                onClick={onTaskContainerClick} 
                className={basicContainerStyle}>Display Tasklists</button>
        </div>
    );
};