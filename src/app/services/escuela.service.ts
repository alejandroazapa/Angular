import { Component, OnInit } from '@angular/core';
import { EscuelaService } from '../services/escuela.service';

@Component({
  selector: 'app-escuela',
  templateUrl: './escuela.component.html',
  styleUrls: ['./escuela.component.css']
})
export class EscuelaComponent implements OnInit {
  escuelas: any[] = [];

  constructor(private escuelaService: EscuelaService) {}

  ngOnInit(): void {
    this.loadEscuelas();
  }

  loadEscuelas() {
    this.escuelaService.getEscuelas().subscribe(data => {
      this.escuelas = data;
    });
  }
}