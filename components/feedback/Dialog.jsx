import React from 'react';
// `sm` es la densidad de aplicación, armada con tokens de marca: un componente
// no puede leer `--app-*` (CLAUDE.md, "La capa de aplicación"). `md` es el
// tamaño de marca.
const sizes={
sm:{box:{padding:'var(--space-6)'},title:{fontFamily:'var(--font-body)',fontSize:'var(--text-body-l)',fontWeight:600,margin:'0 0 var(--space-3)'},body:{fontSize:'var(--text-body-s)',lineHeight:'var(--lh-normal)'},footer:{gap:'var(--space-2)',marginTop:'var(--space-6)'}},
md:{box:{padding:'var(--space-8)'},title:{fontFamily:'var(--font-accent)',fontSize:'var(--text-heading-l)',margin:'0 0 12px'},body:{fontSize:'var(--text-body-m)',lineHeight:'var(--lh-relaxed)'},footer:{gap:12,marginTop:'var(--space-8)'}}
};
export function Dialog({open,title,children,onClose,footer,size='md'}){
if(!open)return null;
const s=sizes[size];
return React.createElement('div',{style:{position:'fixed',inset:0,background:'color-mix(in oklab,var(--color-navy) 55%,transparent)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:100,backdropFilter:'blur(3px)'},onClick:onClose},
React.createElement('div',{onClick:e=>e.stopPropagation(),style:{background:'var(--color-hueso)',borderRadius:'var(--radius-l)',maxWidth:440,width:'90%',boxShadow:'var(--shadow-card-on-light)',...s.box}},
title&&React.createElement('h3',{style:{color:'var(--color-navy)',...s.title}},title),
React.createElement('div',{style:{fontFamily:'var(--font-body)',color:'var(--color-slate)',...s.body}},children),
footer&&React.createElement('div',{style:{display:'flex',justifyContent:'flex-end',...s.footer}},footer)
)
);
}
