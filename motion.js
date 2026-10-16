/* Movimiento progresivo: el catálogo funciona incluso si la animación no carga. */
(()=>{'use strict';
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 if(window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);gsap.matchMedia().add('(prefers-reduced-motion: no-preference)',()=>{
   const hero=document.querySelector('.hero-copy');if(hero)gsap.from(hero.children,{y:22,opacity:0,stagger:.1,duration:.7,ease:'power2.out',clearProps:'all'});
   document.querySelectorAll('.collection-section,.story-preview,.roots-section,.family-grid article,.manifesto-section,.creative-world,.catalog-card').forEach(node=>gsap.from(node,{y:28,opacity:.2,duration:.75,ease:'power2.out',scrollTrigger:{trigger:node,start:'top 93%',once:true},clearProps:'all'}));
   if(matchMedia('(min-width: 900px)').matches&&document.querySelector('.hero-art'))gsap.to('.hero-art',{y:-22,rotation:1,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
 });}
 const canvas=document.querySelector('.imagination-canvas');
 if(canvas){const ctx=canvas.getContext('2d'),parent=canvas.parentElement;let width=0,height=0,raf=0,visible=true,last=0;const dots=Array.from({length:13},(_,i)=>({x:(i*79%100)/100,y:(i*37%100)/100,r:2+i%3,phase:i}));
   const size=()=>{width=parent.clientWidth;height=parent.clientHeight;const dpr=Math.min(devicePixelRatio||1,1.5);canvas.width=width*dpr;canvas.height=height*dpr;ctx?.setTransform(dpr,0,0,dpr,0,0)};
   const draw=t=>{if(!ctx)return;ctx.clearRect(0,0,width,height);dots.forEach((p,i)=>{const drift=reduced.matches?0:Math.sin(t*.0005+p.phase)*9;ctx.fillStyle=i%3===0?'#eb5ba933':i%3===1?'#1d78e82a':'#a5534330';ctx.beginPath();ctx.arc(p.x*width,p.y*height+drift,p.r,0,Math.PI*2);ctx.fill()});if(!reduced.matches&&visible&&!document.hidden)raf=requestAnimationFrame(loop)};
   const loop=t=>{if(t-last>32){last=t;draw(t)}else if(visible&&!document.hidden&&!reduced.matches)raf=requestAnimationFrame(loop)};
   const restart=()=>{cancelAnimationFrame(raf);if(visible&&!document.hidden){size();draw(0)}};new ResizeObserver(restart).observe(parent);new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;restart()}).observe(canvas);document.addEventListener('visibilitychange',restart);reduced.addEventListener('change',restart);
 }
 const share=document.getElementById('shareProduct');if(share)share.addEventListener('click',async()=>{const status=document.getElementById('shareStatus'),url=new URL(location.href),sku=document.getElementById('sku').textContent.replace('SKU: ','');const product=AGUAPANELA.products.find(p=>p.id===url.searchParams.get('producto'))||AGUAPANELA.products[0],option=product.options.find(o=>o.sku===sku);if(option)url.searchParams.set('referencia',option.id);try{if(navigator.share)await navigator.share({title:product.name,text:'Un pequeño tesoro de Aguapanela · Dulce Imaginación',url:url.href});else {await navigator.clipboard.writeText(url.href);status.textContent='Enlace de tu referencia copiado. ¡Listo para compartir!'}}catch(e){status.textContent=e.name==='AbortError'?'':'No pudimos compartirlo. Puedes copiar la dirección de esta página.'}});
})();
