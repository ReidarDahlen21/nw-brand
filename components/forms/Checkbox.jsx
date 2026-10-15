import React from 'react';
// Un <input type="checkbox"> real con appearance:none: Tab, espacio, disabled,
// aria-label y el lector de pantalla funcionan como en el nativo. La tilde es un
// SVG encima del input (no un background-image) para que tome var(--color-navy).
export function Checkbox({label,checked,onChange,disabled=false,style,onFocus,onBlur,...rest}){
const [hover,setHover]=React.useState(false);
const [focus,setFocus]=React.useState(false);
const box=React.createElement('span',{style:{position:'relative',display:'inline-grid',flex:'none',width:18,height:18,opacity:disabled?.45:1,...(label?null:style)}},
React.createElement('input',{type:'checkbox',checked,onChange,disabled,
onFocus:e=>{setFocus(e.currentTarget.matches(':focus-visible'));onFocus&&onFocus(e)},
onBlur:e=>{setFocus(false);onBlur&&onBlur(e)},
onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),
style:{appearance:'none',WebkitAppearance:'none',margin:0,width:18,height:18,borderRadius:'var(--radius-s)',
border:'1.5px solid '+(checked?'var(--color-champagne)':hover&&!disabled?'var(--color-navy)':'color-mix(in oklab,var(--color-navy) 38%,transparent)'),
background:checked?'var(--color-champagne)':'var(--color-hueso)',boxShadow:focus?'var(--shadow-focus)':'none',outline:'none',
cursor:disabled?'not-allowed':'pointer',transition:'background-color var(--duration-fast),border-color var(--duration-fast)'},...rest}),
checked&&React.createElement('svg',{width:11,height:9,viewBox:'0 0 12 10','aria-hidden':true,style:{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',pointerEvents:'none'}},React.createElement('path',{d:'M1 5L4.5 8.5L11 1.5',stroke:'var(--color-navy)',strokeWidth:2,fill:'none',strokeLinecap:'round',strokeLinejoin:'round'}))
);
if(!label)return box;
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',fontFamily:'var(--font-body)',fontSize:'var(--text-body-m)',color:'var(--color-navy)',...style}},box,label);
}
