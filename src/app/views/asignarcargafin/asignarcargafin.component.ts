import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalInterface } from '../../models/personal';
import { ProductoInterface } from '../../models/producto';
import { PersonalService } from "../../services/personal.service";
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-asignarcargafin',
  templateUrl: './asignarcargafin.component.html',
  styleUrls: ['./asignarcargafin.component.css']
})
export class AsignarcargafinComponent implements OnInit {
 public idTecnico=null;
 public tecnico:PersonalInterface;
 public Producto: Observable<ProductoInterface[]>;
 Productos: any = [];
 selectedItemsList = [];
  checkedIDs = [];
  constructor(private activatedRoute: ActivatedRoute,private personalService: PersonalService, private router: Router) {
       this.tecnico=null;
   }

  ngOnInit(): void {
  	this.idTecnico = this.activatedRoute.snapshot.paramMap.get('id');//idgrado
  	 this.personalService.getTecnico(this.idTecnico).subscribe(
      (data: PersonalInterface) => this.tecnico = { ...data }
    );
  	 this.loadProducto();
  	  this.fetchSelectedItems();
    this.fetchCheckedIDs();
  }
  /*datosTecnico(){
  	 return this.personalService.getTecnico(this.idTecnico).subscribe((data: {}) => {
    	//console.log("load",data);
      this.tecnico = data;
    })
  }*/
  loadProducto() {
  	
    return this.personalService.getProducto().subscribe((data: {}) => {
      this.Productos = data;
    })
  }
  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.Productos.filter((value, index) => {
      return value.checked
    });
     console.log("items",this.selectedItemsList);
  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.Productos.forEach((value, index) => {
      if (value.checked) {
        this.checkedIDs.push(value.id);
      }
    });
    
  }
  asignarCarga(tecnico:PersonalInterface){
  	
  	var equipos="equipos";
  	tecnico[equipos]=this.selectedItemsList;
  	 this.personalService.asignarCarga(tecnico).subscribe((result) => {
      this.router.navigate(['/product-details/' + result._id]);
    }, (err) => {
      console.log(err);
    });
  }
  
}
