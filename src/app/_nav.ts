import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
 /* {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },*/
   {
    name: 'Incidentes',
    url: '/docente',
    icon: 'icon-bell',
    children: [
      {
        name: 'Listar Incidentes',
        url: '/docente/incidente',
        icon: 'icon-bell'
      },
     {
    name: 'Registrar Incidente',
    url: '/docente/incidente/insertar',
    icon: 'icon-pencil'
  },
    ]
  },
  {
    name: 'Asignar Carga',
    url: '/asignar-carga',
    icon: 'icon-drop'
  },
 
   {
    name: 'Equipos Asignados',
    url: '/equipos-asignados',
    icon: 'icon-cursor'
  },
  {
    name: 'Componentes',
  
    icon: 'icon-bell',
    children: [
      {
        name: 'Listar componentes',
        url: '/componente',
        icon: 'icon-bell'
      },
      {
        name: 'Agregar Componente',
        url: '/componente/insertar',
        icon: 'icon-bell'
      }
    ]
  },
   {
    name: 'Catalogo',
   // url: '/catalogo',
    icon: 'icon-bell',
    children: [
      {
        name: 'Listar Catalogo',
        url: '/catalogo',
        icon: 'icon-bell'
      },
      {
        name: 'Agregar Catalogo',
        url: '/catalogo/insertar',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Equipo',
   // url: '/catalogo',
    icon: 'icon-bell',
    children: [
      {
        name: 'Listar Equipo',
        url: '/equipo',
        icon: 'icon-bell'
      },
      {
        name: 'Agregar Equipo',
        url: '/equipo/insertar',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Usuario',
    icon: 'icon-bell',
    children: [
      {
        name: 'Listar Usuarios',
        url: '/usuario',
        icon: 'icon-bell'
      },
      {
        name: 'Agregar Equipo',
        url: '/usuario/insertar',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Tecnico',
    icon: 'icon-bell',
    children: [
      {
        name: 'Listar Tecnicos',
        url: '/tecnico',
        icon: 'icon-bell'
      },
      {
        name: 'Agregar Tecnico',
        url: '/tecnico/insertar',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Docentes',
    url: '/docentes',
    icon: 'icon-cursor',
   /* children: [
      {
        name: 'Agregar Docente',
        url: '/docentes/agregar-docente',
        icon: 'icon-cursor'
      },
      {
        name: 'Listar Docente',
        url: '/docentes',
        icon: 'icon-cursor'
      }
      
    ]*/
  }/*,
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  },
  {
    name: 'Download CoreUI',
    url: 'http://coreui.io/angular/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/angular/',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  }*/
];
