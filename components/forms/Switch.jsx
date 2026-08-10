import React from 'react';
export function Switch({checked,onChange,style}){
return React.createElement('span',{onClick:()=>onChange&&onChange({target:{checked:!checked}}),style:{width:44,height:26,borderRadius:'var(--radius-pill)',background:checked?'var(--color-champagne)':'var(--slate-tint-40)',display:'inline-flex',alignItems:'center',padding:3,cursor:'pointer',transition:'background-color var(--duration-base) var(--ease-standard)',...style}},
React.createElement('span',{style:{width:20,height:20,borderRadius:'50%',background:'var(--color-navy)',transform:checked?'translateX(18px)':'translateX(0)',transition:'transform var(--duration-base) var(--ease-standard)'}})
);
}
