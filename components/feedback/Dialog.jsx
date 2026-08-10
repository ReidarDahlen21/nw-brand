import React from 'react';
export function Dialog({open,title,children,onClose,footer}){
if(!open)return null;
return React.createElement('div',{style:{position:'fixed',inset:0,background:'color-mix(in oklab,var(--color-navy) 55%,transparent)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:100,backdropFilter:'blur(3px)'},onClick:onClose},
React.createElement('div',{onClick:e=>e.stopPropagation(),style:{background:'var(--color-hueso)',borderRadius:'var(--radius-l)',padding:'var(--space-8)',maxWidth:440,width:'90%',boxShadow:'var(--shadow-card-on-light)'}},
title&&React.createElement('h3',{style:{fontFamily:'var(--font-accent)',fontSize:'var(--text-heading-l)',color:'var(--color-navy)',margin:'0 0 12px'}},title),
React.createElement('div',{style:{fontFamily:'var(--font-body)',color:'var(--color-slate)',fontSize:'var(--text-body-m)',lineHeight:'var(--lh-relaxed)'}},children),
footer&&React.createElement('div',{style:{display:'flex',gap:12,justifyContent:'flex-end',marginTop:'var(--space-8)'}},footer)
)
);
}
