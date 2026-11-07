/* BASE FUNCIONAL DEL PORTAFOLIO — Ruth Perez
   Edita textos e imágenes en la lista projects. Cada proyecto se abre automáticamente
   en una ficha con descripción, proceso, herramientas, imágenes y videos. */
const projects = [
  {id:'bless',name:'BLESS',category:'identidad',label:'Branding · Identidad visual',year:'Proyecto académico',cover:'assets/Bless/bless-portada.webp',summary:'Rebranding de una marca de jugos prensados, desde la estrategia hasta sus aplicaciones.',brief:'Rediseñar la identidad de Bless a partir de un nuevo público objetivo y una narrativa de marca renovada.',process:'Desarrollo conceptual, storytelling, logotipo, sistema visual, manual de identidad y pieza audiovisual adaptada a redes sociales, animada en After Effects e intervenida físicamente cuadro a cuadro.',tools:'Adobe After Effects: animación del video, luego impreso e intervenido a mano · Adobe Photoshop: edición y tratamiento de imágenes · Adobe Illustrator: logotipo, manual de marca y aplicaciones',gallery:[{type:'video',src:'assets/Bless/bless-video-v2.mp4',title:'Presentación audiovisual Bless'},{type:'heading',text:'Afiches publicitarios y stickers'},{type:'image',src:'assets/Bless/bless-afiche-publicitario.webp',alt:'Afiche publicitario Bless'},{type:'image',src:'assets/Bless/bless-afiche.webp',alt:'Afiche Tu identidad es una bendición'},{type:'image',src:'assets/Bless/bless-merch.webp',alt:'Stickers y merchandising Bless',wide:true}],stepsEyebrow:'IDENTIDAD',stepsTitle:'Manual de marca Bless',stepsIntro:'El sistema completo de la identidad: historia y valores de la marca, construcción del logotipo, variaciones, paleta, tipografías, recursos gráficos y sus aplicaciones en packaging, vía pública y merchandising.',steps:[{src:'assets/Bless/bless-manual-v2-01.webp',title:'Portada · Manual de marca'},{src:'assets/Bless/bless-manual-v2-02.webp',title:'Créditos'},{src:'assets/Bless/bless-manual-v2-03.webp',title:'Índice'},{src:'assets/Bless/bless-manual-v2-04.webp',title:'Introducción'},{src:'assets/Bless/bless-manual-v2-05.webp',title:'Introducción'},{src:'assets/Bless/bless-manual-v2-06.webp',title:'Historia de Bless'},{src:'assets/Bless/bless-manual-v2-07.webp',title:'Misión, visión y valores'},{src:'assets/Bless/bless-manual-v2-08.webp',title:'Personalidad y posicionamiento'},{src:'assets/Bless/bless-manual-v2-09.webp',title:'Público objetivo'},{src:'assets/Bless/bless-manual-v2-10.webp',title:'Logotipo e isotipo'},{src:'assets/Bless/bless-manual-v2-11.webp',title:'Área de seguridad'},{src:'assets/Bless/bless-manual-v2-12.webp',title:'Construcción'},{src:'assets/Bless/bless-manual-v2-13.webp',title:'Tamaño mínimo'},{src:'assets/Bless/bless-manual-v2-14.webp',title:'Variaciones'},{src:'assets/Bless/bless-manual-v2-15.webp',title:'Cromáticas'},{src:'assets/Bless/bless-manual-v2-16.webp',title:'Variaciones'},{src:'assets/Bless/bless-manual-v2-17.webp',title:'Cromáticas'},{src:'assets/Bless/bless-manual-v2-18.webp',title:'Usos incorrectos'},{src:'assets/Bless/bless-manual-v2-19.webp',title:'Paleta cromática'},{src:'assets/Bless/bless-manual-v2-20.webp',title:'Paleta cromática secundaria'},{src:'assets/Bless/bless-manual-v2-21.webp',title:'Psicología del color'},{src:'assets/Bless/bless-manual-v2-22.webp',title:'Tipografías'},{src:'assets/Bless/bless-manual-v2-23.webp',title:'Jerarquías tipográficas'},{src:'assets/Bless/bless-manual-v2-24.webp',title:'Recursos gráficos'},{src:'assets/Bless/bless-manual-v2-25.webp',title:'Estilo fotográfico'},{src:'assets/Bless/bless-manual-v2-26.webp',title:'Aplicaciones de marca · Redes sociales'},{src:'assets/Bless/bless-manual-v2-27.webp',title:'Packaging'},{src:'assets/Bless/bless-manual-v2-28.webp',title:'Vía pública'},{src:'assets/Bless/bless-manual-v2-29.webp',title:'Merchandising'}],extra:{title:'Fotogramas del video',intro:'El video se animó en After Effects, se imprimió cuadro a cuadro y cada fotograma fue intervenido físicamente a mano antes de volver a digitalizarse. Aquí, fotogramas del inicio, el medio y el final de la pieza.',items:[{src:'assets/Bless/bless-fotogramas-1.webp',title:'Inicio'},{src:'assets/Bless/bless-fotogramas-8.webp',title:'Medio'},{src:'assets/Bless/bless-fotogramas-15.webp',title:'Final'}]}},
  {id:'adela',name:'ADÉLA / PRIMA',category:'multimedia',label:'Interacción · Diseño multimedia',year:'Proyecto académico',cover:'assets/Adela/adela-portada.webp',summary:'Identidad visual para un visualizador digital tipo CD, inspirado en la canción Marijuana de ADÉLA.',brief:'A partir de una cantante, elegir una de sus canciones y plasmar en un moodboard cómo percibía tanto la canción como a la artista. Desde esa lectura, diseñar una identidad visual para un visualizador digital inspirado en el formato de un CD: portada, visualizador de audio, letra y créditos.',process:'Comencé con un moodboard que reunía mi interpretación de la canción y de la artista: colores, texturas, imágenes y sensaciones. Con esa base definí la identidad visual y la llevé a cada pantalla del visualizador (portada, visualizador de audio, letra y créditos), desarrollado de forma interactiva en p5.js.',tools:'p5.js + p5.sound: programación del visualizador interactivo y su respuesta al audio · Adobe Photoshop: diseño de las pantallas y la portada · Tipografías: BMX Radical y Lo-Res 12 Narrow',gallery:[{type:'image',src:'assets/Adela/adela-menu.webp',alt:'Pantalla de inicio del visualizador'},{type:'image',src:'assets/Adela/adela-lyrics-v2.webp',alt:'Pantalla de letra del visualizador'},{type:'image',src:'assets/Adela/adela-creditos-v2.webp',alt:'Pantalla de créditos del visualizador'}],stepsEyebrow:'PROCESO',stepsTitle:'Investigación, moodboard y desarrollo',stepsIntro:'La presentación completa del proyecto: quién es ADÉLA, el análisis de la canción, el moodboard y el paso del boceto digital al visualizador final.',steps:[{src:'assets/Adela/adela-presentacion-01.webp',title:'Portada · Moodboard e investigación'},{src:'assets/Adela/adela-presentacion-02.webp',title:'¿Quién es ADÉLA?'},{src:'assets/Adela/adela-presentacion-03.webp',title:'La canción'},{src:'assets/Adela/adela-presentacion-04.webp',title:'Estructura de la canción'},{src:'assets/Adela/adela-presentacion-05.webp',title:'Moodboard general'},{src:'assets/Adela/adela-presentacion-06.webp',title:'Moodboard · Zoom a la estética'},{src:'assets/Adela/adela-presentacion-07.webp',title:'Moodboard · Zoom a la estética'},{src:'assets/Adela/adela-presentacion-08.webp',title:'Boceto digital · Portada'},{src:'assets/Adela/adela-presentacion-09.webp',title:'Visualizador'},{src:'assets/Adela/adela-presentacion-10.webp',title:'Visualizador · Recursos gráficos'},{src:'assets/Adela/adela-presentacion-11.webp',title:'Lyrics'},{src:'assets/Adela/adela-presentacion-12.webp',title:'Cierre'}],url:'https://editor.p5js.org/ruthemirprzs/full/FCM6pxEA4',urlLabel:'ABRIR VISUALIZADOR INTERACTIVO'},
  {id:'ruc',name:'RUC',category:'identidad',label:'Identidad personal · Branding',year:'Proyecto académico',cover:'assets/Ruc/ruc-portada.webp',summary:'Marca personal construida a partir de mi propia personalidad: una identidad visual fuerte que equilibra seguridad, feminidad y peligro.',brief:'Usar mi personalidad como punto de partida para crear una marca personal. Elegí RUC como nombre porque es la forma en que la mayoría de la gente escribe mi nombre en vez de ponerlo completo; ya era parte de mí, así que era perfecto.',process:'Al tratarse de una marca personal, el proceso comenzó con una investigación sobre mi personalidad y mis gustos: la música, las series y los referentes artísticos y de diseño que me representan. De ahí nacieron los conceptos de la marca (sensualidad, seguridad, feminidad, fuerza y peligro) y la mirada felina como símbolo. Tras mucha prueba y error llegué a una identidad fuerte, segura, femenina y peligrosa a la vez. Además, realicé la producción fotográfica: tomé las fotografías a partir de referentes visuales y luego las retoqué.',tools:'Adobe After Effects: animación y montaje del video de presentación · Adobe Photoshop: retoque y edición de las fotografías propias · Adobe Illustrator: construcción del logotipo y composición final del afiche',gallery:[{type:'video',src:'assets/Ruc/ruc-video-final.mp4',title:'Animación y presentación RUC'},{type:'image',src:'assets/Ruc/ruc-foto-editada.webp',alt:'Fotografía editada del proyecto RUC',wide:true}],stepsTitle:'Bitácora de proceso de la marca RUC',stepsIntro:'Registro paso a paso de cómo se construyó la identidad de RUC: desde los conceptos y el nombre, pasando por la paleta, la tipografía y los referentes, hasta las pruebas del logotipo y la pieza final.',steps:[{src:'assets/Ruc/ruc-bitacora-01.webp',title:'Logotipo',text:'Propuesta final del logotipo RUC con el símbolo de la mirada felina.'},{src:'assets/Ruc/ruc-bitacora-02.webp',title:'Conceptos, nombre y símbolo',text:'Sensualidad, seguridad, feminidad, fuerza y peligro como base; la mirada de felino como sello.'},{src:'assets/Ruc/ruc-bitacora-03.webp',title:'Paleta y tipografías',text:'Exploración de color y pruebas con Montserrat, Strelka, Helvetica, Futura y Sloop Script.'},{src:'assets/Ruc/ruc-bitacora-04.webp',title:'Referentes visuales',text:'Moodboard de referentes gráficos.'},{src:'assets/Ruc/ruc-bitacora-05.webp',title:'Exploración del logotipo',text:'Variaciones del logotipo y pruebas sobre distintos fondos y texturas.'},{src:'assets/Ruc/ruc-bitacora-06.webp',title:'Universo visual',text:'Collage de elementos que construyen la identidad.'},{src:'assets/Ruc/ruc-bitacora-07.webp',title:'Pieza final',text:'Aplicación vertical de la identidad.'},{src:'assets/Ruc/ruc-bitacora-08.webp',title:'Referencias fotográficas',text:'Moodboard fotográfico en rojo y negro.'}]},
  {id:'revista',name:'REVISTA EDITORIAL',category:'editorial',label:'Diseño editorial · Maquetación',year:'Proyecto personal',cover:'assets/revista-cover.webp',summary:'Revista personal de estética minimalista, diseñada a partir de la historia de una persona.',brief:'Salir de mi propio estilo de diseño para trabajar desde algo más minimalista y limpio.',processTitle:'LA EXPERIENCIA',process:'La revista gira en torno a una persona, así que el punto de partida fue investigarla: su historia, sus lugares y la gente que la rodea. Con eso definí una línea visual sobria, con espacios en blanco, fotografías protagonistas y una tipografía delicada, para que el contenido personal hablara por sí solo. Fue un ejercicio de contención: diseñar menos para que cada página respirara.',tools:'Adobe InDesign · Adobe Photoshop',gallery:[],stepsEyebrow:'PÁGINAS',stepsTitle:'La revista completa',stepsIntro:'Todos los pliegos de la publicación, de la portada a la contraportada.',steps:[{src:'assets/Revista/revista-pag-01.webp',title:'Pliego 01 · Portada'},{src:'assets/Revista/revista-pag-02.webp',title:'Pliego 02'},{src:'assets/Revista/revista-pag-03.webp',title:'Pliego 03'},{src:'assets/Revista/revista-pag-04.webp',title:'Pliego 04'},{src:'assets/Revista/revista-pag-05.webp',title:'Pliego 05'},{src:'assets/Revista/revista-pag-06.webp',title:'Pliego 06'},{src:'assets/Revista/revista-pag-07.webp',title:'Pliego 07'},{src:'assets/Revista/revista-pag-08.webp',title:'Pliego 08'},{src:'assets/Revista/revista-pag-09.webp',title:'Pliego 09'},{src:'assets/Revista/revista-pag-10.webp',title:'Pliego 10'}]},
  {id:'publicidad',name:'KEY VISUAL',category:'publicidad',label:'Publicidad · Key visual',year:'Proyecto académico',cover:'assets/Key%20visual/jean%20basquiat%20despues.webp',summary:'Campaña publicitaria de lentes protagonizada por Jean-Michel Basquiat, reinterpretada desde el expresionismo y el pop art.',brief:'Elegir a un artista reconocido como rostro de una campaña publicitaria de lentes y llevar su imagen al lenguaje visual del expresionismo y el pop art. El reto era lograr una pieza con identidad artística propia sin que perdiera su función publicitaria: el producto y el mensaje debían seguir leyéndose con claridad.',process:'Elegí a Jean-Michel Basquiat como protagonista de la campaña. A partir de una fotografía original, intervine la imagen en Photoshop combinando trazos gestuales, texturas y la intensidad emocional del expresionismo con los colores planos, el alto contraste y la estética gráfica del pop art. El resultado se muestra como un antes y después: la fotografía de partida y el key visual final.',tools:'Adobe Photoshop: intervención de la fotografía y composición del key visual',gallery:[{type:'image',src:'assets/Key%20visual/jean-michel-basquiat.antes.jpg',alt:'Fotografía original de Jean-Michel Basquiat',caption:'Antes · Fotografía original'},{type:'image',src:'assets/Key%20visual/jean%20basquiat%20despues.webp',alt:'Key visual final de la campaña de lentes',caption:'Después · Key visual final'}]}
];
const grid=document.getElementById('project-grid');
const dialog=document.getElementById('project-dialog');
const content=document.getElementById('detail-content');
const counter=document.getElementById('detail-counter');
let currentIndex=0;
const safe=t=>String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderCards(filter='todos'){
  const list=projects.map((p,i)=>({...p,index:i})).filter(p=>filter==='todos'||p.category===filter);
  grid.innerHTML=list.map(p=>`<button class="project-card" type="button" data-index="${p.index}" aria-label="Ver proyecto ${safe(p.name)}"><div class="project-image"><img src="${safe(p.cover)}" alt="Vista previa del proyecto ${safe(p.name)}" loading="lazy"><span class="project-arrow" aria-hidden="true">↗</span></div><div class="project-info"><div><h3>${safe(p.name)}</h3><p>${safe(p.label)}</p></div><span class="project-number">${String(p.index+1).padStart(2,'0')}</span></div></button>`).join('');
  grid.querySelectorAll('[data-index]').forEach(b=>b.addEventListener('click',()=>openProject(Number(b.dataset.index))));
  layoutMasonry(grid);
  grid.querySelectorAll('.project-card').forEach((card,i)=>{card.classList.add('reveal');card.style.setProperty('--delay',`${(i%2)*0.12}s`);observeReveal(card);});
}
function openProject(i){
 currentIndex=(i+projects.length)%projects.length;const p=projects[currentIndex];
 counter.textContent=`PROYECTO ${String(currentIndex+1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}`;
 const gallery=p.gallery.map(g=>g.type==='heading'?`<h3 class="gallery-heading">${safe(g.text)}</h3>`:g.type==='video'?`<div class="video-wrap wide"><video src="${safe(g.src)}" controls muted preload="metadata" playsinline aria-label="${safe(g.title)}"></video><button type="button" class="sound-btn" aria-label="Activar sonido">ACTIVAR SONIDO</button></div>`:(g.caption?`<figure class="gallery-fig ${p.gallery.length===1||g.wide?'wide':''}"><img src="${safe(g.src)}" alt="${safe(g.alt)}" loading="lazy"><figcaption>${safe(g.caption)}</figcaption></figure>`:`<img class="${p.gallery.length===1||g.wide?'wide':''}${g.transparent?' no-bg':''}" src="${safe(g.src)}" alt="${safe(g.alt)}" loading="lazy">`)).join('');
 content.innerHTML=`<p class="detail-sub">${safe(p.label)} · ${safe(p.year)}</p><h2 id="detail-title" class="detail-title">${safe(p.name)}</h2><p class="detail-sub">${safe(p.summary)}</p><img class="detail-hero" src="${safe(p.cover)}" alt="Imagen principal de ${safe(p.name)}"><div class="detail-grid"><div class="detail-meta"><strong>CATEGORÍA</strong>${safe(p.label)}<br><strong>TIPO</strong>${safe(p.year)}<br><strong>HERRAMIENTAS</strong>${safe(p.tools).split(' · ').map(t=>{const k=t.indexOf(':');return k>0?`<span class="tool"><b>${t.slice(0,k)}</b>${t.slice(k+1)}</span>`:`<span class="tool">${t}</span>`;}).join('<br>')}</div><div class="detail-text">${p.brief?`<h3>${safe(p.briefTitle||'EL DESAFÍO')}</h3><p>${safe(p.brief)}</p>`:''}${p.process?`<h3>${safe(p.processTitle||'DESARROLLO')}</h3><p>${safe(p.process)}</p>`:''}${p.note?`<p class="detail-note">${safe(p.note)}</p>`:''}</div></div>${p.url?`<div class="detail-cta"><a class="detail-link" target="_blank" rel="noopener noreferrer" href="${safe(p.url)}">${safe(p.urlLabel||'VER PROYECTO')} ↗</a></div>`:''}<div class="detail-gallery">${gallery}</div>${p.steps?renderSteps(p.stepsEyebrow||'BITÁCORA DE PROCESO',p.stepsTitle||'Bitácora de proceso',p.stepsIntro,p.steps,true):''}${p.extra?renderSteps('PROCESO',p.extra.title,p.extra.intro,p.extra.items,false):''}`;
 if(!dialog.open)dialog.showModal();dialog.scrollTop=0;
 content.querySelectorAll('video').forEach(v=>videoObserver?videoObserver.observe(v):null);
 content.querySelectorAll('.steps-grid').forEach(layoutMasonry);
 /* botón de sonido: los navegadores solo permiten autoplay en silencio */
 content.querySelectorAll('.video-wrap').forEach(w=>{
   const v=w.querySelector('video'),b=w.querySelector('.sound-btn');
   const sync=()=>b.classList.toggle('is-hidden',!v.muted);
   b.addEventListener('click',()=>{v.muted=false;v.volume=1;const pr=v.play();if(pr)pr.catch(()=>{});sync();});
   v.addEventListener('volumechange',sync);
 });
}
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>{b.classList.remove('is-active');b.setAttribute('aria-pressed','false')});button.classList.add('is-active');button.setAttribute('aria-pressed','true');renderCards(button.dataset.filter)}));
document.querySelector('.close-detail').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.getElementById('previous-project').addEventListener('click',()=>openProject(currentIndex-1));
document.getElementById('next-project').addEventListener('click',()=>openProject(currentIndex+1));
dialog.addEventListener('close',()=>dialog.querySelectorAll('video').forEach(v=>v.pause()));
const menuButton=document.querySelector('.menu-toggle');const nav=document.getElementById('nav');menuButton.addEventListener('click',()=>{const expanded=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));

/* =========================================================
   ANIMACIONES
   ========================================================= */
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Secciones en mosaico dentro de la ficha (bitácora, manual, fotogramas) */
function renderSteps(eyebrow,title,intro,items,numbered){
  return `<section class="steps" aria-label="${safe(title)}"><p class="eyebrow magenta">${safe(eyebrow)}</p><h3 class="steps-title">${safe(title)}</h3>${intro?`<p class="steps-intro">${safe(intro)}</p>`:''}<div class="steps-grid${numbered?'':' no-feature'}">${items.map((st,n)=>`<figure class="step">${numbered?`<span class="step-num">${String(n+1).padStart(2,'0')}</span>`:''}<img src="${safe(st.src)}" alt="${safe(st.title)}" loading="lazy"><figcaption><strong>${safe(st.title)}</strong>${st.text?`<span>${safe(st.text)}</span>`:''}</figcaption></figure>`).join('')}</div></section>`;
}

/* MOSAICO: cada tarjeta ocupa tantas filas de 8px como mide, así no quedan huecos
   y el orden se lee de izquierda a derecha (1, 2 / 3, 4 / ...) */
function layoutMasonry(container){
  const ROW=8, GAP=container.classList.contains('steps-grid')?30:42;
  const isProjects=container.classList.contains('project-grid');
  const fit=()=>{
    const cols=getComputedStyle(container).gridTemplateColumns.split(' ').length;
    const heights=new Array(cols).fill(1); // fila donde termina cada columna
    [...container.children].forEach(item=>{
      if(item.hidden)return;
      item.style.gridRowEnd='auto';
      const span=Math.ceil((item.getBoundingClientRect().height+GAP)/ROW);
      item.style.gridRowEnd=`span ${span}`;
      if(isProjects&&cols>1){
        /* cada proyecto va a la columna más corta: así no quedan huecos en blanco */
        let c=0; for(let k=1;k<cols;k++) if(heights[k]<heights[c]) c=k;
        item.style.gridColumn=String(c+1);
        item.style.gridRowStart=String(heights[c]);
        heights[c]+=span;
      }else if(isProjects){
        item.style.gridColumn=''; item.style.gridRowStart='';
      }
    });
  };
  fit();
  container.querySelectorAll('img').forEach(img=>{if(!img.complete)img.addEventListener('load',fit,{once:true});});
  container._fit=fit;
}
window.addEventListener('resize',()=>document.querySelectorAll('.project-grid,.steps-grid').forEach(c=>c._fit&&c._fit()));

/* 0. Los videos se reproducen solos al aparecer en pantalla y se pausan al salir.
   Parten en silencio (los navegadores no permiten autoplay con sonido);
   se puede activar el sonido desde los controles del video. */
const videoObserver='IntersectionObserver' in window
  ?new IntersectionObserver(entries=>entries.forEach(e=>{
      const v=e.target;
      if(e.isIntersecting&&e.intersectionRatio>=.5){const pr=v.play();if(pr)pr.catch(()=>{});}
      else v.pause();
    }),{threshold:[0,.5]})
  :null;

/* 1. Aparecer al hacer scroll */
const revealObserver='IntersectionObserver' in window&&!reduceMotion
  ?new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');revealObserver.unobserve(e.target);}}),{threshold:.12,rootMargin:'0px 0px -8% 0px'})
  :null;
function observeReveal(el){revealObserver?revealObserver.observe(el):el.classList.add('is-visible');}
document.querySelectorAll('.reveal').forEach(observeReveal);

/* 2. El nombre de la portada aparece letra por letra */
(function splitHeroTitle(){
  const title=document.getElementById('hero-title');
  if(!title||reduceMotion)return;
  title.setAttribute('aria-label','Ruth Perez');
  let i=0;
  const split=node=>{
    [...node.childNodes].forEach(child=>{
      if(child.nodeType===3){
        const frag=document.createDocumentFragment();
        [...child.textContent].forEach(letter=>{
          if(!letter.trim()){frag.append(letter);return;}
          const span=document.createElement('span');
          span.className='char';span.setAttribute('aria-hidden','true');
          span.style.setProperty('--i',i++);span.textContent=letter;frag.append(span);
        });
        child.replaceWith(frag);
      }else if(child.nodeType===1&&!child.classList.contains('hero-star')){split(child);}
    });
  };
  split(title);
})();

/* 3. El header se esconde al bajar y vuelve al subir */
(function smartHeader(){
  const header=document.querySelector('.header');let last=window.scrollY;
  window.addEventListener('scroll',()=>{
    const y=window.scrollY;
    header.classList.toggle('is-hidden',y>last&&y>200&&!nav.classList.contains('open'));
    last=y;
  },{passive:true});
})();

/* 4. Cursor magenta (solo en computador) */
(function customCursor(){
  const cursor=document.querySelector('.cursor');
  if(!cursor||!window.matchMedia('(hover: hover) and (pointer: fine)').matches||reduceMotion)return;
  let x=-100,y=-100,cx=x,cy=y;
  window.addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;
    const card=e.target.closest('.project-card');
    const link=e.target.closest('a,button');
    cursor.classList.toggle('is-card',!!card);
    cursor.classList.toggle('is-link',!card&&!!link);
    cursor.classList.toggle('is-hidden',dialog.open);
  });
  document.addEventListener('mouseleave',()=>cursor.classList.add('is-hidden'));
  document.addEventListener('mouseenter',()=>cursor.classList.remove('is-hidden'));
  (function loop(){cx+=(x-cx)*.18;cy+=(y-cy)*.18;cursor.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(loop);})();
})();

renderCards();
