import React from 'react';
export function Icon({name,size=18,style,...rest}){
return React.createElement('i',{className:'ph ph-'+name,style:{fontSize:size,lineHeight:1,display:'inline-block',...style},'aria-hidden':'true',...rest});
}
