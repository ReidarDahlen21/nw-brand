import React from 'react';
export function Tabs({tabs=[],active,onChange,onDark=false}){
return React.createElement('div',{style:{display:'flex',gap:'var(--space-6)',borderBottom:'1px solid '+(onDark?'var(--border-on-dark)':'var(--border-on-light)')}},
tabs.map((t,i)=>React.createElement('button',{key:i,onClick:()=>onChange&&onChange(t),style:{background:'none',border:'none',cursor:'pointer',fontFamily:'var(--font-body)',fontSize:'var(--text-body-m)',fontWeight:600,padding:'12px 2px',color:active===t?(onDark?'var(--color-hueso)':'var(--color-navy)'):'var(--color-slate)',borderBottom:'2px solid '+(active===t?'var(--color-champagne)':'transparent'),marginBottom:-1}},t))
);
}
