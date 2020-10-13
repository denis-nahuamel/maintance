import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarComponentesComponent } from './listar-componentes.component';
import { ListarComponentesRoutingModule } from './listar-componentes-routing.module';
import { AgregarComponenteComponent } from '../agregar-componente/agregar-componente.component';

@NgModule({
  imports: [
    ListarComponentesRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ ListarComponentesComponent,AgregarComponenteComponent ]
})
export class ListarComponentesModule { }
