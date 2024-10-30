// app.component.ts
import { Component, OnInit } from '@angular/core';
import { EscuelaService } from './services/escuela.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  escuelas: any[] = []; // Variable para almacenar las escuelas

  constructor(private escuelaService: EscuelaService) {}

  ngOnInit(): void {
    this.getEscuelas(); // Llamada al método al inicializar el componente
  }

  getEscuelas(): void {
    this.escuelaService.getEscuelas().subscribe(
      (data) => {
        this.escuelas = data;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
}
