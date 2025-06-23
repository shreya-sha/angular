import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-headerchild',
  templateUrl: './headerchild.component.html',
  styleUrls: ['./headerchild.component.css']
})
export class HeaderchildComponent {

  @Output()
notify:EventEmitter<string>=new EventEmitter<string>();

@Output()
notifyobj:EventEmitter<object>=new EventEmitter<object>();

getmessage(){
  this.notify.emit("this is the data from  child component");
}
getmessageobj()
{
  this.notifyobj.emit({id:1,name:'shreya'});
}
}
