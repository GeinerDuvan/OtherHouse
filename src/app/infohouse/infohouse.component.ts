import { Component } from '@angular/core';

@Component({
  selector: 'app-infohouse',
  templateUrl: './infohouse.component.html',
  styleUrls: ['./infohouse.component.css']
})
export class InfohouseComponent {
  casa =     {
    "arrendador": 1,
    "descripcion": "Casa acogedora en el centro de la ciudad",
    "tamano": "150 m²",
    "direccion": "Calle Principal 123",
    "preciobase": 1200,
    "cupo": 4,
    "servicios_base": "Agua, electricidad, gas",
    "servicios_ad": "Internet, cable",
    "num_banos": 2,
    "petfriendly": true,
    "imagen": "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg"
  };
usuario = {
  "nombre": "Juan Pérez",
  "username": "juan_perez123",
  "contrasena": "claveSegura123",
  "tel": 987654321,
  "fecha_nac": "1985-05-20",
  "tipo_doc": "Pasaporte",
  "num_doc": 87654321,
  "correo": "juan.perez@example.com"
  }
}
