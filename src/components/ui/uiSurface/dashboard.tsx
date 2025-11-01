import { uiSurfaceProps } from "../interfaces/surfaceProps";

export default function Dashboard ({ onTaskContainerClick }: uiSurfaceProps) {
    return (
        <div className="flex gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200">
            <span>Dashboard Commponent goes here</span>
            <button type="button" 
                onClick={onTaskContainerClick} 
                className="flex gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200">Display Tasklists</button>
        </div>
    );
};