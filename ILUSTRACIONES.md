# Ilustraciones oficiales de Aguapanela

Las seis ilustraciones fueron aportadas por Diana para sustituir el arte genérico. Se conservan los PNG originales, con sus nombres originales, en `assets/` del repositorio. Los archivos WebP de 600 y 1200 px son copias optimizadas sin recorte, recoloración ni cambios en personajes, logos o textos.

| Archivo original | Uso en la tienda | Nombre web |
|---|---|---|
| Amigos creando grandes abrazos.png | Imagen principal de portada; contiene su propia cinta, logo y frase | grandes-abrazos |
| Agua Panela_ Dulce Imaginación.png | Sección de historia de la portada y página Acerca de nosotros | historia-cali |
| Ositos y amigos leen juntos.png | Imagen inicial de la colección, tarjeta del catálogo y galería | amigos-lectores |
| Conejito y Osito Creando Juntos.png | Mini pack y segunda imagen de galería | conejito-osito-creando |
| Aventuras de Origami en Aguapanela.png | Sección de colección, Dúo de aventuras y galería | aventuras-origami |
| Bunny, Gato y Cartas Dulces.png | Cajita de cariño y galería | cartas-dulces |

Los nombres web tienen las terminaciones `-600.webp` y `-1200.webp`. La versión de portada conserva un ancho máximo de 1122 px porque el original no llega a 1200; el archivo no se amplió artificialmente.

Se usan imágenes completas con `object-fit: contain`, proporciones naturales, textos alternativos descriptivos y selección de tamaño con `srcset`. Las imágenes secundarias se cargan de forma diferida. Los PNG originales no se descargan al visitar la tienda.

La ilustración es oficial, pero no equivale a una fotografía del producto físico. Precios, contenido comercial y existencias siguen pendientes de aprobación. El botón Comprar conserva la referencia seleccionada e incluye el enlace público de la ilustración visible.

## Verificación de esta actualización
- Los 18 archivos (seis PNG y doce WebP) se verificaron en el árbol del repositorio.
- Portada y tarjetas cargan las ilustraciones nuevas.
- Elegir Mini pack cambia a `conejito-osito-creando-1200.webp`.
- Elegir la cuarta miniatura cambia a Cartas dulces y actualiza su texto alternativo.
- La suite de 26 pruebas comerciales continúa aprobada.
