import { Component, Injectable, OnInit } from '@angular/core';
import { EditarService} from './editar.service';
import { Persona } from './editar/Persona';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { 
  title = 'PortfolioWeb';
  
pPersona:Persona=new Persona();
 //pDatos se almacena todos los campos de la base de datos
 //porque la API ocupa un metodo JPA List Array
pDatos:any;
//valor para ngStyle,asignar un valor a la propiedad display de css
mostrarEditar = "none";
mostrarAgregar = "none";
mostrarEliminar ="none";
editarExperiencialaboral  ="none";
eliminarExperiencialaboral  ="none";
editarEducacion ="none";
eliminarEducacion="none";
//button login
mostrarButtonLogin="";
//button logout
mostrarButtonLogout="none";





//LocalStorage
  nombre:any;
  pDatosSession:any ;
  nombreSession: any;


 



  constructor(private  pPersonaService: EditarService,private r:Router ) {
    
  
  
    }

    ngOnInit() {
      console.log('El componente se ha iniciado');
      this.mostrardatosdedb();
      
    }

    //metodo para traer todos los campos de la database
     //y guardarlos en la property pDatos
      //luego en la vista elegimos que mostrar
      // a traves del *ngfor
public  mostrardatosdedb(){
      this.pPersonaService.retornar().
      subscribe(respuesta=>
        {this.pDatos=respuesta});


  
   
    }
    

       
  public   dLogin(l:string){
 //localStorage   
         localStorage.setItem(this.nombreSession,l);
 
        

    }
  public   dLogins(){
      this.pDatosSession= localStorage.getItem(this.nombreSession);
     
      if( this.pDatosSession != null){
         
      this.nombre=" Session Iniciada "+ this.pDatosSession;
     
    console.log(    "console log"+ this.nombre);
   
  
    this.mostrarButtonLogin="none";
    this.mostrarButtonLogout="block";

    this.mostrarAgregar="block";
    this.mostrarEditar="block";
this.mostrarEliminar="block";
this.editarExperiencialaboral="block";
this.eliminarExperiencialaboral="block";
this.editarEducacion="block";
this.eliminarEducacion="block";


    }
  }
    
    
   

logout(){
  localStorage.removeItem(this.nombreSession);
  this.nombre='';
  this.mostrarButtonLogin="block";
  this.mostrarButtonLogout="none";
  this.mostrarAgregar="none";
  this.mostrarEditar="none";
  this.mostrarEliminar="none";
  this.editarExperiencialaboral="none";
  this.eliminarExperiencialaboral="none";
  this.editarEducacion="none";
  this.eliminarEducacion="none";
  this.r.navigate(['/']);

}

        }
    
      
        
        
         
  


