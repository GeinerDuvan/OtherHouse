import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { InmuebleregComponent } from './inmueblereg/inmueblereg.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EditinmuebleComponent } from './editinmueble/editinmueble.component';
import { InfohouseComponent } from './infohouse/infohouse.component';
import { HousecomponentComponent } from './housecomponent/housecomponent.component';
import { InquilinosComponent } from './inquilinos/inquilinos.component';
import { InquilinocomponentComponent } from './inquilinocomponent/inquilinocomponent.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    FooterComponent,
    LandingComponent,
    SearchbarComponent,
    InmuebleregComponent,
    EditprofileComponent,
    EditinmuebleComponent,
    InfohouseComponent,
    HousecomponentComponent,
    InquilinosComponent,
    InquilinocomponentComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
