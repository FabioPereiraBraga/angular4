import { Injectable } from '@angular/core';
import { Task } from './task';
@Injectable()
export class TaskService {

  tasks:Array<Task>=[{
    name:'Fabio',
    value:10,
    data:'2017-01-16'
  }];
  
  constructor() { }

}
