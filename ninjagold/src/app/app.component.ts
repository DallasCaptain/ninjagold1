import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninjagold';
  quote = 'default'
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    
  }
  submitform(whichform: any): void { 
    const actions ={
      'FARM':[2,4],
      'CAVE':[5,6],
      'HOUSE':[7,9],
      'CASINO':[-100,200]
    }
    console.log(Math.floor(Math.random()*(actions[whichform][1]) + actions[whichform][0]))
    console.log(`Click event is working from form: ${whichform}`);
}

  makebob(bobsname: any): void{

  }

  getBobs(){
    let tempObservable = this._httpService.getBobs();
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    
  }

  receiveQuote($event){
    this.quote = $event
  }


}
