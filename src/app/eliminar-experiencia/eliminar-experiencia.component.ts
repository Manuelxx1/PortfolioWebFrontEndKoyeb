import { Component, OnInit } from '@angular/core';
import { EditarService } from '../editar.service';
import { Persona } from '../editar/Persona';
import { Router } from '@angular/router';

//importamos AppComponent porque desde este archivo vamos a usar su metodo 
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-eliminar-experiencia',
  templateUrl: './eliminar-experiencia.component.html',
  styleUrls: ['./eliminar-experiencia.component.css']
})
export class EliminarExperienciaComponent implements OnInit {

 
  pPersona: Persona = new Persona();
  pvalorid:any;
  pDatosenviados: string;
  pDatosEliminados: string;

  constructor(private  EditarService: EditarService,  private router: Router,private c:AppComponent) {}
  
  ngOnInit() {}
  
    //metodo que se ejecuta cuando se envia el formulario
    onSubmitForm(){
      this.commitUser();
    }
     
    commitUser(){
  
     this.EditarService.eliminarExpPorId(this.pPersona.dni).subscribe( 
      
        userData =>{
          this.pvalorid=[userData]});
          this.pDatosEliminados="Datos Eliminados";

          
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
