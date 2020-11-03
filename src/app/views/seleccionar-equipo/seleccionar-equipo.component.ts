import { Component, OnInit } from '@angular/core';
import { CatalogoInterface } from '../../models/catalogo';
import { CatalogoService } from "../../services/catalogo.service";
import { ComponenteService } from "../../services/componente.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar-equipo',
  templateUrl: './seleccionar-equipo.component.html',
  styleUrls: ['./seleccionar-equipo.component.css']
})
export class SeleccionarEquipoComponent implements OnInit {
	Catalogos: any = [];
term: string;
selectedItemsList = [];
  checkedIDs = [];
   message:string;
   public idRuta=null;//tiene el id del componente que lo esta llamando
  public idEquipo=null;
    constructor(private activatedRoute: ActivatedRoute
      ,private catalogoService: CatalogoService,private formBuilder: FormBuilder,
  			private router: Router,private componenteService: ComponenteService) {

    }

  ngOnInit(): void {
    this.idRuta = this.activatedRoute.snapshot.paramMap.get('id');//id del componente
    this.loadCatalogos();
  this.fetchSelectedItems();
    this.fetchCheckedIDs();
      this.catalogoService.currentMessage.subscribe(message => this.message = message)
  }

loadCatalogos() {
  	 if(this.idRuta==1)
      {
         return this.catalogoService.getCatalogos().subscribe((data: {}) => {

      this.Catalogos = data;
    })
      }
      if(this.idRuta==2)
      {
         return this.catalogoService.getCatalogoComponente().subscribe((data: {}) => {
            console.log("equipo",data);
            this.Catalogos = data;
          })
      }

  }
  nombreCatalogo(){


      if(this.idRuta==1)
      {
  	   this.router.navigate(['equipo/insertar']);
        this.catalogoService.changeMessage(this.selectedItemsList[0].codCtgoEquipo);
      }
      if(this.idRuta==2){

        this.componenteService.changeMessage(this.selectedItemsList[0].codCtgoComponente);
         this.router.navigate(['componente/insertar']);
      }
  }
   changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.Catalogos.filter((value, index) => {
      return value.checked
    });
     console.log("items",this.selectedItemsList);
  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.Catalogos.forEach((value, index) => {
      if (value.checked) {
        this.checkedIDs.push(value.id);
      }
    });

  }
}
