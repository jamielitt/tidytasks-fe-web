import { task } from "../models/tasks";

type TaskListProps = {
  taskList: Array<task>;
};

export function TaskList({ taskList }: TaskListProps) {
    return ( 
        <>
        {taskList.map(t => (          
            <li>
                <span>{t.name}</span>
                <span>{t.description}</span>
            </li>
            )
        )}
        </>
    )
}