import { Component } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  usuarios: any[] = [];

  constructor(private usuariosService: UsuariosService){}

  ngOnInit(): void{
    this.usuariosService.getUsuarios().subscribe(data=>{
      this.usuarios = data;
      console.log(this.usuarios);
    })
  }

}
