import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { LandingComponent } from './landing/landing.component';
import { InmuebleregComponent } from './inmueblereg/inmueblereg.component';
import { EditinmuebleComponent } from './editinmueble/editinmueble.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { InfohouseComponent } from './infohouse/infohouse.component';
import { InquilinosComponent } from './inquilinos/inquilinos.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: LandingComponent}, //dashboard
  { path: 'home', component: HomeComponent/*, canActivate: [AuthGuard]*/ }, // Accesible si usuario registrado
  { path: 'login', component: LoginComponent},
  { path: 'search', component: SearchComponent/*, canActivate: [AuthGuard]*/ }, //Accesible si usuario registrado
  { path: 'inmueble', component: InmuebleregComponent },
  { path: 'editarperfil', component: EditprofileComponent },
  { path: 'editarinmueble', component: EditinmuebleComponent },
  { path: 'informacion', component: InfohouseComponent},
  { path: 'inquilinos', component: InquilinosComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
})
export class AppRoutingModule { }
