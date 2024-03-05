import { Component } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [
      PersonaComponent
  ],
  templateUrl: './personas.component.html',
  styleUrls: [
      './personas.component.css'
  ]

})
export class PersonasComponent {
  
}
