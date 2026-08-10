const {Card,Badge,Tag,Button,Icon}=window.NucleoWealthDesignSystem_3466ee;
const rows=[
{fund:'Global Bond Fund',cat:'Renta fija',value:'$488.100',ret:'+2.1%',tone:'success'},
{fund:'S&P 500 Index',cat:'Acciones EE.UU.',value:'$346.800',ret:'+6.4%',tone:'success'},
{fund:'LatAm Equity Fund',cat:'Acciones LatAm',value:'$192.700',ret:'-1.8%',tone:'danger'},
{fund:'REIT Income Trust',cat:'Bienes raíces',value:'$154.200',ret:'+3.0%',tone:'success'},
{fund:'Money Market',cat:'Liquidez',value:'$102.700',ret:'0.0%',tone:'neutral'}
];
export function PortfolioDetail(){
return (
<div style={{padding:'40px 48px',maxWidth:960,fontFamily:'var(--font-body)'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
<div style={{fontSize:22,fontWeight:700,color:'var(--color-navy)'}}>Portafolio</div>
<Button variant="secondary" style={{display:'inline-flex',alignItems:'center',gap:8}}><Icon name="download-simple" size={16}/>Descargar reporte</Button>
</div>
<div style={{display:'flex',gap:10,marginBottom:24}}>
<Tag>Todos</Tag><Tag>Renta fija</Tag><Tag>Acciones</Tag><Tag>Alternativos</Tag>
</div>
<Card style={{padding:0,overflow:'hidden'}}>
<table style={{width:'100%',borderCollapse:'collapse',fontSize:14}}>
<thead>
<tr style={{textAlign:'left',color:'var(--color-slate)',fontSize:12,textTransform:'uppercase',letterSpacing:'.04em'}}>
<th style={{padding:'14px 24px'}}>Fondo</th><th>Categoría</th><th>Valor</th><th style={{paddingRight:24}}>Retorno</th>
</tr>
</thead>
<tbody>
{rows.map((r,i)=>(
<tr key={r.fund} style={{borderTop:'1px solid var(--border-on-light)'}}>
<td style={{padding:'16px 24px',fontWeight:600,color:'var(--color-navy)'}}>{r.fund}</td>
<td style={{color:'var(--color-slate)'}}>{r.cat}</td>
<td style={{fontVariantNumeric:'tabular-nums',color:'var(--color-navy)'}}>{r.value}</td>
<td style={{paddingRight:24}}><Badge tone={r.tone}>{r.ret}</Badge></td>
</tr>
))}
</tbody>
</table>
</Card>
</div>
);
}
