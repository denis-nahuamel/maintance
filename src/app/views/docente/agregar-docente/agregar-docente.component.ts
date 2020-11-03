import { Component, OnInit } from '@angular/core';
import { DocenteInterface } from '../../../models/docente';
import { DocentesService } from "../../../services/docentes.service";
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-docente',
  templateUrl: './agregar-docente.component.html',
  styleUrls: ['./agregar-docente.component.css']
})
export class AgregarDocenteComponent implements OnInit {

  public codDocente:string;
	public titulo:string;
  constructor(private activatedRoute: ActivatedRoute,
   private router: Router,private docenteService:DocentesService) {

    }

  ngOnInit(): void {
  	this.codDocente = this.activatedRoute.snapshot.paramMap.get('id');//idgrado
  	if(this.codDocente){
  		this.titulo="Modificar Docente";
  		this.docenteService.getDocente(this.codDocente).subscribe(docente => {

          this.postDocente.setValue({
             codDocente:docente.codDocente,
             nombre: docente.nombre,
             apellidos:docente.apellidos,
             telefono:docente.telefono,
              correo:docente.correo,
              categoria:docente.categoria,
               condicion :docente.condicion,
               regimen:docente.regimen,
               contra:docente.contra
          });
      });
  	}
  	else{
  		this.titulo="Agregar Docente";
  	}
  }
   public postDocente = new FormGroup({
    codDocente: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    telefono: new FormControl(),
    correo: new FormControl(),
    categoria:new FormControl(),
               condicion :new FormControl(),
               regimen:new FormControl(),
    contra: new FormControl(),
   // usuario:new FormControl()
  });

 agregarDocente(data: DocenteInterface) {
   data.activo=1;
      if(this.codDocente){//actualizar docente
            console.log(data);
             this.docenteService.actualizarDocente(this.codDocente,data).subscribe(res => {
           console.log('Post updated successfully!');
      });
             this.irAtras();

      }
      else{//agregar docente
        //this.postDocente.value.codDocente=this.codDocente;
        console.log("nuevo doce");
        this.docenteService.nuevoDocente(data).subscribe(res => {
         console.log('Se agrego con exito',res);
         //this.router.navigateByUrl('post/index');
    });
        //this.enviarMensaje();
        this.irAtras();
      }

  }
  irAtras(){
  	this.router.navigate(['/docente']);
  }

}
