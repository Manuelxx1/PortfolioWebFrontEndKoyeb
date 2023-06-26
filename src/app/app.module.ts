import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
//para que funcione el HttpClient en nuestro servicio
import {HttpClientModule} from '@angular/common/http';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EditarexperiancialaboralComponent } from './editarexperiancialaboral/editarexperiancialaboral.component';
import { EliminarExperienciaComponent } from './eliminar-experiencia/eliminar-experiencia.component';
import { EditarEducacionComponent } from './editar-educacion/editar-educacion.component';
import { EliminarEducacionComponent } from './eliminar-educacion/eliminar-educacion.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { AgregarComponent } from './agregar/agregar.component';
import { AgregarExperiencialaboralComponent } from './agregar-experiencialaboral/agregar-experiencialaboral.component';
import { AgregarEducacionComponent } from './agregar-educacion/agregar-educacion.component';





@NgModule({
  declarations: [
    AppComponent,
    EditarComponent,
    EliminarComponent,
    EditarexperiancialaboralComponent,
    EliminarExperienciaComponent,
    EditarEducacionComponent,
    EliminarEducacionComponent,
    FormLoginComponent,
    AgregarComponent,
    AgregarExperiencialaboralComponent,
    AgregarEducacionComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
