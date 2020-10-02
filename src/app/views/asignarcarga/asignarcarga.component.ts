import { Component, OnInit } from '@angular/core';
import { PersonalInterface } from '../../models/personal';
import { PersonalService } from "../../services/personal.service";
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-asignarcarga',
  templateUrl: './asignarcarga.component.html',
  styleUrls: ['./asignarcarga.component.css']
})
export class AsignarcargaComponent implements OnInit {
private frase: PersonalInterface ;
 myGroup: FormGroup;
 Personal: any = [];
  Productos: any = [];
 products: PersonalInterface[] = [];
  constructor(private personalService: PersonalService,private formBuilder: FormBuilder, private router: Router) {
  
  }

  ngOnInit(): void {
    
    this.loadProducto();

  }

  loadProducto() {
  	
    return this.personalService.getProducto().subscribe((data: {}) => {
    
      this.Productos = data;
    })
  }
  getTecnico(personal:PersonalInterface){
  	   this.router.navigate(['asignar-carga/'+personal.id]);  
  }

	
	checkAllCheckBox(ev) {
		this.Productos.forEach(x => x.checked = ev.target.checked)
	}

	isAllCheckBoxChecked() {
		return this.Productos.every(p => p.checked);
	}
  
}
