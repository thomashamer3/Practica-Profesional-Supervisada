import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss'],
})
export class NumerosComponent  implements OnInit {
  @Output() enviarDato = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}

  playSound(animal : string)
  {
    this.enviarDato.emit(animal);
  }

}
