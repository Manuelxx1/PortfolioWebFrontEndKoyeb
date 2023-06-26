import { Component, OnInit } from '@angular/core';
import { EditarService } from '../editar.service';
import { Persona } from '../editar/Persona';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';


import { FormBuilder,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  //para envios de datos del form al API
  pPersona: Persona = new Persona();
 
  pDatosenviados: string;
  //propiedad para el localStorage
  nombreS: string;
  //para ,mostrar nombre de usuario
  pDatosDeLogin: String;


  //para los validators 
  //propiedades email y password
email='';
password='';

pmostrarForm = "block";
// FormGroup forma parte de los formularios Reactivos
pform:FormGroup;






 
  constructor(private formBuilder: FormBuilder, private  EditarService: EditarService,  private router: Router,private c:AppComponent) {
  
   //creamos el grupo de controles del formulario 
   this.pform=this.formBuilder.group({
    //nombre=formControlName
    nombre:['',[Validators.required,Validators.minLength(5),Validators.maxLength(12)]],
    
    //password=formControlName
    //email=formControlName
    password:['',[Validators.required, Validators.minLength(8),Validators.maxLength(20)]]
   // email:['',[Validators.required, Validators.email]]
  })

}//constructor

//getters  para pasar datos al form 
  
get getterPassword(){
  return this.pform.get("password");
}

get getterUsuario(){
 return this.pform.get("nombre");
}

get getterPasswordValid(){
  return this.getterPassword?.touched && !this.getterPassword?.valid;
}




  ngOnInit() {}
  


    //metodo que se ejecuta cuando se envia el formulario
   onSubmitForm(){
    //se llama al metodo commitUser
      this.commitUser();
    }
     
    commitUser(){

     this.EditarService.login(this.pPersona).subscribe( 
        userData =>{
       console.log(userData)
        
  
        if(userData==true){
          
          this.pDatosenviados="Se ha comprobado exitosamente";
          this.c.dLogin(this.pPersona.nombre);
        


 setTimeout(() =>{
  this.pmostrarForm="none";
  this.router.navigate(['/']);

}, 5000);





      }//if
      

      });//llamado al service
        

      
 }//commitUser



 closePopup(){
    this.pmostrarForm = "none";
    this.router.navigate(['/']);

  }
}

