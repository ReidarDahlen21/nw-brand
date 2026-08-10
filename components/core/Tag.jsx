import React from 'react';
import { Icon } from './Icon.jsx';
export function Tag({children,onRemove,style}){
return React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 12px',borderRadius:'var(--radius-s)',background:'var(--hueso-shade-10)',border:'1px solid var(--border-on-light)',color:'var(--color-navy)',fontFamily:'var(--font-body)',fontSize:'var(--text-body-s)',...style}},
children,
onRemove&&React.createElement('span',{onClick:onRemove,style:{cursor:'pointer',color:'var(--color-slate)',display:'inline-flex'}},React.createElement(Icon,{name:'x',size:14}))
);
}
