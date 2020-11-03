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

  public dni:string;
	public titulo:string;
  constructor(private activatedRoute: ActivatedRoute,
   private router: Router,private tecnicoService:TecnicoService) {

    }

  ngOnInit(): void {
  	this.dni = this.activatedRoute.snapshot.paramMap.get('id');//idgrado
  	if(this.dni){
  		this.titulo="Modificar Tecnico";
  		this.tecnicoService.getTecnico(this.dni).subscribe(tecnico => {

          this.postTecnico.setValue({
             dni:tecnico.dni,
             nombre: tecnico.nombre,
             apellidos:tecnico.apellidos,
             telefono:tecnico.telefono,
              correo:tecnico.correo,
               contra:tecnico.contra,
               usuario:tecnico.usuario
          });
      });
  	}
  	else{
  		this.titulo="Agregar Tecnico";
  	}
  }
   public postTecnico = new FormGroup({
    dni: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    telefono: new FormControl(),
    correo: new FormControl(),
    contra: new FormControl(),
    usuario:new FormControl()
  });

 agregarTecnico(data: TecnicoInterface) {
   data.activo=1;
      if(this.dni){//actualizar tecnico
            console.log(data);
             this.tecnicoService.actualizarTecnico(this.dni,data).subscribe(res => {
           console.log('Post updated successfully!');
      });
             this.irAtras();

      }
      else{//agregar tecnico
        //this.postTecnico.value.dni=this.dni;

        this.tecnicoService.agregarTecnico(data).subscribe(res => {
         console.log('Se agrego con exito',res);
         //this.router.navigateByUrl('post/index');
    });
        //this.enviarMensaje();
        this.irAtras();
      }

  }
  irAtras(){
  	this.router.navigate(['/tecnico']);
  }
}
