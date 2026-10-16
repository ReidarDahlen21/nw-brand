import React from 'react';
// Un <input type="checkbox" role="switch"> real con appearance:none: Tab,
// espacio, disabled y aria-label funcionan como en el nativo y el lector de
// pantalla lo anuncia como interruptor. El input es la pista; la perilla es un
// <span> encima.
export function Switch({label,checked,onChange,disabled=false,style,onFocus,onBlur,...rest}){
const [focus,setFocus]=React.useState(false);
const track=React.createElement('span',{style:{position:'relative',display:'inline-grid',flex:'none',width:44,height:26,opacity:disabled?.45:1,...(label?null:style)}},
React.createElement('input',{type:'checkbox',role:'switch',checked,onChange,disabled,
onFocus:e=>{setFocus(e.currentTarget.matches(':focus-visible'));onFocus&&onFocus(e)},
onBlur:e=>{setFocus(false);onBlur&&onBlur(e)},
style:{appearance:'none',WebkitAppearance:'none',margin:0,width:44,height:26,borderRadius:'var(--radius-pill)',border:'none',
background:checked?'var(--color-champagne)':'var(--slate-tint-40)',boxShadow:focus?'var(--shadow-focus)':'none',outline:'none',
cursor:disabled?'not-allowed':'pointer',transition:'background-color var(--duration-base) var(--ease-standard)'},...rest}),
React.createElement('span',{'aria-hidden':true,style:{position:'absolute',top:3,left:3,width:20,height:20,borderRadius:'50%',background:'var(--color-navy)',transform:checked?'translateX(18px)':'translateX(0)',transition:'transform var(--duration-base) var(--ease-standard)',pointerEvents:'none'}})
);
if(!label)return track;
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',fontFamily:'var(--font-body)',fontSize:'var(--text-body-m)',color:'var(--color-navy)',...style}},track,label);
}
