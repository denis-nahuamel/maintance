import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from '../../../models/usuario';
import { UsuarioService } from "../../../services/usuario.service";
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
public codUsuario:string;
	public titulo:string;
  constructor(private activatedRoute: ActivatedRoute,private usuarioService: UsuarioService,
   private router: Router) {

    }

  ngOnInit(): void {
  	this.codUsuario = this.activatedRoute.snapshot.paramMap.get('id');//idgrado
  	if(this.codUsuario){
  		this.titulo="Modificar Usuario";
  		this.usuarioService.getUsuario(this.codUsuario).subscribe(usuario => {             
         
          this.postUsuario.setValue({
             codUsuario: usuario.codUsuario,
        	nombre: usuario.nombre,
        	apellidos: usuario.apellidos,
        	telefono: usuario.telefono,
        	correo: usuario.correo,
        	usuario: usuario.usuario,
        	contraseña: usuario.contraseña	
          });  
      });
  	}
  	else{
  		this.titulo="Agregar Usuario";
  	}
  }
   public postUsuario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required), 
    usuario: new FormControl('', Validators.required), 
    contraseña: new FormControl('', Validators.required),   
  });
    seleccionUsuario(event) {
    console.log(event.target.options[event.target.options.selectedIndex]);
}
 agregarUsuario(data: UsuarioInterface) {
 	data.usuario=data.correo;
      if(this.codUsuario){//actualizar usuario
             this.usuarioService.actualizarUsuario(this.codUsuario,data).subscribe(res => {
           console.log('Post updated successfully!');
      });
             this.irAtras();
          
      }
      else{//agregar usuario
        //this.postUsuario.value.codUsuario=this.codUsuario;
      
        this.usuarioService.agregarUsuario(data).subscribe(res => {
         console.log('Se agrego con exito',res);
    });
        //this.enviarMensaje();
        this.irAtras();
      }
   	
  }
  irAtras(){
  	this.router.navigate(['/usuario']);
  }
}
