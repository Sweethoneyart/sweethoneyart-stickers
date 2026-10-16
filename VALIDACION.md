# Auditoría y validación

## Base inspeccionada
Se abrió `aguapanela-producto-definitivo.zip` y se leyeron HTML, configuración, JavaScript, CSS y SVG. Contenía una ficha, tres presentaciones, cuatro ilustraciones y dos packs. No se recibieron los ZIP históricos.

Problemas encontrados: combinaciones de acabado sin restricción, ausencia de SKU y referencia en WhatsApp, carrito sin edición de cantidades, precios sin señalización uniforme de demostración, falta de portada/catálogo y políticas.

## Ejecutado
- 26 pruebas automáticas de validación, cantidades, duplicados, totales, opciones inválidas, precios manipulados, disponibilidad, mensaje y codificación de WhatsApp: aprobadas.
- Vista local responde HTTP 200.
- Navegación portada → producto: verificada.
- Miniatura 2 cambia imagen; mini pack cambia precio a $9.500 y desactiva brillante: verificado en navegador.
- Dos unidades suman $19.000; tres $28.500; reducir vuelve a $19.000: verificado.
- Recargar conserva carrito: verificado.
- Quitar artículo deja $0 y desactiva continuación: verificado.
- Comprar abre WhatsApp con teléfono 573122665870, texto solicitado y SKU DEMO-BOS-MIN-M: verificado en URL abierta. No se envió el mensaje.
- Revisadas visualmente portada y ficha en escritorio.

## Límites
El control de tamaño del navegador no cambió el tamaño real, por lo que no se da por realizada la revisión en móvil pequeño, móvil estándar o tableta. No se ejecutó Lighthouse ni se asignan puntuaciones. No se certifica WCAG AA: existen foco visible, etiquetas, HTML semántico, diálogos nativos y movimiento reducido, pero falta auditoría completa de contraste y lector de pantalla. No se probaron Safari, Firefox ni dispositivos físicos.

La ficha usa parámetros legibles en una página estática; sus metadatos sociales iniciales son genéricos. Para tarjetas sociales individuales completas será conveniente generar HTML por producto. No se añaden ofertas estructuradas ni reseñas porque los datos comerciales son demostrativos.


## Publicación verificada
GitHub Pages desplegó correctamente el commit 1a247965e3fbef28f51089981732f3b0e2f1af60. URL pública: https://sweethoneyart.github.io/sweethoneyart-stickers/ . Portada, recursos y ficha cargaron en el navegador. El workflow ejecutó las pruebas y terminó con Success. El primer intento, anterior a habilitar Pages, falló; el segundo completó la publicación.


## Personalización de identidad
Logos oficiales PNG con transparencia verificados; página de historia y navegación comprobadas. Referencia mini-mate en URL selecciona el SKU DEMO-BOS-MIN-M, actualiza precio a 9500 y bloquea Brillante. Revisión visual en 390 px y 320 px sin desbordamiento horizontal detectado. Las limitaciones de tamaños señaladas en la revisión inicial quedan parcialmente superadas por estas nuevas comprobaciones. La auditoría completa de accesibilidad, Safari y Firefox sigue pendiente.

