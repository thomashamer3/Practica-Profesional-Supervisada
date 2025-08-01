import { Injectable } from '@angular/core';
import { Mensajes } from '../interfaces/mensajes';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  
  itemsCollection !: AngularFirestoreCollection<Mensajes>;
  todosLosMensajes !: Observable<Mensajes[]>;

  constructor(private firestore : AngularFirestore) { 

  }

  guardarMensaje(nuevoMsj : Mensajes){
    this.firestore.collection('mensajes').add(nuevoMsj);    
  }

  traerTodosLosMensajes(curso : string){
    this.itemsCollection = this.firestore.collection<Mensajes>('mensajes',ref => ref.where('curso','==',curso));
    return this.todosLosMensajes = this.itemsCollection.valueChanges()
  }

}
