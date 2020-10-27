import { Component, OnInit } from '@angular/core';
import { ComponenteInterface } from '../../../models/componente';
import { ComponenteService } from "../../../services/componente.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-equipo-componentes',
  templateUrl: './equipo-componentes.component.html',
  styleUrls: ['./equipo-componentes.component.css']
})
export class EquipoComponentesComponent implements OnInit {

 Componentes: any = [];
term: string;
selectedItemsList = [];
  checkedIDs = [];
   message:string;
  public idEquipo=null;
  constructor(private activatedRoute: ActivatedRoute,private componentesService: ComponenteService,private formBuilder: FormBuilder,
  			private router: Router) {

  }

  ngOnInit(): void {
    this.idEquipo = this.activatedRoute.snapshot.paramMap.get('id');//idgrado
    this.loadComponentes();
  this.fetchSelectedItems();
    this.fetchCheckedIDs();
      this.componentesService.currentMessage.subscribe(message => this.message = message)
  }

  loadComponentes() {

    return this.componentesService.obtenerComponentesEquipo(this.idEquipo).subscribe((data: {}) => {
      console.log("compo",data);
      this.Componentes = data;
    })
  }
  getTecnico(Componentes:ComponenteInterface){
  	  // this.router.navigate(['asignar-carga/'+Componentes.id]);
  }

  nombreRepuesto(){

  	  this.componentesService.cambiarNombreComponente(this.selectedItemsList[0]);
  	   this.router.navigate(['equipos-asignados/'+this.idEquipo+'/mantenimiento']);//equipo-mantenimiento
  }
   changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.Componentes.filter((value, index) => {
      return value.checked
    });
     console.log("items",this.selectedItemsList);
  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.Componentes.forEach((value, index) => {
      if (value.checked) {
        this.checkedIDs.push(value.id);
      }
    });

  }

}
