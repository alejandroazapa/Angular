import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importación de FormsModule
import { EscuelaService } from '../services/escuela.service';

@Component({
  selector: 'app-escuela',
  standalone: true,
  imports: [
    FormsModule, // Asegúrate de incluir FormsModule aquí
    // otros módulos como TableModule, ButtonModule si son necesarios
  ],
  templateUrl: './escuela.component.html',
  styleUrls: ['./escuela.component.css'],
  providers: [EscuelaService]
})
export class EscuelaComponent implements OnInit {
  escuelas: any[] = [];
  escuelaActual: any = {}; // Para almacenar los datos de la escuela que se va a crear o editar
  dialogVisible: boolean = false;
  isEditMode: boolean = false;

  constructor(private escuelaService: EscuelaService) {}

  ngOnInit(): void {
    this.cargarEscuelas();
  }

  // Cargar todas las escuelas
  cargarEscuelas(): void {
    this.escuelaService.getEscuelas().subscribe(data => {
      this.escuelas = data;
    });
  }

  // Mostrar el diálogo para crear una nueva escuela
  mostrarDialogoCrear(): void {
    this.escuelaActual = {};
    this.isEditMode = false;
    this.dialogVisible = true;
  }

  // Mostrar el diálogo para editar una escuela existente
  mostrarDialogoEditar(escuela: any): void {
    this.escuelaActual = { ...escuela };
    this.isEditMode = true;
    this.dialogVisible = true;
  }

  // Guardar una nueva escuela o actualizar una existente
  guardarEscuela(): void {
    if (this.isEditMode) {
      this.escuelaService.updateEscuela(this.escuelaActual.id, this.escuelaActual).subscribe(() => {
        this.cargarEscuelas();
        this.cerrarDialogo();
      });
    } else {
      this.escuelaService.createEscuela(this.escuelaActual).subscribe(() => {
        this.cargarEscuelas();
        this.cerrarDialogo();
      });
    }
  }

  // Eliminar una escuela
  eliminarEscuela(id: number): void {
    this.escuelaService.deleteEscuela(id).subscribe(() => {
      this.cargarEscuelas();
    });
  }

  // Cerrar el diálogo
  cerrarDialogo(): void {
    this.dialogVisible = false;
    this.escuelaActual = {};
  }
}
