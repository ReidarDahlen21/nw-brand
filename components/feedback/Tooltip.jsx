import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Tooltip({label,children}){
const [show,setShow]=React.useState(false);
return React.createElement('span',{style:{position:'relative',display:'inline-block'},onMouseEnter:()=>setShow(true),onMouseLeave:()=>setShow(false)},
children,
show&&React.createElement('span',{style:{position:'absolute',bottom:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)',background:'var(--color-navy)',color:'var(--color-hueso)',padding:'6px 10px',borderRadius:'var(--radius-s)',fontFamily:'var(--font-body)',fontSize:'var(--text-caption)',whiteSpace:'nowrap',boxShadow:'var(--shadow-card-on-dark)',zIndex:50}},label)
);
}
