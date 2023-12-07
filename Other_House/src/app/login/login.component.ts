import { Component } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private usuarioServicio: UsuariosService, private router:Router){
    
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      usuario: ['', Validators.required],
      fechaNac: ['', Validators.required],
      tdoc: ['', Validators.required],
      numdoc: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      contrasena:['', Validators.required],
    });

  }

    login() {
      if (this.loginForm.valid) {
        const credentials = this.loginForm.value;

        this.usuarioServicio.login(credentials).subscribe(
          (response)=>{
            console.log('login exitoso', response)
            
            this.router.navigate(['/home']);

          },
          (error)=> {
            console.error('Error en inicio sesion', error)
          }
        );
      }
    }


    register(){
      if (this.registerForm.valid){
        const userData = this.registerForm.value;

        this.usuarioServicio.register(userData).subscribe(
          (response)=>{
            console.log('Registro exitoso', response);

            this.router.navigate(['/home']);
          },
          (error) =>{
            console.error('Error en el registro', error);
          }
          
        );
      }
    }


}
