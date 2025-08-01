import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { DeviceMotion, DeviceMotionAccelerationData } from '@awesome-cordova-plugins/device-motion';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  activado : boolean = false;
  accelerationX:any = 'Aceleracion X';
  accelerationZ:any = 'Aceleracion Z';
  accelerationY:any = 'Aceleracion Y';

  alarmOnOff: boolean = false;
  showDialog: boolean = false;

   //Ingresos para flash
  primerIngreso: boolean = true;
  primerIngresoFlash: boolean = true;
 
  //ORIENTACION
  posicionActualCelular = 'actual';
  posicionAnteriorCelular = 'anterior'; 
  
  subscription: any;

  //Sonidos
  audioIzquierda = "../../assets/audios/ey.wav";
  audioDerecha = "../../assets/audios/estanRobando.wav";
  audioVertical = "../../assets/audios/baja-el-telefono.wav";
  audioHorizontal = "../../assets/audios/soltalo.wav";
  audioError = "../../assets/audios/sirena.mp3";
  audio = new Audio();

  constructor(private auth : AuthService,private flashlight : Flashlight,private vibration : Vibration) {}

  onoff(){
    if(this.activado){
      this.verificarClave();
    }else{
      this.activarAlarma();
    }    
  }

  cerrarSesion(){
    this.activado = false;
    this.auth.logout();
  }

  async verificarClave(){
    const { value: clave } = await Swal.fire({
      title: 'Ingrese su clave',
      input: 'password',      
      inputPlaceholder: 'Ingrese su clave',
      confirmButtonText: "Confirmar",
      confirmButtonColor: '#428C81',
      background: '#000000',
      color: '#FFFFFF',
      heightAuto:false
    })
    if (clave === this.auth.claveActual) {
      this.activado = false;
      this.audio.pause();
      this.parar();
    }
    else{      
      this.errorApagado();
    }
  }

  activarAlarma(){
    this.subscription = DeviceMotion.watchAcceleration({ frequency: 300 }).subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.accelerationX = Math.floor(acceleration.x);
      this.accelerationY = Math.floor(acceleration.y);
      this.accelerationZ = Math.floor(acceleration.z);

      if (acceleration.x > 5) {
        //Inclinacion Izquierda
        this.posicionActualCelular = 'izquierda';
        this.movimientoIzquierda();
      }
      else if (acceleration.x < -5) {
        //Inclinacion Derecha
        this.posicionActualCelular = 'derecha';
        this.movimientoDerecha();
      }
      else if (acceleration.y >= 9) {
        //encender flash por 5 segundos y sonido
        this.posicionActualCelular = 'arriba';

        if ((this.posicionActualCelular != this.posicionAnteriorCelular)) {
          this.audio.src = this.audioVertical;
          this.posicionAnteriorCelular = 'arriba';
        }
        this.audio.play();
        this.movimientoVertical();
      }

      else if (acceleration.z >= 9 && (acceleration.y >= -1 && acceleration.y <= 1) && (acceleration.x >= -1 && acceleration.x <= 1)) {
        //acostado vibrar por 5 segundos y sonido
        this.posicionActualCelular = 'plano';
        this.movimientoHorizontal();
      }
    
    })
    this.activado = true;
  }

  movimientoIzquierda() {
    this.primerIngreso = false;
    this.primerIngresoFlash = true;
    if (this.posicionActualCelular != this.posicionAnteriorCelular) {
      this.posicionAnteriorCelular = 'izquierda';
      this.audio.src = this.audioIzquierda;
    }
    this.audio.play();
  }

  movimientoDerecha() {
    this.primerIngreso = false;
    this.primerIngresoFlash = true;
    if (this.posicionActualCelular != this.posicionAnteriorCelular) {
      this.posicionAnteriorCelular = 'derecha';
      this.audio.src = this.audioDerecha;
    }
    this.audio.play();
  }

  movimientoVertical() {
    if (this.primerIngresoFlash) {
      this.primerIngresoFlash ? this.flashlight.switchOn() : null;
      setTimeout(() => {
        this.primerIngresoFlash = false;
        this.flashlight.switchOff();
      }, 5000);
      this.primerIngreso = false;
    }
  }

  movimientoHorizontal() {
    if (this.posicionActualCelular != this.posicionAnteriorCelular) {
      this.posicionAnteriorCelular = 'plano';
      this.audio.src = this.audioHorizontal;
    }
    this.primerIngreso ? null : this.audio.play();
    this.primerIngreso ? null : this.vibration.vibrate(5000);
    this.primerIngreso = true;
    this.primerIngresoFlash = true;
  }

  errorApagado() {
    //if (this.primerIngresoFlash) {
      //this.primerIngresoFlash ? this.flashlight.switchOn() : null;
      this.audio.src = this.audioError;
      this.audio.play();
      this.flashlight.switchOn()
      this.vibration.vibrate(5000);
      setTimeout(() => {
        this.primerIngresoFlash = false;
        this.flashlight.switchOff();
        this.vibration.vibrate(0);
      }, 5000);
    //}
  }

  parar() {    
    this.primerIngreso = true;
    this.subscription.unsubscribe();
  }

  vibracion(){
    this.vibration.vibrate(5000);    
  }

}
