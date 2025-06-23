import { Component } from '@angular/core';
import { Itask } from './Itask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messagechild:string='';
  title = 'todoList';
  tasklst:Itask[]=[];
  // {
    
  //     taskid:0,
  //     taskname:'',
  //     taskdate:''

  //   }
  

  constructor(){
   
  }
  ngOnInit(){
    this.tasklst=[{
      taskid:1,
      taskname:'get a cola',
      taskdate:'02/02/2000'
    }
    ]
  }
  parentmethod(data:any){
  this.messagechild=data;
  }
  mess:any;
  parentmethod1(data:any){
    this.mess=data;
  }
}
