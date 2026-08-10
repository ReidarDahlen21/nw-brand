import React from 'react';
export function IconButton({children,onDark=false,active=false,size=40,style,onClick,...rest}){
const base={width:size,height:size,borderRadius:'50%',display:'inline-flex',alignItems:'center',justifyContent:'center',border:'1px solid '+(onDark?'var(--border-on-dark)':'var(--border-on-light)'),background:active?(onDark?'var(--navy-tint-20)':'var(--hueso-shade-20)'):'transparent',color:onDark?'var(--color-hueso)':'var(--color-navy)',cursor:'pointer',transition:'background-color var(--duration-fast) var(--ease-standard)'};
return React.createElement('button',{onClick,style:{...base,...style},onMouseEnter:e=>{e.currentTarget.style.background=onDark?'var(--navy-tint-20)':'var(--hueso-shade-20)'},onMouseLeave:e=>{e.currentTarget.style.background=active?(onDark?'var(--navy-tint-20)':'var(--hueso-shade-20)'):'transparent'},...rest},children);
}
