import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  theTask:string=''
 
  tasks:string[]=[]
  add_tasks(task:string){
      this.tasks.push(task)
  }
  delete_task(index:number){
    this.tasks.splice(index,1)
  }
}
