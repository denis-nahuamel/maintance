import { Component, OnInit } from '@angular/core';
import { CatalogoInterface } from '../../models/catalogo';
import { CatalogoService } from "../../services/catalogo.service";
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
  public idEquipo=null;
    constructor(private activatedRoute: ActivatedRoute,private catalogoService: CatalogoService,private formBuilder: FormBuilder, 
  			private router: Router) {
  
  }

  ngOnInit(): void {
  
    this.loadCatalogos();
  this.fetchSelectedItems();
    this.fetchCheckedIDs();
      this.catalogoService.currentMessage.subscribe(message => this.message = message)
  }

loadCatalogos() {
  	
    return this.catalogoService.getCatalogos().subscribe((data: {}) => {
    
      this.Catalogos = data;
    })
  }
  nombreCatalogo(){
  	
  	  this.catalogoService.changeMessage(this.selectedItemsList[0].codCatalogo);
  	   this.router.navigate(['equipo/insertar']);  
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
