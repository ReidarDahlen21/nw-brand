import React from 'react';
export function Card({onDark=false,children,style}){
return React.createElement('div',{style:{background:onDark?'var(--surface-card-on-dark)':'var(--color-hueso)',border:'1px solid '+(onDark?'var(--border-on-dark)':'var(--border-on-light)'),borderRadius:'var(--radius-l)',padding:'var(--space-6)',boxShadow:onDark?'var(--shadow-card-on-dark)':'var(--shadow-card-on-light)',color:onDark?'var(--color-hueso)':'var(--color-navy)',...style}},children);
}
