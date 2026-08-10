import React from 'react';
import { Icon } from '../core/Icon.jsx';
const tones={success:'var(--color-success)',danger:'var(--color-danger)',neutral:'var(--color-navy)'};
export function Toast({tone='neutral',children,onClose}){
return React.createElement('div',{style:{display:'flex',alignItems:'center',gap:12,background:'var(--color-navy)',color:'var(--color-hueso)',borderRadius:'var(--radius-m)',padding:'14px 18px',boxShadow:'var(--shadow-card-on-dark)',borderLeft:'3px solid '+(tones[tone]||tones.neutral),fontFamily:'var(--font-body)',fontSize:'var(--text-body-s)',maxWidth:360}},
React.createElement('span',{style:{flex:1}},children),
onClose&&React.createElement('span',{onClick:onClose,style:{cursor:'pointer',color:'var(--slate-tint-40)',display:'inline-flex'}},React.createElement(Icon,{name:'x',size:16}))
);
}
