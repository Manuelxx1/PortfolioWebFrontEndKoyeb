import { Component, Injectable } from '@angular/core';
//para cnectarnos a un server web con los metodos http
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Persona } from './editar/Persona';



@Injectable({
  providedIn: 'root'
})
export class EditarService {
  
  
  //inyectamos HttpClient para conectarnos via metodos HTTP a un server
  constructor(private http: HttpClient) { 
    console.log('Servicio HTTP');
  }

  
  //metodo Get
  //traer todos
  retornar():Observable<Persona>{
 
   return this.http.get<Persona>("https://portfoliowebready-manuelxx1.koyeb.app/personas/traer");
  }  
  //Endpoint del Backend
  //traer informacion
  private backendInformacionURL: string = "https://portfoliowebready-manuelxx1.koyeb.app/personas/traerInfo";
  obtenerInformacion(): Observable<Persona>{
    return this.http.get<Persona>(`${this.backendInformacionURL}`);
  } 
  
  //Endpoint del Backend
  //traer por ID
  //con esto traemos los campos por id o dni
  //que luego en la vista decidimos que campo mostrar
  // //para el imput text a editar
        //sin usar un ngfor
  private backendURL: string = "https://portfoliowebready-manuelxx1.koyeb.app/personas/traer";
  obtenerPorId(dni: number): Observable<Persona>{
    return this.http.get<Persona>(`${this.backendURL}/${dni}`);
  } 
  
  //eliminar por ID
  private backendURLEliminar: string = "https://portfoliowebready-manuelxx1.koyeb.app/personas/borrar";
  eliminarPorId(dni: number): Observable<Persona>{
    return this.http.delete<Persona>(`${this.backendURLEliminar}/${dni}`);
  } 
  //eliminar info
  private backendURLEliminarInfo: string = "https://portfoliowebready-manuelxx1.koyeb.app/personas/borrarInfo";
  eliminarInfoPorId(dni: number): Observable<Persona>{
    return this.http.delete<Persona>(`${this.backendURLEliminarInfo}/${dni}`);
  } 
  //eliminar experiencia
  private backendURLEliminarExperiencia: string = "https://portfoliowebready-manuelxx1.koyeb.app/personas/borrarExperiencia";
  eliminarExpPorId(dni: number): Observable<Persona>{
    return this.http.delete<Persona>(`${this.backendURLEliminarExperiencia}/${dni}`);
  } 
  //eliminar educacion
  private backendURLEliminarEducacion: string = "https://portfoliowebready-manuelxx1.koyeb.app/personas/borrarEducacion";
  eliminarEducacionPorId(dni: number): Observable<Object>{
    return this.http.delete<Persona>(`${this.backendURLEliminarEducacion}/${dni}`);
  } 
  //para insertar datos a la base de datos,aqui creamos el usuario para registrarse en el portfolio
  //como puedo acceder a la base de datos con phpmyAdmin lo hize directamente ahi
  //entonces no hay un boton de Registro en el Front ya que el portfolio tampoco lo requeria
  //metodo POST
    enviar(pPersona: Persona): Observable<Object>{
      return this.http.post("https://portfoliowebready-manuelxx1.koyeb.app/personas/crear", pPersona);
    }



     //para agregar nuevos  datos a la base de datos 
  private backenURLdAgregar: string = "https://portfoliowebready-manuelxx1.koyeb.app/personas/agregar";
  agregar(dni:number ,pPersona: String): Observable<Object>{
    return this.http.post(`${this.backenURLdAgregar}/${dni}`,pPersona);
  }
       //para agregar nuevos  datos a la base de datos 
       private backenURLdAgregarExperiencia: string = "https://portfoliowebready-manuelxx1.koyeb.app/personas/agregarPortfolioExperiencia";
       agregarExperiencia(dni:number ,pPersona: String): Observable<Object>{
         return this.http.post(`${this.backenURLdAgregarExperiencia}/${dni}`,pPersona);
       }

       
       //para agregar nuevos  datos a la base de datos 
       private backenURLdAgregarEducacion: string = "https://portfoliowebready-manuelxx1.koyeb.app/personas/agregarPortfolioEducacion";
       agregarEducacion(dni:number ,pPersona: String): Observable<Object>{
         return this.http.post(`${this.backenURLdAgregarEducacion}/${dni}`,pPersona);
       }

       


    //para editar datos de la base de datos 
  //metodo PUT
  private backendURLeditar: string = "https://portfoliowebready-manuelxx1.koyeb.app/personas/editarPortfolio";
  editar(dni:number ,pPersona: String): Observable<Object>{
    return this.http.put(`${this.backendURLeditar}/${dni}`, pPersona);
  }
  //editar experiencia
  private backendURLeditarExperiencia: string = "https://portfoliowebready-manuelxx1.koyeb.app/personas/editarPortfolioExperiencia";
  editarExperiencia(dni:number,pPersona: String): Observable<Object>{
    return this.http.put(`${this.backendURLeditarExperiencia}/${dni}`, pPersona);
  }
  //Editar educacion
  private backendURLeditareditarEducacion: string = "https://portfoliowebready-manuelxx1.koyeb.app/personas/editarPortfolioEducacion";
  editarEducacion(dni:number,pPersona: String): Observable<Object>{
    return this.http.put(`${this.backendURLeditareditarEducacion}/${dni}`, pPersona);
  }
  
  
    //para login
  //metodo POST
  login(pPersona: Persona): Observable<Object>{
    return this.http.post("https://portfoliowebready-manuelxx1.koyeb.app/login", pPersona);
  }
  
  
 
  
  
  }
  