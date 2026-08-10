const {Card,Badge,Button,Tabs,Icon}=window.NucleoWealthDesignSystem_3466ee;
const holdings=[
{name:'Renta fija global',pct:38,ret:'+2.1%',tone:'success'},
{name:'Acciones EE.UU.',pct:27,ret:'+6.4%',tone:'success'},
{name:'Acciones LatAm',pct:15,ret:'-1.8%',tone:'danger'},
{name:'Bienes raíces',pct:12,ret:'+3.0%',tone:'success'},
{name:'Liquidez',pct:8,ret:'0.0%',tone:'neutral'}
];
export function Dashboard({tab,onTab}){
return (
<div style={{padding:'40px 48px',maxWidth:960,fontFamily:'var(--font-body)'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:32}}>
<div>
<div style={{fontSize:14,color:'var(--color-slate)'}}>Patrimonio total</div>
<div style={{fontSize:44,fontWeight:700,color:'var(--color-navy)',fontVariantNumeric:'tabular-nums',marginTop:4}}>$1.284.500</div>
<div style={{marginTop:8}}><Badge tone="success">+4.2% este trimestre</Badge></div>
</div>
<Button variant="primary">Solicitar diagnóstico</Button>
</div>
<Tabs tabs={['General','Portafolio','Movimientos']} active={tab} onChange={onTab} style={{marginBottom:24}}/>
<div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:20}}>
<Card>
<div style={{fontSize:14,fontWeight:700,color:'var(--color-navy)',marginBottom:16}}>Composición del portafolio</div>
<div style={{display:'flex',flexDirection:'column',gap:14}}>
{holdings.map(h=>(
<div key={h.name} style={{display:'flex',alignItems:'center',gap:12}}>
<div style={{width:120,fontSize:14,color:'var(--color-navy)'}}>{h.name}</div>
<div style={{flex:1,height:8,background:'var(--hueso-shade-10)',borderRadius:'var(--radius-pill)',overflow:'hidden'}}>
<div style={{width:h.pct+'%',height:'100%',background:'var(--color-champagne)'}}></div>
</div>
<div style={{width:36,fontSize:13,color:'var(--color-slate)',textAlign:'right'}}>{h.pct}%</div>
<Badge tone={h.tone}>{h.ret}</Badge>
</div>
))}
</div>
</Card>
<Card onDark>
<div style={{fontSize:14,fontWeight:700,marginBottom:8}}>Tu asesor</div>
<div style={{display:'flex',alignItems:'center',gap:12,marginTop:12}}>
<div style={{width:44,height:44,borderRadius:'50%',background:'var(--color-champagne)',color:'var(--color-navy)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>JP</div>
<div>
<div style={{fontWeight:600}}>Javier Paz</div>
<div style={{fontSize:13,color:'var(--slate-tint-40)'}}>Próxima revisión: 14 sep</div>
</div>
</div>
<Button variant="on-dark" style={{marginTop:20,width:'100%',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8}}><Icon name="chat-circle-text" size={16}/>Enviar mensaje</Button>
</Card>
</div>
</div>
);
}
