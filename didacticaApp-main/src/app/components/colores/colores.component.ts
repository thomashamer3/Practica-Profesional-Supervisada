import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.scss'],
})
export class ColoresComponent  implements OnInit {
  @Output() enviarDato = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}

  playSound(animal : string)
  {
    this.enviarDato.emit(animal);
  }

}
