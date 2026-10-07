# Ubicaciones de datos: evidencia y pendientes

Actualizado: 7 de octubre de 2026. Este registro respalda la sección «Proveedores y transferencias» de la política de privacidad. Distingue la ubicación principal de almacenamiento, la ejecución de funciones y el tránsito de datos. No acredita por sí solo el cumplimiento de los requisitos legales para transferencias internacionales.

## Datos confirmados para Zenth

| Servicio | Evidencia | Alcance de la conclusión |
| --- | --- | --- |
| Responsable | El responsable indicó que vive en Florida, Uruguay, y que `zenth.soporte@gmail.com` es el correo de consultas. | Se informa localidad y contacto. No se publica su dirección residencial. Sigue pendiente confirmar ante la URCDP qué domicilio alternativo puede informarse conforme al artículo 13. |
| Supabase | Captura del panel del proyecto Zenth: `us-west-2` (Oregón, Estados Unidos). La URL configurada en la aplicación corresponde al proyecto mostrado. | Es la región principal de la base de datos y del proyecto; no fija por sí sola la ejecución de todas las Edge Functions. Desde el 7 de octubre de 2026 sus buckets de Storage están vacíos: los archivos viven en Cloudflare R2 (WP-940 del repositorio de la app). |
| Cloudflare R2 | Respuesta de la API de Cloudflare al crear el bucket `zenth-files` el 7 de octubre de 2026: `location: ENAM`, `jurisdiction: default`, `storage_class: Standard`. | ENAM (este de Norteamérica) es una sugerencia de ubicación: Cloudflare la aplica como mejor esfuerzo, no como garantía. Sin jurisdicción configurada no hay compromiso contractual de residencia. Los enlaces de lectura son temporales y los emite la función `file-storage` de Supabase tras comprobar permisos. |
| LiveKit | Captura de «Data and privacy»: «Data region: United States». | Es la región de datos configurada. No prueba que toda la señalización, el audio, la cámara o la pantalla permanezcan en Estados Unidos. |
| Vercel | Capturas del despliegue de producción de Zenth: «Resources» contiene 468 «Static Assets» y ninguna función de Vercel. «Function Region: iad1» aparece como configuración. | La región `iad1` no describe la ubicación de ejecución de una función de este despliegue. Los archivos se entregan por la red global de Vercel. Vercel declara instalaciones principales de procesamiento en Estados Unidos y posibles operaciones en otros países. |
| Resend | Documentación pública del proveedor. | Los datos almacenados están en Estados Unidos; la región elegida para enviar un correo no determina dónde se almacenan. |
| Google | Documentación pública de Firebase y Google; integración opcional con cuentas Drive y Calendar de cada usuario. | Firebase Cloud Messaging usa infraestructura global. La ubicación de Drive y Calendar no puede fijarse de forma única desde el proyecto Zenth. No se ha confirmado una región única para Gemini API. |

## Fuentes del proveedor

- [Supabase: región principal del proyecto](https://supabase.com/docs/guides/platform/regions) y [ejecución regional de Edge Functions](https://supabase.com/docs/guides/functions/regional-invocation).
- [Cloudflare R2: ubicación de los datos, sugerencias de ubicación y jurisdicciones](https://developers.cloudflare.com/r2/reference/data-location/).
- [LiveKit: regiones y tráfico](https://docs.livekit.io/deploy/admin/regions/).
- [Vercel: regiones de Functions y archivos estáticos](https://vercel.com/docs/functions/configuring-functions/region) y [ubicaciones de procesamiento declaradas](https://vercel.com/legal/dpa). El acuerdo de tratamiento publicado indica que se aplica a clientes Pro y Enterprise; Zenth aparece en el plan Hobby, por lo que no debe presentarse ese acuerdo como contrato particular de Zenth.
- [Resend: ubicación de datos almacenados](https://www.resend.com/enterprise).
- [Firebase: ubicaciones de procesamiento](https://firebase.google.com/support/privacy) y [condiciones de Gemini API](https://ai.google.dev/gemini-api/terms).

## Verificaciones aún necesarias

- Confirmar con la URCDP qué domicilio se puede comunicar para el responsable sin publicar su vivienda. El [artículo 13 de la Ley 18.331](https://www.impo.com.uy/bases/leyes/18331-2008/13) exige informar domicilio, pero no ordena expresamente publicar la dirección residencial en una página abierta.
- Completar para cada transferencia internacional el destino, rol del importador, plazo, fundamento y operaciones de tratamiento, como dispone la [Resolución 70/023 de la URCDP](https://www.gub.uy/unidad-reguladora-control-datos-personales/institucional/normativa/resolucion-n-70023). No inferir países concretos a partir de una región principal ni del lugar de los usuarios.
- Verificar el registro de la base de datos y el fundamento aplicable a las transferencias. No se aportó constancia de inscripción ni autorización.
- Revisar este registro y la política si cambia la configuración de los proveedores o se añaden funciones de Vercel al despliegue de producción.
