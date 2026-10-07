# Documentación del menú de participantes en llamadas

Revisión: 2026-10-06. Documenta el menú de clic derecho sobre las fichas de una
llamada (fase 1: opciones personales; fase 2: moderación) de
`zenith-productivity`. En la app, ver
`docs/architecture/work-items/participant-menu-moderation-handoff.md`.

## Fuentes

Se contrastó con el código: `ui/ParticipantMenu.tsx`, `ui/ParticipantMenuButton.tsx`,
`domain/participantMenu.ts`, `domain/listening.ts`,
`infrastructure/browser/listeningPreferences.ts`, `MeetingRuntimeProvider.tsx`,
`ui/GuestMeetingHostControls.tsx` y `supabase/functions/livekit-token/`
(`participantModeration.ts`). Los textos de la interfaz se copiaron de las
etiquetas reales.

## Cambios en zenth-blog

- `content/docs/articles/reuniones.ts`: artículo nuevo **El menú de cada persona**
  (`reuniones/el-menu-de-cada-persona`), entre «Durante una llamada» y «Audio y
  dispositivos». Explica cómo se abre, las opciones personales, el menú propio,
  la moderación y quién puede moderar en cada tipo de conversación.
- «Durante una llamada»: aviso que enlaza el artículo nuevo.
- «Controles del anfitrión»: moderación desde la ficha, solo sobre invitados.
- «Salas de pizarra y llamadas privadas»: sección **Moderar la sala**
  (administradores, dueño protegido, quien sale puede volver).
- `public/sitemap.xml`: ruta nueva y fechas de la categoría y los artículos tocados.

Límites documentados: volumen de 0 a 100 %, sin deslizador en Safari de
iPhone/iPad, «Silenciar para mí» no afecta al sonido de una pantalla compartida,
ocultar un vídeo dura la llamada, nadie puede abrirle el micrófono a otro y los
invitados no tienen este menú en su página.

## Verificación

- `npx --no-install tsc --noEmit` y `npm run build`: correctos (aviso existente
  de chunks grandes). `git diff --check`: correcto.
- Registro con esbuild: 78 artículos, sin claves duplicadas ni enlaces, anclas o
  relacionados rotos. Sitemap: 116 rutas, sin duplicados, todas las del registro.
- Búsqueda: «volumen de usuario», «silenciar para mí» y «ocultar vídeo» dan el
  artículo nuevo primero.
- Navegador contra `npm run dev`: el artículo se ve a 1280 y 390 px sin desborde
  de página (las tablas se desplazan dentro de su recuadro, como en el resto).

No se publicó la web ni se hizo commit. Los cambios del visor de documentos
(`atajos.ts`, `biblioteca.ts`, `integraciones.ts`) son de otra sesión.
