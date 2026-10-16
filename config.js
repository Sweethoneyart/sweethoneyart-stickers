// Único lugar para editar el catálogo. No contiene secretos ni datos de clientes.
window.AGUAPANELA = {
  demo: true, whatsapp: '573122665870', publicUrl: 'https://sweethoneyart.github.io/sweethoneyart-stickers/',
  brand: 'Aguapanela · Dulce Imaginación',
  collections: [{id:'animalitos', name:'Animalitos con historias', description:'Un pequeño bosque donde siempre cabe un abrazo.'}],
  faqs: [
    ['¿Son productos disponibles para comprar?', 'El catálogo utiliza ilustraciones oficiales de Aguapanela. Los precios, contenidos y combinaciones comerciales siguen siendo de demostración; todavía no se reciben pedidos reales.'],
    ['¿Cuánto cuesta el envío?', 'La cobertura, tarifa y plazo se confirmarán por WhatsApp antes de cualquier pago, cuando la tienda esté habilitada.'],
    ['¿Cómo se paga?', 'Al habilitar ventas, el comercio confirmará disponibilidad, envío y un medio de pago legítimo. Añadir a la bolsita no confirma una compra.'],
    ['¿Puedo pedir algo personalizado?', 'La personalización estará sujeta a cotización y confirmación de capacidad del taller.']
  ],
  imageDescriptions: {
  "assets/amigos-lectores-1200.webp": "Osito, conejito y gatito leyendo juntos entre flores y mariposas; ilustración oficial de Aguapanela.",
  "assets/conejito-osito-creando-1200.webp": "Conejito y osito creando corazones y barquitos de origami en una mesa de madera.",
  "assets/cartas-dulces-1200.webp": "Conejito, gatito y ratoncito preparando cartas y un regalo entre flores.",
  "assets/aventuras-origami-1200.webp": "Conejito, ratoncito y osito creando juntos figuras de origami bajo un arco azul.",
  "assets/historia-cali-1200.webp": "Amigos junto a un libro, con el logo de Aguapanela y el mensaje Cali, Colombia: aquí nace la magia.",
  "assets/grandes-abrazos-1200.webp": "Conejito, ratoncito y osito creando corazones de papel; pequeños amigos, grandes abrazos."
},
  products: [
    {id:'bosque-abrazos', name:'Un bosque de abrazos', subtitle:'Stickers para los días bonitos', collection:'animalitos',
      description:'Ositos curiosos, conejitos soñadores y flores que encuentran hogar en tus cuadernos, regalos y rincones favoritos.',
      full:'Una pequeña familia de personajes para acompañar lo cotidiano. Elige una pieza, comparte un mini pack o imagina una página entera llena de ternura. Ilustraciones oficiales de Aguapanela; las fotografías del producto físico están pendientes.',
      images:['assets/amigos-lectores-1200.webp','assets/conejito-osito-creando-1200.webp','assets/aventuras-origami-1200.webp','assets/cartas-dulces-1200.webp'],
      details:['Dimensiones: por confirmar','Material: por confirmar','Impresión: por confirmar','Corte y resistencia: por confirmar'],
      options:[
        {id:'individual-mate', presentation:'Sticker individual', finish:'Mate', sku:'DEMO-BOS-IND-M', price:3500, content:'1 sticker ilustrativo', available:true},
        {id:'individual-brillante', presentation:'Sticker individual', finish:'Brillante', sku:'DEMO-BOS-IND-B', price:3500, content:'1 sticker ilustrativo', available:true},
        {id:'mini-mate', presentation:'Mini pack', finish:'Mate', sku:'DEMO-BOS-MIN-M', price:9500, content:'4 stickers ilustrativos', available:true, image:1},
        {id:'plancha-mate', presentation:'Plancha ilustrada', finish:'Mate', sku:'DEMO-BOS-PLA-M', price:15000, content:'1 plancha ilustrativa', available:true, image:2}
      ]},
    {id:'duo-aventuras', name:'Dúo de aventuras', subtitle:'La alegría se comparte', collection:'animalitos', description:'Dos mini packs para imaginar historias en compañía.', full:'Un pack de ejemplo para compartir pequeños detalles. Contenido y especificaciones pendientes de validación comercial.', images:['assets/aventuras-origami-1200.webp','assets/conejito-osito-creando-1200.webp'], details:['Dimensiones: por confirmar','Material e impresión: por confirmar'], options:[{id:'pack-mate', presentation:'Dúo de aventuras', finish:'Mate', sku:'DEMO-DUO-M', price:17000, content:'2 mini packs ilustrativos', available:true}]},
    {id:'cajita-carino', name:'Cajita de cariño', subtitle:'Un detalle que dice mucho', collection:'animalitos', description:'Una selección ilustrada para regalar un poquito de ternura.', full:'Concepto demostrativo de regalo. La caja, sus dimensiones y contenido definitivo deberán validarse antes de vender.', images:['assets/cartas-dulces-1200.webp','assets/amigos-lectores-1200.webp'], details:['Dimensiones y empaque: por confirmar','Material e impresión: por confirmar'], options:[{id:'caja-mate', presentation:'Cajita de cariño', finish:'Mate', sku:'DEMO-CAJ-M', price:27000, content:'Selección ilustrativa; contenido por confirmar', available:true}]}
  ]
};


