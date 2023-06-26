import { Component, OnInit } from '@angular/core';
import { EditarService } from '../editar.service';
import { Persona } from '../editar/Persona';
import { Router } from '@angular/router';
//importamos AppComponent porque desde este archivo vamos a usar su metodo 
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
  pPersona: Persona = new Persona();
  pvalorid:any;
  pDatosEditados: string;
  dni:any;
  campoeducaciondatabase:any;
  constructor(private  EditarService: EditarService,  private router: Router,private c: AppComponent) {
    this.dni=30790186;
    this.EditarService.obtenerPorId(this.dni).
    subscribe(respuesta=>
      {this.campoeducaciondatabase=respuesta.educacion});
  
  }
  
  ngOnInit() {}
  
    //metodo que se ejecuta cuando se envia el formulario
    onSubmitForm(){
      this.commitUser();
    }
     
    commitUser(){
 
     this.EditarService.editarEducacion(this.pPersona.dni,this.pPersona.educacion).subscribe( 
       
        userData =>{
          this.pvalorid=[userData]});
          this.pDatosEditados="Datos Editados";

          
          setTimeout(() =>{
            //c es el nombre que almacena a AppComponent en el constructor
            //donde llamaremos a su metodo mostrardatosdedb()
            //esto hace que se ejecute el codigo dentro de ese metodo
            //y se acutualize lo modificado 
            //que se va a mostrar en la vista HTML
            this.c.mostrardatosdedb();
            
            }, 1000);
 }
  
  pdisplayStyle = "block";
  
  
  closePopup() {
    this.pdisplayStyle = "none";
    this.router.navigate(['/']);
  }


}
