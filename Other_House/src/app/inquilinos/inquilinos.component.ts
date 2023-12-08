import { Component } from '@angular/core';

@Component({
  selector: 'app-inquilinos',
  templateUrl: './inquilinos.component.html',
  styleUrls: ['./inquilinos.component.css']
})
export class InquilinosComponent {
  inquilinos = [
    { nombre: 'Juan Pérez', usuario: 'juanito123', estado: 'Al día', proximoPago: '01/03/2023', servicios: 'Lavandería' },
    { nombre: 'María Rodríguez', usuario: 'maria456', estado: 'Atraso', proximoPago: '15/03/2023', servicios: ['Comida', 'Aseo'] },
    { nombre: 'Carlos González', usuario: 'carlitos789', estado: 'En pausa', proximoPago: '05/04/2023', servicios: 'No' }
  ];
}
