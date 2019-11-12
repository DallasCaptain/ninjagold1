import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasktalkService {

  private quoteSource = new BehaviorSubject<string>('default');
  currentquote = this.quoteSource.asObservable();

  constructor() { }

  reportclick(data: string){
    this.quoteSource.next(data + 'more')
  }
  
}
