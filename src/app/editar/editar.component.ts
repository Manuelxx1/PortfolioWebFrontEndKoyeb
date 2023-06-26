import { Component, OnInit } from '@angular/core';
import { EditarService } from '../editar.service';
import { Persona } from './Persona';
import { Router } from '@angular/router';
//importamos AppComponent porque desde este archivo vamos a usar su metodo 
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  pPersona: Persona = new Persona();
  pvalorid:any;
  pDatosEditados: string;
  dni:any;
  campoinformaciondatabase:any;
 

  constructor(private  EditarService: EditarService,  private router: Router,private c:AppComponent) {
   //este valor se le pasa al ng model "dni" del input text hidden 
   //que luego se envie desde el form como referencia para obtener
   //el dato que buscamos para mostrar en el campo de texto a editar 
   this.dni=30790186;
    this.EditarService.obtenerPorId(this.dni).
    subscribe(respuesta=>
      {this.campoinformaciondatabase=respuesta.informacion});
  }
 



  ngOnInit() {

  }
  



 
  
  
    //metodo que se ejecuta cuando se envia el formulario
    onSubmitForm(){
      this.commitUser();
    }
    
     
    commitUser(){

     this.EditarService.editar(this.pPersona.dni,this.pPersona.informacion).subscribe( 

        userData =>{
         this.pvalorid=[userData]});
          this.pDatosEditados="Datos Editados"
         

          setTimeout(() =>{
            //c es el nombre que almacena a AppComponent en el constructor
            //donde llamaremos a su metodo mostrardatosdedb()
            //esto hace que una vez que se edito el valor que queriamos aqui
            // se ejecute el codigo dentro de ese metodo
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
