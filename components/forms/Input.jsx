import React from 'react';
import { fieldSizes } from './fieldSizes.js';
export function Input({label,placeholder,type='text',error,helpText,value,onChange,style,size='md'}){
const [focus,setFocus]=React.useState(false);
const s=fieldSizes[size];
return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-body)',...style}},
label&&React.createElement('label',{style:{fontWeight:600,color:'var(--color-navy)',...s.label}},label),
React.createElement('input',{type,placeholder,value,onChange,onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),style:{fontFamily:'var(--font-body)',border:'1px solid '+(error?'var(--color-danger)':focus?'var(--color-champagne)':'var(--border-on-light)'),background:'var(--color-hueso)',color:'var(--color-navy)',outline:'none',boxShadow:focus?'var(--shadow-focus)':'none',transition:'border-color var(--duration-fast),box-shadow var(--duration-fast)',...s.control}}),
(error||helpText)&&React.createElement('span',{style:{color:error?'var(--color-danger)':'var(--color-slate)',...s.caption}},error||helpText)
);
}
