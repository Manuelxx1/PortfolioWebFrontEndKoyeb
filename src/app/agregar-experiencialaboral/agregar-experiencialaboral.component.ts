import { Component, OnInit } from '@angular/core';
import { Persona } from '../editar/Persona';
import { EditarService } from '../editar.service';


import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-agregar-experiencialaboral',
  templateUrl: './agregar-experiencialaboral.component.html',
  styleUrls: ['./agregar-experiencialaboral.component.css']
})
export class AgregarExperiencialaboralComponent implements OnInit {
 
  pPersona: Persona = new Persona();
  pvalorid:any;
  pDatosAgregados: string;
  constructor(private  EditarService: EditarService,  private router: Router,private c:AppComponent) {

  }

  ngOnInit(): void {
  }

  //metodo que se ejecuta cuando se envia el formulario
  onSubmitForm(){
    this.commitUser();
  }
  
   
  commitUser(){

   this.EditarService.agregarExperiencia(this.pPersona.dni,this.pPersona.experiencia).subscribe( 

      userData =>{
       this.pvalorid=[userData]});
        this.pDatosAgregados="Datos Agregados"

        
  

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