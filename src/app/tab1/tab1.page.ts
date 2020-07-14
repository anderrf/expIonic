import { Component } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private tasks: Task[] = [];
  private taskName:string;

  constructor() {}

  addTask()
  {
    this.tasks.push(new Task(this.tasks.length+1, this.taskName));
    this.taskName = "";
  }

  updateStatus(task:Task, status:boolean)
  {
    task.status = status;
  }

  deleteTask(task: Task){
    const index = this.tasks.indexOf(task);
    if(index !== -1){
      this.tasks.splice(index, 1);
    }
  }

}
