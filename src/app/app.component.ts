import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solarUi';
  showButtonFlag:number=0;
  loginflag:number=0;
  setShowButtonFlag()
  {
    this.showButtonFlag=1;

  }
  loginFlag()
  {
    this.loginflag=1;
  }
  resetShowButtonFlag()
  {
    this.loginflag=0;
  }
}
