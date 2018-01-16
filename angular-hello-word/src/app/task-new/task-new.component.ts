import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent  {

  task:Task = new Task;
  tasks;

  public  constructor(private taskService:TaskService ) {
      this.tasks = taskService.tasks;
  }

  add(){
  let task =  Object.assign({},this.task );
  this.tasks.push(task);
  }





}
