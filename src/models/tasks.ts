export type task = 
{
    name: string;
    description: string;
}

export type tasks =
{
    owner: string;
    taskList: Array<task>;
}