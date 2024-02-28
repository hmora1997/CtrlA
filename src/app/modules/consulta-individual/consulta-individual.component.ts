import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-individual',
  templateUrl: './consulta-individual.component.html',
  styleUrl: './consulta-individual.component.css'
})
export class ConsultaIndividualComponent {
  breadcrumbs = [
  
    { text: 'Home', link: '/home' },
    { text: 'Consulta individual', link: '/consulta-individual' }
  ];
}
