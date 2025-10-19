export type task = 
{
    id: string | number;
    name: string;
    description: string;
}

export type tasks =
{
    owner: string;
    taskList: Array<task>;
}