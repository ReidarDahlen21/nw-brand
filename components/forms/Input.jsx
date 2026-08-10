import React from 'react';
export function Input({label,placeholder,type='text',error,helpText,value,onChange,style}){
const [focus,setFocus]=React.useState(false);
return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-body)',...style}},
label&&React.createElement('label',{style:{fontSize:'var(--text-body-s)',fontWeight:600,color:'var(--color-navy)'}},label),
React.createElement('input',{type,placeholder,value,onChange,onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),style:{fontFamily:'var(--font-body)',fontSize:'var(--text-body-m)',padding:'12px 14px',borderRadius:'var(--radius-m)',border:'1px solid '+(error?'var(--color-danger)':focus?'var(--color-champagne)':'var(--border-on-light)'),background:'var(--color-hueso)',color:'var(--color-navy)',outline:'none',boxShadow:focus?'var(--shadow-focus)':'none',transition:'border-color var(--duration-fast),box-shadow var(--duration-fast)'}}),
(error||helpText)&&React.createElement('span',{style:{fontSize:'var(--text-caption)',color:error?'var(--color-danger)':'var(--color-slate)'}},error||helpText)
);
}
