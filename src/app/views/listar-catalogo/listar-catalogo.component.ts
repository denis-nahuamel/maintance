import { Component, OnInit } from '@angular/core';
import { CatalogoInterface } from '../../models/catalogo';
import { CatalogoService } from "../../services/catalogo.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-catalogo',
  templateUrl: './listar-catalogo.component.html',
  styleUrls: ['./listar-catalogo.component.css']
})
export class ListarCatalogoComponent implements OnInit {

constructor(private activatedRoute: ActivatedRoute,private catalogoService: CatalogoService,
  				private formBuilder: FormBuilder, private router: Router) { }

 Catalogos: any = [];
  ngOnInit(): void {
    
    this.cargarCatalogos();

  }

  cargarCatalogos() {
  	
    return this.catalogoService.getCatalogos().subscribe((data: {}) => {
    	//console.log("load",data);
      this.Catalogos = data;
    })
  }
  borrarCatalogo(catalogo:CatalogoInterface) {
    
    return this.catalogoService.borrarCatalogo(catalogo.codCatalogo).subscribe(res => {
         this.Catalogos = this.Catalogos.filter(item => item.codCatalogo !== catalogo.codCatalogo);
         console.log('Post deleted successfully!');
    })
  }
  catalogoDetalles(catalogo:CatalogoInterface){
      this.router.navigate(['catalogo/editar/'+catalogo.codCatalogo]);  
  }
  agregarCatalogo(){
    
      this.router.navigate(['catalogo/insertar']);  
  }
}
