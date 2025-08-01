import { Component, OnInit, ViewChild } from '@angular/core';
import { Mensajes } from 'src/app/interfaces/mensajes';
import { AuthService } from 'src/app/services/auth.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { IonContent } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sala-chat-a',
  templateUrl: './sala-chat-a.page.html',
  styleUrls: ['./sala-chat-a.page.scss'],
})
export class SalaChatAPage implements OnInit {
  mensajeNuevo:string = '';
  arrayMensajes:Mensajes[]=[];  
  isLogged:boolean = false;
  chatOn:boolean = false;
  usuarioLogueado : any;
  cargando : boolean = true;
  @ViewChild(IonContent) content!: IonContent;

  constructor(private auth : AuthService,private servMsj : MensajesService) { }

  ngOnInit() {
    this.auth.obtenerUsuarioLogueado().subscribe(
      user => {
        user ? this.isLogged = true : this.isLogged = false;
        this.usuarioLogueado = user;
      }
    )
    this.cargarMensajes();
  }

  ngAfterViewChecked():void{    
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    this.content.scrollToBottom(0);
  }

  enviarMensaje(){
    if(this.mensajeNuevo == '') return;
    if(this.mensajeNuevo.length > 21){
      Swal.fire({
        title: 'Mensaje muy largo.',
        icon: 'error',
        text: `Se aceptan 21 caracteres máximo`,
        confirmButtonText: "Aceptar",
        confirmButtonColor: '#7e34bc',
        background: '#000000',
        color: '#FFFFFF',
        heightAuto: false
      });      
      return
    }
    
  
    let date = new Date();
    let dateString = date.toString();  

    let nuevoMsj ={
      id:this.arrayMensajes.length+1,
      nombre: this.usuarioLogueado.email,
      emisor:this.usuarioLogueado.uid,
      texto: this.mensajeNuevo,
      fecha: dateString,
      curso:'A'
    }    
    this.servMsj.guardarMensaje(nuevoMsj);
    this.mensajeNuevo = "";
    setTimeout(() => {
      this.scrollToBottom();
    }, 20);
  }

  cargarMensajes(){
    this.servMsj.traerTodosLosMensajes('A').subscribe(
      mensajes=>{
        //console.log(mensajes);
        this.arrayMensajes = mensajes;
        this.ordenarMensajes();
        setTimeout(() => {
          this.cargando = false;
        }, 1500);
      }
    )    
  }

  ordenarMensajes(){
   
    this.arrayMensajes.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      
      return 0;
    });
  }

}
