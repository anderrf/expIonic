export class Task
{
    public id:number;
    public name:string;
    public status:boolean;
    
    constructor(id:number, name:string)
    {
        this.id = id;
        this.name = name;
        this.status = false;
    }
}