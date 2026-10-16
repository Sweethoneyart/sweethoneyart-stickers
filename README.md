# Aguapanela · Dulce Imaginación

© 2026 SweetHoneyArt. Todos los derechos reservados.

## Estado real
Catálogo de demostración con consultas por WhatsApp. Productos, precios, especificaciones e ilustraciones son ejemplos; no hay inventario confirmado ni pagos. El contacto autorizado es +57 312 266 5870.

## Archivos
- `index.html`: portada y catálogo.
- `producto.html?producto=bosque-abrazos`: ficha con galería, presentaciones y acabados.
- `config.js`: marca, productos, imágenes, precios, combinaciones válidas, preguntas y WhatsApp.
- `commerce.js`: validación, cálculo y mensajes.
- `app.js`: interacción, galería y bolsita.
- `styles.css`: diseño adaptable.
- `politicas.html`: estado de información comercial y privacidad.
- `dist/`: copia publicable en Sites. Actualizarla con los archivos públicos cuando se hagan cambios.

## Editar el catálogo
En `config.js`, cada producto tiene `id` único, `name`, `collection`, `description`, `images`, `details` y `options`. Cada opción representa una combinación real, no un cruce automático.

Para cambiar un precio, modifica `price: 9500` (número entero en COP, sin puntos ni símbolo). Para agregar acabado brillante al mini pack, añade una opción con `id` y `sku` únicos, `presentation: 'Mini pack'`, `finish: 'Brillante'`, `price` y `available`. No lo añadas hasta validar que existe.

Para cambiar fotografías, guarda archivos autorizados en `assets/` y actualiza `images` con rutas relativas, por ejemplo `assets/mini-pack.webp`. El atributo `image` de una opción es el índice de su imagen en esa lista (empieza en 0). Sustituye también los textos alternativos y los avisos de demostración cuando correspondan. Usa WebP/JPEG optimizados y dimensiones consistentes.

Para añadir productos, duplica un objeto de `products`, cambia identificadores y contenido y añade su colección a `collections`. La portada genera tarjetas desde el catálogo; los enlaces usan `producto.html?producto=ID`. Las presentaciones y acabados se generan desde las opciones disponibles. Para colecciones múltiples, adapta el agrupamiento de portada y la etiqueta de colección de la ficha, que en esta versión presenta la primera colección.

## WhatsApp
`whatsapp` contiene solo dígitos: `573122665870`. Comprar abre una consulta con el texto aprobado, producto, SKU, presentación, acabado y enlace público de la imagen visible. No envía automáticamente el mensaje ni adjunta archivos: wa.me solo admite texto y enlaces. WhatsApp puede decidir si muestra vista previa. En local no se incluye una dirección inaccesible; se informa que la imagen requiere publicación.

El carrito tiene un flujo distinto: conserva el resumen provisional y permanece bloqueado en `demo: true`. No cambiar a `false` antes de aprobar catálogo, precios, políticas, identidad del vendedor y verificar el pedido completo.

## Publicación
Repositorio oficial: https://github.com/Sweethoneyart/sweethoneyart-stickers

Sitio: https://sweethoneyart.github.io/sweethoneyart-stickers/

La rama principal es `main`. En GitHub, editar un archivo y guardar el cambio inicia el workflow `.github/workflows/pages.yml`, que ejecuta las pruebas y publica solo los archivos públicos. La fuente de Pages debe ser GitHub Actions. Las rutas relativas soportan la carpeta del repositorio. No incluir tokens, contraseñas o datos personales en código.

La carpeta `dist/` y `.openai/hosting.json`, cuando estén en la copia local, corresponden a un intento alternativo de Sites que no llegó a publicarse. No forman parte del repositorio GitHub ni son necesarias para Pages.

## Validación
`node test-commerce.cjs` ejecuta 26 pruebas de lógica, sin enviar mensajes. Ver `VALIDACION.md` para resultados y límites de revisión.

## Pendiente para ventas reales
Fotografías y productos autorizados, precios aprobados, datos del vendedor, materiales, medidas, impresión, existencias, tiempos, cobertura, tarifas, cambios/devoluciones y tratamiento de datos. El WhatsApp ya está autorizado, pero no se confirmó atención humana ni se envió un pedido real.

## Siguientes mejoras
1. Sustituir contenido de demostración y validar políticas.
2. Completar las verificaciones pendientes documentadas en VALIDACION.md.
3. Completar pruebas móviles, Safari/Firefox y medición Lighthouse.
4. Añadir colecciones múltiples y personalización cuando existan productos reales.



