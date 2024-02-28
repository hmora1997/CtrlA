import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  breadcrumbs = [

    { text: 'Home', link: '/home' },
    { text: 'Consulta-individual', link: '/consulta-individual' },
  
  ];
}