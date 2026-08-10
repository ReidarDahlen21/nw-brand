const {Icon}=window.NucleoWealthDesignSystem_3466ee;
export function Shell({active,onNav,children}){
const items=[{k:'dashboard',label:'Inicio',icon:'house'},{k:'portfolio',label:'Portafolio',icon:'chart-pie-slice'},{k:'chat',label:'Asesor',icon:'chat-circle-text'}];
return (
<div style={{display:'flex',minHeight:'100vh',background:'var(--color-hueso)',fontFamily:'var(--font-body)'}}>
<div style={{width:220,background:'var(--color-navy)',color:'var(--color-hueso)',display:'flex',flexDirection:'column',padding:'28px 20px',gap:32,flexShrink:0}}>
<img src="../../assets/logos/nucleo-horizontal-dark.svg" style={{height:26,width:'auto'}}/>
<div style={{display:'flex',flexDirection:'column',gap:4}}>
{items.map(it=>(
<div key={it.k} onClick={()=>onNav(it.k)} style={{display:'flex',alignItems:'center',gap:12,padding:'11px 12px',borderRadius:10,cursor:'pointer',background:active===it.k?'var(--navy-tint-20)':'transparent',color:active===it.k?'var(--color-hueso)':'var(--slate-tint-40)',fontWeight:600,fontSize:15}}>
<span style={{width:18,display:'flex',justifyContent:'center'}}><Icon name={it.icon} size={18}/></span>{it.label}
</div>
))}
</div>
<div style={{marginTop:'auto',display:'flex',alignItems:'center',gap:10,fontSize:13,color:'var(--slate-tint-40)'}}>
<div style={{width:32,height:32,borderRadius:'50%',background:'var(--color-champagne)',color:'var(--color-navy)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>MF</div>
María Fernández
</div>
</div>
<div style={{flex:1,minWidth:0}}>{children}</div>
</div>
);
}
