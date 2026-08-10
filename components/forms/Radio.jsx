import React from 'react';
export function Radio({label,checked,onChange,style}){
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,cursor:'pointer',fontFamily:'var(--font-body)',fontSize:'var(--text-body-m)',color:'var(--color-navy)',...style}},
React.createElement('span',{onClick:()=>onChange&&onChange({target:{checked:true}}),style:{width:20,height:20,borderRadius:'50%',border:'1px solid '+(checked?'var(--color-champagne)':'var(--border-on-light)'),display:'inline-flex',alignItems:'center',justifyContent:'center'}},
checked&&React.createElement('span',{style:{width:10,height:10,borderRadius:'50%',background:'var(--color-champagne)'}})
),
label
);
}
