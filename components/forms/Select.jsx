import React from 'react';
import { fieldSizes } from './fieldSizes.js';
export function Select({label,options=[],value,onChange,style,size='md'}){
const [focus,setFocus]=React.useState(false);
const s=fieldSizes[size];
return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-body)',...style}},
label&&React.createElement('label',{style:{fontWeight:600,color:'var(--color-navy)',...s.label}},label),
React.createElement('select',{value,onChange,onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),style:{fontFamily:'var(--font-body)',border:'1px solid '+(focus?'var(--color-champagne)':'var(--border-on-light)'),background:'var(--color-hueso)',color:'var(--color-navy)',outline:'none',boxShadow:focus?'var(--shadow-focus)':'none',...s.control}},
options.map((o,i)=>React.createElement('option',{key:i,value:o.value??o},o.label??o))
)
);
}
