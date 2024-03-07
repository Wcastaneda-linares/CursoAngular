import { Component, NgModule } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-personas',
  standalone: true,

  imports: [
      PersonaComponent,
      FormsModule
  ],
  templateUrl: './personas.component.html',
  styleUrls: [
      './personas.component.css'

  ]

})
export class PersonasComponent {
  deshabilitar =  false;
  mensaje = 'No se ha aregado ninguna persona';
  titulo = 'Ingeniero';

  agregarPersona(){
    this.mensaje = 'Persona agregada';
  }


}
