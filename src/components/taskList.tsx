import { task } from "../models/tasks";
import { Task } from "../providers/tasks/useTaskProvider";

type TaskListProps = {
  taskList: Array<task>,
  onTaskClick: () => void,
  onTaskAdd: () => void
};

export function TaskList({ taskList, onTaskClick, onTaskAdd }: TaskListProps) {
    const taskStyle = "text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100";
    return ( 
        <>
        {taskList.length > 0 && taskList.map(t => (          
            <li key={t.id} role="button" className={taskStyle} onClick={onTaskClick}>
                <span>{t.name}</span>
                <span>{t.description}</span>
            </li>
            )
        )}
        {taskList.length === 0 && (
            <div className={taskStyle} onClick={onTaskAdd}>You can add your first task by clicking here</div>
        )}
        </>
    )
}