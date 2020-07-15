import { Component } from '@angular/core';
import { Task } from 'src/models/task.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private tasks: Task[] = [];
  private taskName:string;
  private form:FormGroup;

  constructor(private fb:FormBuilder) 
  {
    this.form = this.fb.group({
      taskName: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
  }

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
