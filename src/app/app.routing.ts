import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";
import { AsignarcargaComponent } from "./views/asignarcarga/asignarcarga.component";
import { AsignarcargafinComponent } from "./views/asignarcargafin/asignarcargafin.component";
import { EquiposAsignadosComponent } from "./views/equipos-asignados/equipos-asignados.component";
import { EquipoIncidenteComponent } from "./views/equipo-incidente/equipo-incidente.component";
import { RepuestosComponent } from "./views/repuestos/repuestos.component";

import { EquipoMantenimientoComponent } from "./views/equipo-mantenimiento/equipo-mantenimiento.component";
import { EquipoComponentesComponent } from "./views/equipo-mantenimiento/equipo-componentes/equipo-componentes.component";
import { RegistrarIncidenciaComponent } from "./views/registrar-incidencia/registrar-incidencia.component";


import { ListarDocentesComponent } from "./views/docente/listar-docentes/listar-docentes.component";
import { ListarIncidentesComponent } from "./views/docente/listar-incidentes/listar-incidentes.component";
import { AgregarDocenteComponent } from "./views/docente/agregar-docente/agregar-docente.component";

import { DocenteAgregarComponent } from "./views/docente-agregar/docente-agregar.component";
import { AgregarCatalogoComponent } from "./views/agregar-catalogo/agregar-catalogo.component";
import { ListarCatalogoComponent } from "./views/listar-catalogo/listar-catalogo.component";
import { ListarEquiposComponent } from "./views/listar-equipos/listar-equipos.component";

import { ListarComponentesComponent } from "./views/listar-componentes/listar-componentes.component";
import { AgregarComponenteComponent } from "./views/agregar-componente/agregar-componente.component";

import { AgregarEquipoComponent } from "./views/agregar-equipo/agregar-equipo.component";
import { SeleccionarEquipoComponent } from "./views/seleccionar-equipo/seleccionar-equipo.component";
import { SelectEquipoComponent } from "./views/select-equipo/select-equipo.component";

import { AgregarUsuarioComponent } from "./views/usuario/agregar-usuario/agregar-usuario.component";
import { ListarUsuariosComponent } from "./views/usuario/listar-usuarios/listar-usuarios.component";

import { AgregarTecnicoComponent } from "./views/tecnico/agregar-tecnico/agregar-tecnico.component";
import { ListarTecnicosComponent } from "./views/tecnico/listar-tecnicos/listar-tecnicos.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "404",
    component: P404Component,
    data: {
      title: "Page 404"
    }
  },
  {
    path: "500",
    component: P500Component,
    data: {
      title: "Page 500"
    }
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page"
    }
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register Page"
    }
  },

  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Home"
    },
    children: [
      {
        path: "asignar-carga",
        children: [
          {
            path: "",
            component: AsignarcargaComponent /*canActivate: [AuthGuard],data: {role: 'estudiante'}*/
          },
          { path: ":id", component: AsignarcargafinComponent }
        ]
      },
      {
        path: "registrar-incidencia",
        component: RegistrarIncidenciaComponent,
        data: {
          title: "Registrar Incidencia"
        }
      },
      {
        path: "equipos-asignados",
        children: [
          {
            path: "",
            component: EquiposAsignadosComponent /*canActivate: [AuthGuard],data: {role: 'estudiante'}*/
          },
          {
            path: ":id",
            children: [
              {
                path: "",
                component: EquipoIncidenteComponent /*canActivate: [AuthGuard],data: {role: 'estudiante'}*/
              },
              {
                path: "mantenimiento",
                component: EquipoMantenimientoComponent
              },
              { path: "repuestos", component: RepuestosComponent },
              {
                path: "componentes",
                component: EquipoComponentesComponent
              },
            ]
          }
        ]
      },
      {
        path: "catalogo",
        children: [
          {
            path: "",
            component: ListarCatalogoComponent /*canActivate: [AuthGuard],data: {role: 'estudiante'}*/
          },
          { path: "editar/:id", component: AgregarCatalogoComponent },
          { path: "insertar/:id", component: AgregarCatalogoComponent },

          { path: "insertar", component: AgregarCatalogoComponent }
        ]
      },
      {
        path: "componente",
        children: [
          {
            path: "",
            component: ListarComponentesComponent /*canActivate: [AuthGuard],data: {role: 'estudiante'}*/
          },
          { path: "editar/:id", component: AgregarComponenteComponent },
          { path: "insertar/:id", component: AgregarComponenteComponent },

          { path: "insertar", component: AgregarComponenteComponent }
        ]
      },
      {
        path: "tecnico",
        children: [
          {
            path: "",
            component: ListarTecnicosComponent /*canActivate: [AuthGuard],data: {role: 'estudiante'}*/
          },
          { path: "editar/:id", component: AgregarTecnicoComponent },
          { path: "insertar/:id", component: AgregarTecnicoComponent },

          { path: "insertar", component: AgregarTecnicoComponent }
        ]
      },
      {
        path: "usuario",
        children: [
          {
            path: "",
            component: ListarUsuariosComponent /*canActivate: [AuthGuard],data: {role: 'estudiante'}*/
          },
          { path: "editar/:id", component: AgregarUsuarioComponent },
          { path: "insertar/:id", component: AgregarUsuarioComponent },

          { path: "insertar", component: AgregarUsuarioComponent }
        ]
      },
      {
        path: "equipo",
        children: [
          {
            path: "",
            component: ListarEquiposComponent /*canActivate: [AuthGuard],data: {role: 'estudiante'}*/
          },
          { path: "editar/:id", component: AgregarEquipoComponent },
          { path: "insertar/:id", component: AgregarEquipoComponent },

          { path: "insertar", component: AgregarEquipoComponent },
          {
            path: "seleccionar-catalogo/:id",
            component: SeleccionarEquipoComponent
          },
          { path: "seleccionar-equipo/:id", component: SelectEquipoComponent }
        ]
      },
      {
        path: "docente",
        children: [
          {
            path: "",
            component: ListarDocentesComponent /*canActivate: [AuthGuard],data: {role: 'estudiante'}*/
          },
          { path: "editar/:id", component: AgregarDocenteComponent },
          {
            path: "insertar",
            children: [
              {
                path: "",
                component: AgregarDocenteComponent /*canActivate: [AuthGuard],data: {role: 'estudiante'}*/
              },
              { path: ":idDocente", component: AgregarDocenteComponent }
            ]
          },
          {
            path: "incidente",
            children: [
              {
                path: "",
                component: ListarIncidentesComponent /*canActivate: [AuthGuard],data: {role: 'estudiante'}*/
              },
              { path: "insertar", component: RegistrarIncidenciaComponent },
              {
                path: "editar/:codIncidente",
                component: RegistrarIncidenciaComponent
              }
            ]
          }
        ]
      },
      {
        path: "buttons",
        loadChildren: () =>
          import("./views/buttons/buttons.module").then(m => m.ButtonsModule)
      },
      {
        path: "charts",
        loadChildren: () =>
          import("./views/chartjs/chartjs.module").then(m => m.ChartJSModule)
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            m => m.DashboardModule
          )
      },
      {
        path: "icons",
        loadChildren: () =>
          import("./views/icons/icons.module").then(m => m.IconsModule)
      },
      {
        path: "notifications",
        loadChildren: () =>
          import("./views/notifications/notifications.module").then(
            m => m.NotificationsModule
          )
      },
      {
        path: "theme",
        loadChildren: () =>
          import("./views/theme/theme.module").then(m => m.ThemeModule)
      },
      {
        path: "widgets",
        loadChildren: () =>
          import("./views/widgets/widgets.module").then(m => m.WidgetsModule)
      }

    ]
  },
  { path: "**", component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
