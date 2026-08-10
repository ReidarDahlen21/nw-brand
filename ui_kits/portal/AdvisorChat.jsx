const {Button,Icon}=window.NucleoWealthDesignSystem_3466ee;
const msgs=[
{from:'them',text:'Hola María, revisé tu portafolio — todo en línea con tu perfil moderado.'},
{from:'me',text:'Genial, ¿conviene aumentar la posición en renta fija este mes?'},
{from:'them',text:'Con las tasas actuales, sí. Te propongo pasar del 38% al 42%. ¿Lo revisamos el jueves?'}
];
export function AdvisorChat(){
return (
<div style={{padding:'40px 48px',maxWidth:640,fontFamily:'var(--font-body)',display:'flex',flexDirection:'column',height:'calc(100vh - 80px)'}}>
<div style={{display:'flex',alignItems:'center',gap:12,marginBottom:24}}>
<div style={{width:40,height:40,borderRadius:'50%',background:'var(--color-champagne)',color:'var(--color-navy)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>JP</div>
<div>
<div style={{fontWeight:700,color:'var(--color-navy)'}}>Javier Paz</div>
<div style={{fontSize:12,color:'var(--color-success)'}}>● En línea</div>
</div>
</div>
<div style={{flex:1,display:'flex',flexDirection:'column',gap:12,overflowY:'auto'}}>
{msgs.map((m,i)=>(
<div key={i} style={{alignSelf:m.from==='me'?'flex-end':'flex-start',maxWidth:'75%',background:m.from==='me'?'var(--color-champagne)':'var(--color-hueso)',color:'var(--color-navy)',border:m.from==='me'?'none':'1px solid var(--border-on-light)',borderRadius:'var(--radius-m)',padding:'12px 16px',fontSize:14,lineHeight:'var(--lh-normal)'}}>{m.text}</div>
))}
</div>
<div style={{display:'flex',gap:10,marginTop:16}}>
<input placeholder="Escribí tu mensaje…" style={{flex:1,padding:'12px 16px',borderRadius:'var(--radius-pill)',border:'1px solid var(--border-on-light)',background:'var(--color-hueso)',fontFamily:'var(--font-body)',fontSize:14,outline:'none'}}/>
<Button style={{display:'inline-flex',alignItems:'center',gap:8}}><Icon name="paper-plane-tilt" size={16}/>Enviar</Button>
</div>
</div>
);
}
