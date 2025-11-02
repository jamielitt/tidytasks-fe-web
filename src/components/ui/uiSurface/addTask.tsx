import { uiSurfaceProps } from "../interfaces/surfaceProps";

export default function AddTask({ onCancelClick }: uiSurfaceProps) {
    return (
        <>
            <span>Add Task</span>
            <button>Save Task</button>
            <button onClick={onCancelClick}>Cancel</button>
        </>
    );
}