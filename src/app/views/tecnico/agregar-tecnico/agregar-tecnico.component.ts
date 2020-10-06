import { Component, OnInit } from '@angular/core';
import { TecnicoInterface } from '../../../models/tecnico';
import { TecnicoService } from "../../../services/tecnico.service";
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-tecnico',
  templateUrl: './agregar-tecnico.component.html',
  styleUrls: ['./agregar-tecnico.component.css']
})
export class AgregarTecnicoComponent implements OnInit {

  public codTecnico:string;
	public titulo:string;
  constructor(private activatedRoute: ActivatedRoute,
   private router: Router) {

    }

  ngOnInit(): void {
  	this.codTecnico = this.activatedRoute.snapshot.paramMap.get('id');//idgrado
  	/*if(this.codTecnico){
  		this.titulo="Modificar Tecnico";
  		this.tecnicoService.getTecnico(this.codTecnico).subscribe(tecnico => {             
         
          this.postTecnico.setValue({
             dni:tecnico.dni,
             nombre: tecnico.nombre,
             apellidos:tecnico.apellidos,
             telefono:tecnico.telefono,  
              correo:tecnico.correo,  
               contra:tecnico.contra,  
          });  
      });*/
  //	}
  	//else{
  		this.titulo="Agregar Tecnico";
  	//}
  }
   public postTecnico = new FormGroup({
    dni: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    telefono: new FormControl(), 
    correo: new FormControl('', Validators.required),
    contra: new FormControl(),    
  });
   
 /*agregarTecnico(data: TecnicoInterface) {
      if(this.codTecnico){//actualizar tecnico
             this.tecnicoService.actualizarTecnico(this.codTecnico,data).subscribe(res => {
           console.log('Post updated successfully!');
      });
             this.irAtras();
          
      }
      else{//agregar tecnico
        //this.postTecnico.value.codTecnico=this.codTecnico;
      
        this.tecnicoService.agregarTecnico(data).subscribe(res => {
         console.log('Se agrego con exito',res);
         //this.router.navigateByUrl('post/index');
    });
        //this.enviarMensaje();
        this.irAtras();
      }
   	
  }*/
  irAtras(){
  	this.router.navigate(['/tecnico']);
  }
}
