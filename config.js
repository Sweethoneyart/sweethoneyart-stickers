// Único lugar para editar el catálogo. No contiene secretos ni datos de clientes.
window.AGUAPANELA = {
  demo: true, whatsapp: '573122665870', publicUrl: 'https://sweethoneyart.github.io/sweethoneyart-stickers/',
  brand: 'Aguapanela · Dulce Imaginación',
  collections: [{id:'animalitos', name:'Animalitos con historias', description:'Un pequeño bosque donde siempre cabe un abrazo.'}],
  faqs: [
    ['¿Son productos disponibles para comprar?', 'Esta es una demostración. Ilustraciones, precios, contenidos y combinaciones son ejemplos; todavía no se reciben pedidos reales.'],
    ['¿Cuánto cuesta el envío?', 'La cobertura, tarifa y plazo se confirmarán por WhatsApp antes de cualquier pago, cuando la tienda esté habilitada.'],
    ['¿Cómo se paga?', 'Al habilitar ventas, el comercio confirmará disponibilidad, envío y un medio de pago legítimo. Añadir a la bolsita no confirma una compra.'],
    ['¿Puedo pedir algo personalizado?', 'La personalización estará sujeta a cotización y confirmación de capacidad del taller.']
  ],
  products: [
    {id:'bosque-abrazos', name:'Un bosque de abrazos', subtitle:'Stickers para los días bonitos', collection:'animalitos',
      description:'Ositos curiosos, conejitos soñadores y flores que encuentran hogar en tus cuadernos, regalos y rincones favoritos.',
      full:'Una pequeña familia de personajes para acompañar lo cotidiano. Elige una pieza, comparte un mini pack o imagina una página entera llena de ternura. Arte ilustrativo de demostración; no representa una fotografía de producto.',
      images:['assets/galeria-1.svg','assets/galeria-2.svg','assets/galeria-3.svg','assets/galeria-4.svg'],
      details:['Dimensiones: por confirmar','Material: por confirmar','Impresión: por confirmar','Corte y resistencia: por confirmar'],
      options:[
        {id:'individual-mate', presentation:'Sticker individual', finish:'Mate', sku:'DEMO-BOS-IND-M', price:3500, content:'1 sticker ilustrativo', available:true},
        {id:'individual-brillante', presentation:'Sticker individual', finish:'Brillante', sku:'DEMO-BOS-IND-B', price:3500, content:'1 sticker ilustrativo', available:true},
        {id:'mini-mate', presentation:'Mini pack', finish:'Mate', sku:'DEMO-BOS-MIN-M', price:9500, content:'4 stickers ilustrativos', available:true, image:1},
        {id:'plancha-mate', presentation:'Plancha ilustrada', finish:'Mate', sku:'DEMO-BOS-PLA-M', price:15000, content:'1 plancha ilustrativa', available:true, image:2}
      ]},
    {id:'duo-aventuras', name:'Dúo de aventuras', subtitle:'La alegría se comparte', collection:'animalitos', description:'Dos mini packs para imaginar historias en compañía.', full:'Un pack de ejemplo para compartir pequeños detalles. Contenido y especificaciones pendientes de validación comercial.', images:['assets/galeria-2.svg','assets/galeria-1.svg'], details:['Dimensiones: por confirmar','Material e impresión: por confirmar'], options:[{id:'pack-mate', presentation:'Dúo de aventuras', finish:'Mate', sku:'DEMO-DUO-M', price:17000, content:'2 mini packs ilustrativos', available:true}]},
    {id:'cajita-carino', name:'Cajita de cariño', subtitle:'Un detalle que dice mucho', collection:'animalitos', description:'Una selección ilustrada para regalar un poquito de ternura.', full:'Concepto demostrativo de regalo. La caja, sus dimensiones y contenido definitivo deberán validarse antes de vender.', images:['assets/galeria-4.svg','assets/galeria-3.svg'], details:['Dimensiones y empaque: por confirmar','Material e impresión: por confirmar'], options:[{id:'caja-mate', presentation:'Cajita de cariño', finish:'Mate', sku:'DEMO-CAJ-M', price:27000, content:'Selección ilustrativa; contenido por confirmar', available:true}]}
  ]
};


