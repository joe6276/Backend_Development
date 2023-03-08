import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Airport';
  constructor(public auth:AuthService){}
  paint= performance.getEntriesByType('paint')
  fmp=this.paint.find(({name})=>name==='first-contentful-paint')
  ngOnInit(): void {
    if(this.fmp){
      console.log(this.fmp.startTime);
    }
    
  }
  

 
  
}
