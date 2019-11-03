import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { RfidsComponent } from './components/rfids/rfids.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { HomeComponent } from './components/home/home.component';
import { CreateAlumnoComponent } from './components/create-alumno/create-alumno.component';
import { GrupoComponent } from './components/grupo/grupo.component';
import { AsignarComponent } from './components/asignar/asignar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateRfidComponent } from './components/create-rfid/create-rfid.component';
import { HttpClientModule } from '@angular/common/http';
import { EditAlumnoComponent } from './components/edit-alumno/edit-alumno.component';
import { EditRfidComponent } from './components/edit-rfid/edit-rfid.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    RfidsComponent,
    AsistenciaComponent,
    HomeComponent,
    CreateAlumnoComponent,
    GrupoComponent,
    AsignarComponent,
    NavbarComponent,
    CreateRfidComponent,
    EditAlumnoComponent,
    EditRfidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
