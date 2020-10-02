import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarComponentesComponent } from './listar-componentes.component';
import { AgregarComponenteComponent } from '../agregar-componente/agregar-componente.component';

const routes: Routes = [
 
   {
    path: '',
    data: {
      title: 'Componentes'
    },
    children: [
      {
        path: '',
        redirectTo: 'listar-componentes'
      },
      {
        path: 'listar-componentes',
        component: ListarComponentesComponent,
        data: {
          title: 'Listar componentes'
        }
      },
      {
        path: 'agregar-componente',
        component: AgregarComponenteComponent,
        data: {
          title: 'Badges'
        }
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarComponentesRoutingModule {}
