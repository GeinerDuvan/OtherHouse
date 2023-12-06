import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  constructor() { }
  filterCasa = '';
  casas = [
    {
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
    },
    {
      "arrendador": 2,
      "descripcion": "Apartamento moderno con vistas espectaculares",
      "tamano": "80 m²",
      "direccion": "Avenida Secundaria 456",
      "preciobase": 900,
      "cupo": 2,
      "servicios_base": "Agua, electricidad",
      "servicios_ad": "Internet",
      "num_banos": 1,
      "petfriendly": false,
      "imagen": "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg"
    },
    {
      "arrendador": 3,
      "descripcion": "Piso amplio con terraza",
      "tamano": "200 m²",
      "direccion": "Plaza Principal 789",
      "preciobase": 1500,
      "cupo": 6,
      "servicios_base": "Agua, electricidad, gas",
      "servicios_ad": "Internet, calefacción",
      "num_banos": 3,
      "petfriendly": true,
      "imagen": "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg"
    },
    {
      "arrendador": 4,
      "descripcion": "Estudio céntrico con estilo industrial",
      "tamano": "60 m²",
      "direccion": "Calle Secundaria 101",
      "preciobase": 800,
      "cupo": 1,
      "servicios_base": "Agua, electricidad",
      "servicios_ad": "Internet",
      "num_banos": 1,
      "petfriendly": false,
      "imagen": "https://cdn.pixabay.com/photo/2018/02/12/10/07/apartment-lounge-3147892_1280.jpg"
    },
    {
      "arrendador": 5,
      "descripcion": "Chalet con piscina y jardín",
      "tamano": "300 m²",
      "direccion": "Avenida Principal 555",
      "preciobase": 2500,
      "cupo": 8,
      "servicios_base": "Agua, electricidad, gas",
      "servicios_ad": "Internet, piscina",
      "num_banos": 4,
      "petfriendly": true,
      "imagen": "https://cdn.pixabay.com/photo/2013/11/13/21/14/san-francisco-210230_1280.jpg"
    }
  ];
  ngOnInit() {
  }
}
