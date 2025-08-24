import { createContext, useEffect } from 'react';

export class Task {
    TaskName = ""
    BelongsTo = ""
}

export class Tasks {
    Tasks = [] 
}

export const defaultTasks = new Tasks();
export const TaskContext = createContext({tasks: defaultTasks});

// At this point, we can start polling for new tasks every 5 seconds
export function useTaskProvider() {
    useEffect( () => {
        // Below is filebased and will not work in a web scenario
        //const taskWorker = new Worker('./taskRetrieverWorker.tsx');

        // Web scenario equivanelt
        const taskWorker = new Worker(new URL('./taskRetrieverWorker.js', import.meta.url));
        
        console.log('Created worker, now beginning to listen');
        taskWorker.addEventListener('message', event => {
            console.log(event);
        })

        // In Strict Mode, the component is rendered twice, without the
        // cleanup, there will be two timers initialised - which is 
        // not intentional.
        return () => {
            console.log("About to cleanup the effect");
            taskWorker.postMessage("stop"); }
    }, []);
}
