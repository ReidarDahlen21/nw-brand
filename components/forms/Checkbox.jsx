import React from 'react';
export function Checkbox({label,checked,onChange,style}){
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,cursor:'pointer',fontFamily:'var(--font-body)',fontSize:'var(--text-body-m)',color:'var(--color-navy)',...style}},
React.createElement('span',{onClick:()=>onChange&&onChange({target:{checked:!checked}}),style:{width:20,height:20,borderRadius:6,border:'1px solid '+(checked?'var(--color-champagne)':'var(--border-on-light)'),background:checked?'var(--color-champagne)':'transparent',display:'inline-flex',alignItems:'center',justifyContent:'center',transition:'background-color var(--duration-fast)'}},
checked&&React.createElement('svg',{width:12,height:10,viewBox:'0 0 12 10'},React.createElement('path',{d:'M1 5L4.5 8.5L11 1.5',stroke:'var(--color-navy)',strokeWidth:2,fill:'none',strokeLinecap:'round',strokeLinejoin:'round'}))
),
label
);
}
