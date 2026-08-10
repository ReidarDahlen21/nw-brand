import React from 'react';
const tones={success:{bg:'color-mix(in oklab,var(--color-success) 18%,var(--color-hueso))',fg:'var(--color-success)'},danger:{bg:'color-mix(in oklab,var(--color-danger) 18%,var(--color-hueso))',fg:'var(--color-danger)'},neutral:{bg:'var(--hueso-shade-10)',fg:'var(--color-slate)'},accent:{bg:'var(--champagne-tint-70)',fg:'var(--champagne-shade-15)'}};
export function Badge({tone='neutral',children,style}){
const t=tones[tone]||tones.neutral;
return React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:6,padding:'4px 12px',borderRadius:'var(--radius-pill)',background:t.bg,color:t.fg,fontFamily:'var(--font-body)',fontWeight:600,fontSize:'var(--text-caption)',letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',...style}},children);
}
