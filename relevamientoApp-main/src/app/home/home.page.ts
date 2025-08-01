import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userLogged : any;
  constructor(public auth : AuthService, private router : Router) {
    this.auth.obtenerUsuarioLogueado().subscribe(user =>{
      if (user?.uid) {
        this.userLogged = user
      }
    })
  }

  navegar(path:string){
    this.router.navigateByUrl(path);
  }

  cerrarSesion(){
    this.userLogged = null;
    this.auth.logout();
  }

  irHacia(ruta:string){
    console.log(ruta);
    
  }

}
