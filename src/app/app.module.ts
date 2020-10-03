import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'


import { Ng2SearchPipeModule } from 'ng2-search-filter';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { AsignarcargaComponent } from './views/asignarcarga/asignarcarga.component';
import { AsignarcargafinComponent } from './views/asignarcargafin/asignarcargafin.component';
import { RegistrarIncidenciaComponent } from './views/registrar-incidencia/registrar-incidencia.component';
import { EquiposAsignadosComponent } from './views/equipos-asignados/equipos-asignados.component';
import { EquipoIncidenteComponent } from './views/equipo-incidente/equipo-incidente.component';
import { EquipoMantenimientoComponent } from './views/equipo-mantenimiento/equipo-mantenimiento.component';
import { RepuestosComponent } from './views/repuestos/repuestos.component';
import { ListarDocenteComponent } from './views/listar-docente/listar-docente.component';
import { AgregarDocenteComponent } from './views/agregar-docente/agregar-docente.component';
import { AgregarComponenteComponent } from './views/agregar-componente/agregar-componente.component';
import { DocenteAgregarComponent } from './views/docente-agregar/docente-agregar.component';
import { DocenteListarComponent } from './docente-listar/docente-listar.component';
import { CatalogoComponent } from './views/catalogo/catalogo.component';
import { ListarCatalogoComponent } from './views/listar-catalogo/listar-catalogo.component';
import { AgregarCatalogoComponent } from './views/agregar-catalogo/agregar-catalogo.component';
import { ListarEquiposComponent } from './views/listar-equipos/listar-equipos.component';
import { ListarComponentesComponent } from './views/listar-componentes/listar-componentes.component';
import { AgregarEquipoComponent } from './views/agregar-equipo/agregar-equipo.component';
import { SeleccionarEquipoComponent } from './views/seleccionar-equipo/seleccionar-equipo.component';
import { SelectEquipoComponent } from './views/select-equipo/select-equipo.component';
//import { EquipoComponent } from './services/equipo/equipo.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    AsignarcargaComponent,
    AsignarcargafinComponent,
    RegistrarIncidenciaComponent,
    EquiposAsignadosComponent,
    EquipoIncidenteComponent,
    EquipoMantenimientoComponent,
    RepuestosComponent,
     ListarDocenteComponent,
     AgregarDocenteComponent,
     DocenteAgregarComponent,
     DocenteListarComponent,
     CatalogoComponent,
     ListarCatalogoComponent,
     AgregarCatalogoComponent,
     ListarEquiposComponent,
     ListarComponentesComponent,
     AgregarEquipoComponent,
     SeleccionarEquipoComponent,
     //EquipoComponent,
     AgregarComponenteComponent,
     SelectEquipoComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
