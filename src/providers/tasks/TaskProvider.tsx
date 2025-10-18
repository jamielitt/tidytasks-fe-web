import { Props } from "../../components/ui/interfaces/propsWithChildren";
import { TaskContext, defaultTasks, useTaskProvider } from "./useTaskProvider";

const defaultContext = {
   tasks: defaultTasks 
}

export default function TaskProvider({children}: Props) {
    console.log('rendering TaskProvider')
        useTaskProvider();
    return (
        <TaskContext value={defaultContext}>
            {children}
        </TaskContext>
    );
}