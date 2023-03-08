import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';
import { AppState } from './State/appState';
import { nameSelector } from './State/Reducers/userReducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Airport';
  name$=this.store.select(nameSelector)
  constructor(public auth:AuthService , private store:Store<AppState>){}
  paint= performance.getEntriesByType('paint')
  fmp=this.paint.find(({name})=>name==='first-contentful-paint')
  ngOnInit(): void {
    if(this.fmp){
      console.log(this.fmp.startTime);
    }
    
  }
  

 
  
}
