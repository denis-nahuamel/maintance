import { Component, OnInit } from '@angular/core';
import { RepuestoInterface } from '../../models/repuesto';
import { RepuestosService } from "../../services/repuestos.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent implements OnInit {

 Repuestos: any = [];
term: string;
selectedItemsList = [];
  checkedIDs = [];
   message:string;
  public idEquipo=null;
  constructor(private activatedRoute: ActivatedRoute,
    private repuestosService: RepuestosService,
    private formBuilder: FormBuilder,
  			private router: Router) {

  }

  ngOnInit(): void {
    this.idEquipo = this.activatedRoute.snapshot.paramMap.get('id');//idgrado
    this.loadRepuestos();
  this.fetchSelectedItems();
    this.fetchCheckedIDs();
      this.repuestosService.currentMessage.subscribe(message => this.message = message)
  }

  loadRepuestos() {

    return this.repuestosService.getRepuestos().subscribe((data: {}) => {

      this.Repuestos = data;
    })
  }
  getTecnico(Repuestos:RepuestoInterface){
  	   this.router.navigate(['asignar-carga/'+Repuestos.id]);
  }

  nombreRepuesto(){

  	  this.repuestosService.changeMessage(this.selectedItemsList[0]);
  	   this.router.navigate(['equipos-asignados/'+this.idEquipo+'/mantenimiento']);
  }
   changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.Repuestos.filter((value, index) => {
      return value.checked
    });
     console.log("items",this.selectedItemsList);
  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.Repuestos.forEach((value, index) => {
      if (value.checked) {
        this.checkedIDs.push(value.id);
      }
    });

  }
}
