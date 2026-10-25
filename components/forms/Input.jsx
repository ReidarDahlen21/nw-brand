import React from 'react';
// `sm` es el control de aplicación (el de `--app-control-h`): lee los tokens
// de `tokens/app.css`, así que sólo va donde esa capa está importada.
const sizes={
sm:{label:{fontSize:'var(--app-text-s)'},control:{fontSize:'var(--app-text-s)',height:'var(--app-control-h)',padding:'0 var(--space-3)',borderRadius:'var(--app-radius-s)'},caption:{fontSize:'var(--app-text-xs)'}},
md:{label:{fontSize:'var(--text-body-s)'},control:{fontSize:'var(--text-body-m)',padding:'12px 14px',borderRadius:'var(--radius-m)'},caption:{fontSize:'var(--text-caption)'}}
};
export function Input({label,placeholder,type='text',error,helpText,value,onChange,style,size='md'}){
const [focus,setFocus]=React.useState(false);
const s=sizes[size];
return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-body)',...style}},
label&&React.createElement('label',{style:{fontWeight:600,color:'var(--color-navy)',...s.label}},label),
React.createElement('input',{type,placeholder,value,onChange,onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),style:{fontFamily:'var(--font-body)',border:'1px solid '+(error?'var(--color-danger)':focus?'var(--color-champagne)':'var(--border-on-light)'),background:'var(--color-hueso)',color:'var(--color-navy)',outline:'none',boxShadow:focus?'var(--shadow-focus)':'none',transition:'border-color var(--duration-fast),box-shadow var(--duration-fast)',...s.control}}),
(error||helpText)&&React.createElement('span',{style:{color:error?'var(--color-danger)':'var(--color-slate)',...s.caption}},error||helpText)
);
}
