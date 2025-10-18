import { task } from "../models/tasks";

type TaskListProps = {
  taskList: Array<task>;
};

export function TaskList({ taskList }: TaskListProps) {
    return ( 
        <>
        {taskList.map(t => (          
            <li role="button" className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                <span>{t.name}</span>
                <span>{t.description}</span>
            </li>
            )
        )}
        </>
    )
}