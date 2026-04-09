import type { ComponentCard } from '@/interfaces/ComponentCard'

export const componentsList: ComponentCard[] = [
  {
    name: 'Acordeón',
    description:
      'Componente para mostrar y ocultar contenido, permitiendo a los usuarios expandir una o más secciones.',
    image: '/images/components/accordion.png',
    route: '/docs/accordion',
  },
  {
    name: 'Alerta',
    description: 'Informa a los usuarios sobre eventos importantes o mensajes de estado.',
    image: '/images/components/alert.png',
    route: '/docs/alert',
  },
  {
    name: 'Avatar',
    description:
      'Se utiliza para mostrar una representación visual (miniatura) de un usuario o empresa.',
    image: '/images/components/avatar.png',
    route: '/docs/avatar',
  },
  {
    name: 'Badge',
    description: 'Etiquetas utilizadas para informar al usuario sobre el estado de datos específicos.',
    image: '/images/components/badge.png',
    route: '/docs/badge',
  },
  {
    name: 'Banner',
    description: 'Muestra mensajes importantes, promociones, avisos o alertas destacadas dentro de la interfaz.',
    image: '/images/components/banner.png',
    route: '/docs/banner',
  },
  {
    name: 'Bottom Navigation',
    description: 'Barra de navegación inferior ideal para apps móviles y paneles responsivos, con variantes, iconos, badges y soporte para acciones rápidas.',
    image: '/images/components/bottom-navigation.png',
    route: '/docs/bottom-navigation',
  },  
  // {
  //   name: 'Botón',
  //   description: 'Permite a los usuarios realizar acciones o tomar decisiones con un solo clic.',
  //   image: '/images/components/button.png',
  //   route: '/docs/button',
  // },
  // {
  //   name: 'Calendario',
  //   description: 'Incluye estilos y configuraciones para diferentes librerías de calendario.',
  //   image: '/images/components/calendar.png',
  //   route: '/docs/calendar',
  // },
  // {
  //   name: 'Tarjeta (Card)',
  //   description: 'Utilizada para agrupar y mostrar contenido de manera legible y estructurada.',
  //   image: '/images/components/card.png',
  //   route: '/docs/card',
  // },
]