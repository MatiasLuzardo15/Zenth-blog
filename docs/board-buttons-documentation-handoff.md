# Documentación de botones de automatización

Revisión: 2026-10-06. Se contrastó Zenth Blog con la implementación de
`zenith-productivity` en `6047fc2` (`add functions51`). El blog partía de
`016685c` (`add functions53`), sin cambios locales. Esta tarea modifica
documentación y metadatos del blog.

## Fuentes revisadas

- `docs/architecture/work-items/board-buttons-handoff.md`: alcance, permisos,
  compatibilidad, ejecución, límites e integración MCP.
- `src/modules/boards/ui/automations/{BoardAutomationsDialog,AutomationRuleEditor,BoardButtonActions}.tsx`:
  creación, tipo, icono, condiciones, acciones, gestión e historial.
- `src/modules/boards/domain/automations.ts`,
  `src/app/composition/boards-tasks/buttons.ts` y
  `src/app/composition/boards-tasks/useBoardButtonUI.tsx`:
  condiciones, selección, confirmación y resumen de resultados.
- `components/{BoardCollaborationHub,BoardCardContextMenu,BoardSelectionBar,TaskDetailsModal}.tsx`,
  `pages/Todo.tsx` y `components/mobile/board/MobileBoard.tsx`:
  ubicación de los controles en escritorio y móvil; atribución en Actividad.
- `supabase/migrations/20261006040000_board_buttons.sql` y
  `20260929050000_board_automations_v2.sql`: candidatos, permisos, actor,
  acciones, historial, presupuesto compartido y errores parciales.
- `supabase/functions/mcp/{automations,tools}.ts`: listado por tipo,
  argumentos de `ejecutar_boton`, confirmación solicitada y gestión disponible.

El grafo de código no estaba disponible en esta sesión. Se usaron búsquedas
y lecturas locales como alternativa. No se modificó la aplicación ni se
ejecutaron migraciones o comandos contra una base de datos en esta revisión.

## Cambios

| Archivo | Cambio |
| --- | --- |
| `content/docs/articles/pizarras.ts` | Guía nueva `/docs/pizarras/botones-de-automatizacion` y actualización de diez guías de pizarras. |
| `content/docs/articles/integraciones.ts` | Ejecución de botones existentes en Zenth MCP y argumentos de las herramientas. |
| `content/docs/articles/cuenta.ts` | Categoría de correo Automatizaciones: incluye avisos de reglas y botones. |
| `content/docs/categories.ts` | Descripción de Pizarras incluye reglas y botones. |
| `public/sitemap.xml` | Nueva ruta de la guía, con revisión 2026-10-06. |

La guía nueva, **Botones de tarjeta y de pizarra**, explica creación,
condiciones y acciones, todas las superficies de ejecución, selección múltiple,
alcance de pizarra, resultados e historial, permisos y cierre, gestión, límites,
reglas encadenadas, MCP y resolución de problemas. Incluye los ejemplos
«Enviar a revisión» y «Cerrar sprint».

Las doce guías existentes actualizadas son:

- Crear y organizar pizarras.
- Cerrar y reabrir pizarras.
- Tarjetas y bandeja rápida.
- Seleccionar y gestionar tarjetas.
- Compartir una pizarra: invitaciones y roles.
- Colaborar en tarjetas.
- El menú de colaboración de la pizarra.
- Automatizaciones: reglas que trabajan solas.
- Plantillas de tarjeta, lista y pizarra.
- Pizarra pública con enlace.
- Zenth MCP.
- Notificaciones: dentro de Zenth, push y correo.

Se actualizaron enlaces relacionados y palabras de búsqueda. El registro de
artículos incorpora automáticamente la guía al índice, categoría, navegación,
tabla de contenido y buscador. Las guías afectadas ya tenían fecha 2026-10-06;
se conservó esa fecha y se asignó a la nueva guía.

## Precisiones documentadas

- Un botón es manual y no tiene disparador. Reutiliza las condiciones y
  acciones de las reglas; admite hasta diez de cada una.
- Propietario y administradores gestionan; Miembros ejecutan. Observadores,
  enlaces públicos y pizarras cerradas no permiten ejecutar botones. Reabrir
  conserva qué botones estaban activos.
- La asignación al actor, los comentarios y la ejecución en Actividad se
  atribuyen a quien pulsa. Si Actividad no encuentra a la persona entre los
  miembros, muestra «Zenth». Los avisos de las acciones de notificación usan
  la categoría de correo Automatizaciones.
- El botón de tarjeta comprueba sus condiciones en cada tarjeta. La selección
  hace un intento por tarjeta, reúne resultados, continúa tras un error y
  conserva la selección.
- El botón de pizarra usa todas sus tarjetas activas coincidentes, sin depender
  de búsqueda, filtros o selección. Excluye archivadas y papelera; puede incluir
  fechas futuras y varias ocurrencias activas de una serie.
- La confirmación muestra una cantidad calculada con la proyección cargada.
  La ejecución vuelve a comprobar las condiciones y entrega el resultado final.
- Cada pulsación procesa hasta 100 coincidencias, ordenadas por posición e id.
  Repetir vuelve a buscar coincidencias; no continúa automáticamente con las
  siguientes 100 y puede repetir comentarios, checklists o avisos.
- Las 120 ejecuciones por minuto se comparten con las reglas: cada tarjeta
  procesada y las reglas anidadas consumen el presupuesto. La cadena admite
  tres niveles, incluido el botón. El historial se conserva 30 días.
- Una acción fallida no revierte las acciones anteriores. El resumen distingue
  tarjetas afectadas, omisiones, errores parciales y límites, con acceso al
  historial para revisar el resultado antes de reintentar.
- Poner fecha no cambia la visibilidad en Agenda.
- MCP lista tipo, icono y última ejecución; ejecuta botones activos existentes
  con permiso de edición y solicita confirmación explícita para los de pizarra.
  `ejecutar_boton` usa `tablero`, `boton` e `id` para tarjeta. Crear y editar
  botones se hace en la app; MCP puede activarlos o desactivarlos con permiso
  de administración, pero no crearlos o borrarlos.

## Validación

| Comprobación | Resultado |
| --- | --- |
| `npx --no-install tsc --noEmit` | Pasa. |
| `npm run build` | Pasa: 2.194 módulos; permanece la advertencia existente de chunks mayores de 500 kB. |
| `git diff --check` | Pasa. |
| Registro real de documentación | 79 artículos, 13 guías del alcance, sin slugs o referencias relacionadas inválidas. |
| Enlaces y anclas internos | 229 enlaces comprobados, sin destinos rotos. |
| Sitemap | XML válido, 117 rutas sin duplicados, todas las guías presentes y fechas coherentes. |
| Buscador | Once consultas con destinos y anclas válidos; la guía nueva encabeza «botones de automatización» y MCP encabeza `ejecutar_boton`. |
| Navegador local | 27 comprobaciones de distribución y dos recorridos de búsqueda, sin excepciones de ejecución ni desbordamiento horizontal de página. |

La comprobación del navegador usa la compilación final servida con Vite
Preview en `127.0.0.1:3238`: escritorio 1280×800 y móvil 390×844,
temas claro y oscuro. Revisa la guía, tablas desplazables, alcance, historial
y enlace a MCP; además verifica selección, plantillas, enlace público y
notificaciones. Se inspeccionaron las capturas de escritorio y móvil.

Scripts, informes y capturas locales de verificación quedaron en
`node_modules/.cache/board-buttons-docs-20261006/` (ignorado):
`verify.mjs`, `report.json`, `browser-check.mjs`, `browser-report.json` y
`shots/`. No se añadieron dependencias ni pruebas unitarias para contenido
estático. El blog solo ofrece scripts `dev`, `build` y `preview`.

Chrome no pudo iniciar dentro del sandbox y después no pudo acceder a la
vista previa aislada. Ambos procesos fuera del sandbox permitieron completar
la comprobación. Fue un problema del entorno; el recorrido final pasa.

No se realizó un smoke autenticado de la aplicación: se verificó la
documentación contra su código y en la vista previa local del blog.
No se hizo publicación, commit ni push. No hay cambios de contratos públicos,
arquitectura, permisos o persistencia en esta tarea.
