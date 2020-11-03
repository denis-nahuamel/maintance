import { Component, OnInit } from '@angular/core';
import { ComponenteInterface } from '../../models/componente';
import { ComponenteService } from "../../services/componente.service";
import { EquiposService } from "../../services/equipos.service";
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-agregar-componente',
  templateUrl: './agregar-componente.component.html',
  styleUrls: ['./agregar-componente.component.css']
})
export class AgregarComponenteComponent implements OnInit {

public codComponente:string;
  public titulo:string;
  public nombreCatalogo="";
  public nombreEquipo="";
  valorEstado:any;
  activo:any;

   public nombreRepuesto="";
  message:string;

  constructor(private activatedRoute: ActivatedRoute,
    private componenteService: ComponenteService,
     private equipoService: EquiposService,
   private router: Router) {
    this.activo = [{ value: 1, text: "Operativo", selected: "checked" }, { value: 2, text: "Malogrado", selected: "" }];
    this.componenteService.currentMessage.subscribe(message => this.nombreCatalogo = message);
     this.componenteService.codActualEquipo.subscribe(message => this.nombreEquipo = message)

    }

  ngOnInit(): void {
    this.codComponente = this.activatedRoute.snapshot.paramMap.get('id');//idComponente
    if(this.codComponente){
      this.titulo="Modificar Componente";
      this.componenteService.getComponente(this.codComponente).subscribe(componente => {
        console.log(componente);
         this.nombreCatalogo=componente.codCtgoComponente;
         this.nombreEquipo=componente.codEquipo;
         if (componente.estado=="MALOGRADO") {

           this.valorEstado=2;
         }
         else
         {
             this.valorEstado=1;
         }
          this.postComponente.setValue({
            codComponente:componente.codComponente,
             estado: this.valorEstado,
             equipo:componente.equipo,
             codEquipo:componente.codEquipo,
             codCtgoComponente:componente.codCtgoComponente
          });
      });
    }
    else{
      this.titulo="Agregar Componente";
    }
  }
   public postComponente = new FormGroup({
    codComponente: new FormControl(),
    equipo: new FormControl(),
    codEquipo: new FormControl(),
    codCtgoComponente: new FormControl(),
    estado: new FormControl(''),

  });
 agregarComponente(data: ComponenteInterface) {
   data.codCtgoComponente=this.nombreCatalogo;
    data.codEquipo=this.nombreEquipo;
   if (data.estado=="1") {
     data.estado="OPERATIVO"
   }
   else{
     data.estado="MALOGRADO"
   }
      if(this.codComponente){//actualizar componente

             this.componenteService.actualizarComponente(this.codComponente,data).subscribe(res => {
           console.log('componente actualizado');
        });
        this.irAtras();
      }
      else{//agregar componente
        console.log(data);
        this.componenteService.agregarComponente(data).subscribe(res => {
         console.log('Se agrego con exito',res);
      });
        this.irAtras();
      }
  }

  irAtras(){
    this.router.navigate(['/componente']);
  }
  getCatalogo(){
       this.router.navigate(['equipo/seleccionar-catalogo/2']);  //2 para seleccionar catalogo para componente
                                                                //seleccionar-equipo
  }
getEquipo(){
       this.router.navigate(['equipo/seleccionar-equipo/1']); //opcion de componente
  }                                                             //select equipo
}
