import { Component, OnInit,  } from '@angular/core';
import { TasktalkService } from '../tasktalk.service'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  counter: number = 0;
  quote: string ;

  constructor(private _TaskTalk: TasktalkService) { }

  ngOnInit() {
    this._TaskTalk.currentquote.subscribe(quote => this.quote = quote)


  }

  increase(){
    this.counter ++
    this._TaskTalk.reportclick(this.quote)
  }
}
