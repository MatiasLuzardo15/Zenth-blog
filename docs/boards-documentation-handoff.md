# Documentación de Pizarras

Revisión: 2026-10-05. Se contrastaron las guías de Zenth Blog con el código
actual de `zenith-productivity`, incluidos los cambios locales de tabla,
calendario, inicio y vencimiento, checklists, repetición, pizarra pública y MCP. Esta tarea modifica
documentación; no modifica la aplicación.

## Fuentes y estado

- `1c08d24`: acciones de listas y diálogos para mover o duplicar tarjetas.
  Se revisaron `BoardListActions`, `CardTransferDialog`, `TaskDetailsModal`,
  `pages/Todo.tsx`, `constants/boardLists.ts` y la composición `listActions.ts`
  con sus pruebas.
- `93e5f09`: acceso a reuniones de Zenth desde la cara frontal de una tarjeta.
  Se contrastaron `TaskRow`, `TaskMeetingJoinButton`, `useZenthMeetingJoin`
  y la variante móvil `BoardListPanel`.
- `BoardColumn` y `pages/Todo.tsx`: redimensionado, plegado, orientación y
  persistencia local; `constants/boardRoles.ts`: permisos de diseño y edición.
- Cambios locales de `BoardTableView`, `boardTable.ts`,
  `BoardSwitcher` y `pages/Todo.tsx`: vista de tabla, orden por cabeceras y
  elección de vista por pizarra.
- Cambios locales que aparecieron durante la revisión en `boardTaskQuery.ts`
  y `supabase/functions/mcp/{boards,tools}.ts`: tarjetas de fecha futura visibles y
  elección de una ocurrencia pendiente por serie (hoy o última atrasada;
  si no hay, próxima futura).
- Segunda revisión tras el aviso de cambios: `CardTransferDialog`,
  `copyTaskChecklists`, `taskCollaborationRepository`, `listActions` y
  `persistCreateBoardCards`, con sus pruebas: copia opcional de checklists en
  una tarjeta, automática en listas y asociación por posición de cada copia.
- `placement.ts` y `mapTaskCard`: completar una ocurrencia de una serie la
  incluye directamente en el historial, independientemente de dónde se complete.
- `TaskEditor`, `pages/Todo.tsx`, `RecurringSaveDialog`, `boardRecurrence.ts`
  y sus pruebas: convertir una tarjeta existente en serie, proponer hoy si no
  tiene fecha, confirmar el alcance al editar y regenerar las fechas siguientes.
- `20261005010000_public_board_one_card_per_series.sql`, su prueba SQL,
  `PublicBoardPage` y `groupPublicBoardCards`: orden manual y una ocurrencia
  pendiente por serie en el enlace público. Se leyó la migración; no se aplicó
  ni se ejecutó la prueba SQL contra una base de datos.
- `supabase/functions/mcp/{boards,tools}.ts` y sus pruebas: fechas futuras,
  repetición y límites de tarjetas. `leer_tablero` devuelve `limite`,
  `abiertas` y, al superarlo, `sobre_el_limite`; crear y mover devuelven un
  `aviso` sin impedir la operación cuando excede el límite.

Las herramientas del grafo de código no estaban disponibles en esta sesión.
Se usaron búsquedas y lecturas locales, respetando los cambios existentes.

## Cambios en Zenth Blog

En `content/docs/articles/pizarras.ts` se añadieron tres guías:

- `/docs/pizarras/acciones-de-listas`: ordenar, mover todas, archivar
  completadas, límite de tarjetas, copiar una lista y moverla entre pizarras.
- `/docs/pizarras/mover-y-duplicar-tarjetas`: destino y posición, opciones de
  conservación, contenido copiado y diferencias con las plantillas.
- `/docs/pizarras/vistas-de-pizarra`: diseño de columnas, ancho, plegado,
  orientación, tabla, fechas futuras y tareas repetidas.

También se actualizaron Crear y organizar pizarras, Tarjetas y bandeja rápida
y Plantillas de tarjeta, lista y pizarra. Se añadieron enlaces relacionados,
palabras de búsqueda y fechas de revisión; `public/sitemap.xml` incorpora las
tres rutas y las fechas de las guías afectadas y de sus índices.

La segunda revisión amplía estas guías y actualiza Colaborar en tarjetas,
Automatizaciones y Pizarra pública con enlace, además de Repetición y
recordatorios e Historial de completadas en `agenda.ts`, y Zenth MCP en
`integraciones.ts`. Corrige la descripción de la categoría Integraciones y
añade al sitemap la ruta de MCP que faltaba. Las doce guías del alcance
acumulado llevan fecha 2026-10-05.

La documentación aclara que:

- Ordenar una lista guarda el orden para el equipo; ordenar la tabla solo
  cambia la lectura de quien la consulta.
- Administradores y Miembros guardan el diseño de columnas en la pizarra;
  el Observador lo cambia localmente. Anchos y plegado son preferencias locales.
- El límite acepta 1–99 tarjetas abiertas y avisa sin bloquear. No cuenta
  tachadas ni archivadas; cuenta las tarjetas representadas en el tablero,
  no todas las ocurrencias pendientes de una serie.
- Las acciones de lista no se limitan a los resultados de búsqueda o filtros.
  Mover incluye las tarjetas futuras; copiar solo duplica las pendientes
  representadas en el tablero. Las archivadas quedan en el origen.
- Duplicar conserva las checklists con una opción inicialmente activada,
  también entre pizarras. Copiar una lista las conserva automáticamente.
  Mantiene títulos y orden, pero empieza sin marcas, responsables ni fechas
  de los pasos. La nota y sus casillas conservan su contenido.
- Las copias no clonan comentarios, votos, revisiones, imágenes, repetición,
  vínculo de calendario externo ni reunión. Responsables de la tarjeta y
  etiquetas compartidas se pueden conservar dentro de la misma pizarra;
  la copia conjunta de una lista no los conserva.
- Completar una ocurrencia repetida la lleva al historial y muestra la
  siguiente pendiente según su fecha. Las tarjetas sin repetición mantienen
  el paso de tachada a archivada.
- Editar solo una ocurrencia desde la pizarra la deja independiente. Cambiar
  la regla reconstruye las fechas siguientes sin duplicar las pasadas y
  mantiene la colaboración de la tarjeta editada.
- El enlace público respeta el orden manual, incluye fechas futuras y muestra
  una pendiente por serie. No amplía los datos públicos ni muestra el historial.
- MCP comunica el límite de una lista y avisa al excederlo sin bloquear la
  creación o el movimiento. La documentación presenta estas funciones sin
  etiquetas de estado, según la instrucción editorial del usuario.

No se cambian contratos públicos, dependencias, configuración ni datos.

## Verificación de la primera revisión

En Zenth Blog:

- `npx --no-install tsc --noEmit`: correcto.
- `npm run build`: correcto; se mantiene el aviso de chunks grandes.
- Registro real cargado con esbuild: 72 artículos sin claves duplicadas,
  6 guías nuevas o actualizadas con la fecha 2026-10-05, 17 enlaces internos
  válidos y relacionados con destinos existentes.
- Se comprobaron los primeros destinos de ocho búsquedas: límite de tarjetas,
  copiar lista, duplicar tarjeta, vista de tabla, contraer columna y reunión
  desde la tarjeta, fecha futura y próxima ocurrencia. Todos apuntan a la guía
  y sección esperadas.
- Sitemap leído como XML: 108 rutas sin duplicados; contiene las tres nuevas
  guías y las fechas verificadas de las seis guías afectadas.
- Navegador local sobre la compilación: guía de listas en escritorio,
  navegación a mover/duplicar y a vistas, y búsqueda de «límite de tarjetas»
  seguida de Enter hasta su ancla. Tras la última compilación se comprobó
  también la sección de fechas futuras y repetición con su ancla.
- Móvil de 390 × 844 px: lectura del límite y de la guía de vistas,
  sin desborde horizontal de página. Las tablas tienen desplazamiento propio
  (480 px de tabla dentro de 346 px de contenedor).
- `git diff --check`: correcto.

En la aplicación durante la primera revisión, sin editarla:

- `npm run typecheck`: correcto.
- `npm test`: 299 archivos y 2.025 pruebas correctas en la segunda ejecución,
  tras detectar los cambios locales de fechas y repetición.
- `npm run check:boundaries`: correcto; cero ciclos y sin deuda nueva.
- `npm run check:security`: correcto; sin deuda nueva.
- `npm run build`: correcto; se mantiene el aviso de chunks grandes.
- `git diff --check`: correcto.

Vitest y la comprobación con esbuild inicialmente no pudieron resolver la
configuración por acceso restringido a directorios superiores en el sandbox.
Se repitieron fuera de él y pasaron. Ese fallo de arranque no fue un fallo del
producto. Para la revisión visual se sirvió la compilación local del blog.
Los servidores y las pestañas temporales se cierran al terminar.

No se realizó un smoke autenticado de la app, persistencia contra Supabase,
colaboración entre usuarios ni una reunión real. Las comprobaciones visuales
corresponden a la documentación, no a esos flujos de producto.

Se preservaron los cambios locales de otros trabajos en ambos repositorios,
incluidos las guías de notas, atajos, `ArticleCard`, las entradas ajenas del
sitemap y la vista de tabla en la app. No se tocó `.claude/settings.local.json`.
Esta tarea no publica la web.

## Verificación tras los nuevos cambios

En Zenth Blog:

- `npx --no-install tsc --noEmit`: correcto.
- `npm run build`: correcto; aviso existente de chunks superiores a 500 kB.
- Registro real cargado con esbuild: 72 artículos sin claves duplicadas,
  doce guías del alcance acumulado con fecha 2026-10-05 y 43 enlaces internos
  válidos, incluidas las anclas nuevas. Todos sus relacionados existen.
- Ocho búsquedas devuelven destinos válidos: conservar checklists, copiar
  lista, vista de tabla, crear y editar una serie, tareas repetidas en
  pizarras, orden y tareas repetidas, límite de tarjetas y consultar/mover
  tarjetas. Las búsquedas generales también pueden llevar a guías relacionadas.
- Sitemap: XML válido, 109 rutas sin duplicados y fechas consistentes con
  las doce guías. Se incorporó `/docs/integraciones/zenth-mcp`.
- `git diff --check`: correcto.

En la aplicación, sin editarla:

- `npm run typecheck`: correcto.
- `npm test`: 300 archivos y 2.042 pruebas correctas. El primer intento no
  arrancó por permisos del sandbox; la repetición fuera del sandbox pasó.
- `npm run check:boundaries`: correcto; cero ciclos y sin deuda nueva.
- `npm run build`: correcto; mantiene el aviso de chunks grandes.
- `git diff --check`: correcto.
- `npm run check:security`: **falla** al detectar un nuevo sitio
  `SECURITY DEFINER` en
  `supabase/migrations/20261005010000_public_board_one_card_per_series.sql`,
  función `public.get_public_board`, conteo 1. La migración requiere la
  revisión de seguridad correspondiente en el trabajo de la app. No se
  modificaron la migración ni las baselines para ocultar este resultado.

La comprobación visual de esta segunda revisión no pudo completarse: el
navegador integrado agotó el tiempo de apertura de la pestaña local en dos
intentos. La evidencia visual de la primera revisión no valida estos párrafos
nuevos. Se cerró el servidor temporal. No se ejecutó un smoke autenticado ni
se aplicaron migraciones, pruebas SQL o cambios de datos.

## Ajuste editorial

A petición del usuario, la tabla, las fechas futuras y las tareas repetidas
se presentan como funciones habituales de la aplicación. Se retiraron los
avisos de estado y las instrucciones condicionales, y se actualizaron el
resumen y los títulos de sección.
Se repitieron la comprobación de tipos, la compilación y `git diff --check`:
correctos. Se verificó que no quedan avisos, condiciones ni referencias a las
anclas de sección anteriores en estas guías y su handoff.

## Tercera revisión: calendario y fechas

Base de la app: `28f478e` (`add functions38`), más los cambios locales de
`BoardCalendarView`, `boardCalendar.ts`, sus pruebas, `BoardSwitcher`,
`boardTable.ts` y `pages/Todo.tsx`. También se contrastaron los cambios
confirmados en `TaskEditor`, `TaskRow`, `TaskDetailsModal`, `boardRecurrence`,
`boardTaskQuery`, `recurrence.ts`, `listActions` y las herramientas MCP.
Se leyeron las rejillas `MonthCalendar`, `WeekCalendar` y `DayCalendar` para
confirmar los gestos y la presentación de tarjetas terminadas.

Se añadió `/docs/pizarras/calendario-de-pizarra` en `pizarras.ts` y en el
sitemap. Documenta:

- Calendario de escritorio en Mes, Semana y Día, flechas, Hoy y selector de fecha.
- Selección local de vista por pizarra y de escala en el navegador.
- Tarjetas en su vencimiento, o en su inicio cuando no tienen vencimiento;
  recuento de tarjetas sin fecha y exclusión de la bandeja sin clasificar.
- Creación desde un día u hora, manteniendo el ajuste de visibilidad en Agenda.
- Arrastre de día y hora, duración con el borde inferior y desplazamiento de
  inicio junto al vencimiento para conservar el intervalo entre las dos fechas.
- Una serie seleccionada por su representante despliega sus ocurrencias en
  el calendario, incluidas las terminadas, sin incluir la papelera. Los filtros
  deciden la inclusión de la serie; no se vuelven a aplicar a cada ocurrencia.
- Permisos: un Observador consulta; los gestos que guardan requieren edición.

Se actualizaron Crear y organizar pizarras, Tarjetas y bandeja rápida,
Acciones de listas, Mover y duplicar tarjetas, Vistas de pizarra y Menú de
colaboración. Se documentaron Inicio/Vence, el ajuste automático para evitar
fechas invertidas, copia de ambas fechas, Próximos 7 días desde mañana y los
tres alcances de eliminación. La repetición conserva su intervalo de fechas
y su decisión de aparecer en Agenda. Se corrigieron también las referencias
de Crear tareas/eventos/reuniones, Repetición, Historial, Papelera y MCP para
evitar instrucciones contradictorias. Son doce guías nuevas o modificadas en
esta revisión, dieciséis en el alcance acumulado; todas con fecha 2026-10-05.

Verificación de esta revisión:

- Blog: tipos y compilación correctos, con el aviso existente de chunks grandes.
- Registro real con esbuild: 73 artículos sin claves duplicadas, doce guías
  verificadas, 54 enlaces internos y sus anclas válidos; relacionados existentes.
- Ocho búsquedas devuelven destinos válidos para calendario, navegación,
  inicio/vencimiento, próximos 7 días, eliminación, series/filtros,
  cambios de fecha/hora/duración y creación desde el calendario.
- Sitemap: XML válido, 110 rutas sin duplicados y fechas verificadas.
- App: tipos, compilación y límites de módulos correctos; 301 archivos y
  2.058 pruebas correctas. `check:security` también pasa con la baseline
  incluida en `28f478e`. El fallo de la segunda revisión queda como evidencia
  histórica; esta tarea no modificó la baseline ni realizó una nueva aprobación
  de la migración.
- `git diff --check`: correcto en ambos repositorios.

El primer chequeo de tipos del blog coincidió con la compilación, que
reemplazó un archivo de `dist` incluido por la configuración de TypeScript;
el chequeo informó TS6053. Se repitió después de terminar la compilación y pasó.
No se modificó la configuración para resolver esa coincidencia.

No se realizó una nueva revisión visual ni un smoke autenticado de la app.
Se leyó `20261005020000_task_start_date.sql` para contrastar la regla de fechas;
no se aplicaron migraciones ni se hicieron cambios de datos. Se mantienen
los cambios ajenos y no se publica el blog. Las funciones se presentan con
instrucciones habituales, sin avisos de estado.
