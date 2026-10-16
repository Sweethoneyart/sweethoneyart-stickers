# Identidad oficial y recuperación de la historia

## Fuente examinada
Se leyó el `index.html` real del repositorio [dulceimaginacion/dulceimaginacion.github.io](https://github.com/dulceimaginacion/dulceimaginacion.github.io/blob/main/index.html), correspondiente a https://dulceimaginacion.github.io/. El lector web no pudo abrir la página, pero el código se obtuvo mediante el conector de GitHub.

La versión anterior agrupaba estilos, catálogo y lógica en un HTML; presentaba categorías, variantes de tamaño, galería ampliable, enlaces compartidos y una historia familiar dentro de un modal. Sus precios, envío fijo y umbral de envío gratuito no se han trasladado como condiciones vigentes.

## Rescatado e integrado
- Origen en Cali, Colombia, y la metáfora cálida de la aguapanela.
- Diana, Guiller y Felipe (Felly), tal como aparecen en la historia original.
- Personalización y universo de papelería, tejidos, tote bags y regalos como parte de la historia, sin inventar disponibilidad.
- Compartir una referencia concreta del producto mediante un enlace.
- Página `nosotros.html` accesible desde navegación, portada y pie de página.

## Logos
Los PNG oficiales se conservaron sin redibujar, recolorear ni deformar:
- `assets/logo-aguapanela-color.png`: cabecera sobre fondo claro.
- `assets/logo-aguapanela-blanco.png`: pie sobre azul oscuro.
Se comprobó que ambos archivos tienen transparencia real. El diseño conserva su proporción y espacio alrededor. La paleta de interfaz usa tonos más oscuros derivados del azul y rosa para facilitar la lectura.

## Experiencia y tecnología
HTML5 semántico, CSS, Canvas 2D, JavaScript y GSAP/ScrollTrigger para entrada de contenido, revelado al desplazar y un movimiento ligero de la ilustración. La animación es progresiva: si la biblioteca no carga, el contenido y el comercio permanecen disponibles. Se respeta movimiento reducido y el lienzo se pausa fuera de pantalla o con la pestaña oculta.

GSAP se carga con versión fijada desde jsDelivr. No se incorporaron frameworks incompatibles entre sí, servidores ni bases de datos: la operación actual es estática en GitHub Pages y no necesita cuentas ni almacenamiento de clientes. Node.js ejecuta las pruebas y el flujo de publicación.

## Edición
`brand.css` contiene los ajustes de identidad, `motion.js` la animación y compartir, y `nosotros.html` el relato. `styles.css` conserva la base de la tienda. El checkout de WhatsApp y su número oficial siguen en los archivos de comercio existentes.
