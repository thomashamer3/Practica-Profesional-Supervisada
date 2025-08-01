import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {SplashScreen} from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private router : Router) {  
    this.initializeApp();
  }
  
  initializeApp(){    
    this.router.navigateByUrl('splash');
  }
  
  ionViewDitEnter(){
    SplashScreen.hide();
  }
}
