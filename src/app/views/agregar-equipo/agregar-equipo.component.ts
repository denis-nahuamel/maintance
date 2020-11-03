import { Component, OnInit } from '@angular/core';
import { EquipoInterface } from '../../models/equipo';
import { EquiposService } from "../../services/equipos.service";
import { CatalogoService } from "../../services/catalogo.service";
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-equipo',
  templateUrl: './agregar-equipo.component.html',
  styleUrls: ['./agregar-equipo.component.css']
})
export class AgregarEquipoComponent implements OnInit {
public codEquipo:string;
	public titulo:string;
	public nombreCatalogo="";
	valorEstado:any;
	activo:any;
	 public nombreRepuesto="";
  message:string;
  constructor(private activatedRoute: ActivatedRoute,private equipoService: EquiposService,
   private router: Router,private catalogoService: CatalogoService) {
		this.activo = [{ value: 1, text: "Activo", selected: "checked" }, { value: 2, text: "Inactivo", selected: "" }];
    this.catalogoService.currentMessage.subscribe(message => this.nombreCatalogo = message)

    }

  ngOnInit(): void {
  	this.codEquipo = this.activatedRoute.snapshot.paramMap.get('id');//idEquipo
  	if(this.codEquipo){
  		this.titulo="Modificar Equipo";
  		this.equipoService.getEquipo(this.codEquipo).subscribe(equipo => {
         this.nombreCatalogo=equipo.codCtgoEquipo;
         if (equipo.estado=="OPERATIVO") {

         	this.valorEstado=1;
         }
         else
         {
         		this.valorEstado=2;
         }
          this.postEquipo.setValue({
             patrimonio:equipo.patrimonio,
             estado: this.valorEstado,

             ubicacion:equipo.ubicacion,
             codCtgoEquipo:equipo.codCtgoEquipo,
             descripcion:equipo.descripcion,
          });
      });
  	}
  	else{
  		this.titulo="Agregar Equipo";
  	}
  }
   public postEquipo = new FormGroup({
    patrimonio: new FormControl(),
    estado: new FormControl(),
    ubicacion: new FormControl('', Validators.required),
    codCtgoEquipo: new FormControl(),
     descripcion: new FormControl(),


  });

 agregarEquipo(data: EquipoInterface) {

 	data.codCtgoEquipo=this.nombreCatalogo;
 	if (data.estado=="1") {
 		data.estado="OPERATIVO"
 	}
 	else{
 		data.estado="INOPERATIVO"
 	}
      if(this.codEquipo){//actualizar equipo

             this.equipoService.actualizarEquipo(this.codEquipo,data).subscribe(res => {
           console.log('equipo actualizado');
	      });
	      this.irAtras();
      }
      else{//agregar equipo
      	console.log(data);
        this.equipoService.agregarEquipo(data).subscribe(res => {
         console.log('Se agrego con exito',res);
    	});
        this.irAtras();
      }
  }

  irAtras(){
  	this.router.navigate(['/equipo']);
  }
  getCatalogo(){
  	   this.router.navigate(['equipo/seleccionar-catalogo/1']); //1 para agregar catalogo a equipo seleccionar-equipo
  }

}
