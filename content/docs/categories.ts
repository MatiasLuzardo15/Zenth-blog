import {
  Rocket, CalendarDays, LayoutDashboard, LibraryBig, PhoneCall, CircleDashed, Orbit,
  UserCog, Keyboard, Puzzle, ShieldCheck, LifeBuoy,
} from 'lucide-react';
import type { DocCategory } from './types';

/** El orden de esta lista es el orden de la barra lateral y de la portada. */
export const DOC_CATEGORIES: DocCategory[] = [
  {
    id: 'primeros-pasos',
    title: 'Primeros pasos',
    description: 'Qué es Zenth, cómo crear tu cuenta, instalarlo y moverte por él.',
    icon: Rocket,
  },
  {
    id: 'agenda',
    title: 'Agenda',
    description: 'Planifica tu tiempo con vistas de día, semana y mes, repeticiones y recordatorios.',
    icon: CalendarDays,
  },
  {
    id: 'pizarras',
    title: 'Pizarras y colaboración',
    description: 'Proyectos con listas, tarjetas, miembros, roles, automatizaciones y enlaces públicos.',
    icon: LayoutDashboard,
  },
  {
    id: 'biblioteca',
    title: 'Biblioteca',
    description: 'Notas, lienzos, archivos y documentos de Google en un mismo explorador.',
    icon: LibraryBig,
  },
  {
    id: 'reuniones',
    title: 'Reuniones',
    description: 'Salas de pizarra, llamadas privadas y reuniones rápidas con invitados.',
    icon: PhoneCall,
  },
  {
    id: 'enfoque',
    title: 'Enfoque',
    description: 'Un temporizador global con descansos, sonidos, historial y objetivo diario.',
    icon: CircleDashed,
  },
  {
    id: 'progreso',
    title: 'Progreso y ánimo',
    description: 'XP, niveles, logros, registro de ánimo y estadísticas de tu tiempo.',
    icon: Orbit,
  },
  {
    id: 'cuenta',
    title: 'Cuenta y ajustes',
    description: 'Perfil, apariencia, notificaciones, varias cuentas y papelera.',
    icon: UserCog,
  },
  {
    id: 'atajos',
    title: 'Atajos de teclado',
    description: 'Todos los atajos de la aplicación, del editor de notas y de las tablas.',
    icon: Keyboard,
  },
  {
    id: 'integraciones',
    title: 'Integraciones y Zen',
    description: 'Google Drive, Google Calendar y el asistente Zen con IA.',
    icon: Puzzle,
  },
  {
    id: 'privacidad',
    title: 'Privacidad y datos',
    description: 'Qué guarda Zenth, quién ve qué y cómo borrar lo tuyo.',
    icon: ShieldCheck,
  },
  {
    id: 'ayuda',
    title: 'Solución de problemas',
    description: 'Soluciones para el micrófono, los avisos, las conexiones de Google y los enlaces.',
    icon: LifeBuoy,
  },
];
