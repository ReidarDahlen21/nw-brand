import React from 'react';
const sizes={sm:{padding:'8px 16px',fontSize:'var(--text-body-s)'},md:{padding:'12px 22px',fontSize:'var(--text-body-m)'},lg:{padding:'16px 28px',fontSize:'var(--text-body-l)'}};
export function Button({variant='primary',size='md',disabled=false,children,onClick,style,...rest}){
const base={fontFamily:'var(--font-body)',fontWeight:600,borderRadius:'var(--radius-pill)',border:'1px solid transparent',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,transition:'background-color var(--duration-base) var(--ease-standard),color var(--duration-base) var(--ease-standard),border-color var(--duration-base) var(--ease-standard)',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'8px',...sizes[size]};
const variants={
primary:{background:'var(--color-champagne)',color:'var(--color-navy)'},
'primary-hover':{background:'var(--accent-hover)'},
secondary:{background:'transparent',color:'var(--color-navy)',borderColor:'var(--border-on-light)'},
'secondary-hover':{background:'var(--hueso-shade-10)'},
ghost:{background:'transparent',color:'var(--color-navy)'},
'ghost-hover':{background:'var(--hueso-shade-10)'},
'on-dark':{background:'transparent',color:'var(--color-hueso)',borderColor:'var(--border-on-dark)'},
'on-dark-hover':{background:'var(--navy-tint-10)'}
};
const v=variants[variant]||variants.primary;
const hover=variants[variant+'-hover'];
return React.createElement('button',{disabled,onClick,style:{...base,...v,...style},onMouseEnter:e=>{if(!disabled&&hover)Object.assign(e.currentTarget.style,hover)},onMouseLeave:e=>{if(!disabled)Object.assign(e.currentTarget.style,v)},...rest},children);
}
