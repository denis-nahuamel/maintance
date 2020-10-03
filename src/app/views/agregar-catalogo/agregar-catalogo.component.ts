import { Component, OnInit } from '@angular/core';
import { CatalogoInterface } from '../../models/catalogo';
import { CatalogoService } from "../../services/catalogo.service";
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-catalogo',
  templateUrl: './agregar-catalogo.component.html',
  styleUrls: ['./agregar-catalogo.component.css']
})
export class AgregarCatalogoComponent implements OnInit {
	public codCatalogo:string;
	public titulo:string;
  constructor(private activatedRoute: ActivatedRoute,private catalogoService: CatalogoService,
   private router: Router) {

    }

  ngOnInit(): void {
  	this.codCatalogo = this.activatedRoute.snapshot.paramMap.get('id');//idgrado
  	if(this.codCatalogo){
  		this.titulo="Modificar Catalogo";
  		this.catalogoService.getCatalogo(this.codCatalogo).subscribe(catalogo => {             
         
          this.postCatalogo.setValue({
             categoria:catalogo.categoria,
             marca: catalogo.marca,
             modelo:catalogo.modelo,
             descripcion:catalogo.descripcion,  
          });  
      });
  	}
  	else{
  		this.titulo="Agregar Catalogo";
  	}
  }
   public postCatalogo = new FormGroup({
    categoria: new FormControl('', Validators.required),
    marca: new FormControl('', Validators.required),
    modelo: new FormControl('', Validators.required),
    descripcion: new FormControl(),    
  });
   
 agregarCatalogo(data: CatalogoInterface) {
      if(this.codCatalogo){//actualizar catalogo
             this.catalogoService.actualizarCatalogo(this.codCatalogo,data).subscribe(res => {
           console.log('Post updated successfully!');
      });
             this.irAtras();
          
      }
      else{//agregar catalogo
        //this.postCatalogo.value.codCatalogo=this.codCatalogo;
      
        this.catalogoService.agregarCatalogo(data).subscribe(res => {
         console.log('Se agrego con exito',res);
         //this.router.navigateByUrl('post/index');
    });
        //this.enviarMensaje();
        this.irAtras();
      }
   	
  }
  irAtras(){
  	this.router.navigate(['/catalogo']);
  }

}
