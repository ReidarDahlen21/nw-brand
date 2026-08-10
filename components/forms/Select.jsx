import React from 'react';
export function Select({label,options=[],value,onChange,style}){
const [focus,setFocus]=React.useState(false);
return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-body)',...style}},
label&&React.createElement('label',{style:{fontSize:'var(--text-body-s)',fontWeight:600,color:'var(--color-navy)'}},label),
React.createElement('select',{value,onChange,onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),style:{fontFamily:'var(--font-body)',fontSize:'var(--text-body-m)',padding:'12px 14px',borderRadius:'var(--radius-m)',border:'1px solid '+(focus?'var(--color-champagne)':'var(--border-on-light)'),background:'var(--color-hueso)',color:'var(--color-navy)',outline:'none',boxShadow:focus?'var(--shadow-focus)':'none'}},
options.map((o,i)=>React.createElement('option',{key:i,value:o.value??o},o.label??o))
)
);
}
