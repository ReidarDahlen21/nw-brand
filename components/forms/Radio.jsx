import React from 'react';
// Un <input type="radio"> real con appearance:none: Tab entra al grupo, las
// flechas se mueven dentro (con el mismo `name`), disabled y aria-label
// funcionan como en el nativo. El punto es un <span> encima del input.
export function Radio({label,checked,onChange,disabled=false,style,onFocus,onBlur,...rest}){
const [hover,setHover]=React.useState(false);
const [focus,setFocus]=React.useState(false);
const dot=React.createElement('span',{style:{position:'relative',display:'inline-grid',flex:'none',width:18,height:18,opacity:disabled?.45:1,...(label?null:style)}},
React.createElement('input',{type:'radio',checked,onChange,disabled,
onFocus:e=>{setFocus(e.currentTarget.matches(':focus-visible'));onFocus&&onFocus(e)},
onBlur:e=>{setFocus(false);onBlur&&onBlur(e)},
onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),
style:{appearance:'none',WebkitAppearance:'none',margin:0,width:18,height:18,borderRadius:'50%',
border:'1.5px solid '+(checked?'var(--color-champagne)':hover&&!disabled?'var(--color-navy)':'color-mix(in oklab,var(--color-navy) 38%,transparent)'),
background:'var(--color-hueso)',boxShadow:focus?'var(--shadow-focus)':'none',outline:'none',
cursor:disabled?'not-allowed':'pointer',transition:'border-color var(--duration-fast)'},...rest}),
checked&&React.createElement('span',{'aria-hidden':true,style:{position:'absolute',top:'50%',left:'50%',width:8,height:8,borderRadius:'50%',background:'var(--color-champagne)',transform:'translate(-50%,-50%)',pointerEvents:'none'}})
);
if(!label)return dot;
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',fontFamily:'var(--font-body)',fontSize:'var(--text-body-m)',color:'var(--color-navy)',...style}},dot,label);
}
