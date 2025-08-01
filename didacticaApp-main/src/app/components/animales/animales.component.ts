import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss'],
})
export class AnimalesComponent  implements OnInit {

  @Output() enviarDato = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  playSound(animal : string)
  {
    this.enviarDato.emit(animal);
  }

}
