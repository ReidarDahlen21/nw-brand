const {Button,Input}=window.NucleoWealthDesignSystem_3466ee;
export function Login({onLogin}){
return (
<div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--color-navy)',fontFamily:'var(--font-body)'}}>
<div style={{width:400,background:'var(--color-hueso)',borderRadius:'var(--radius-l)',padding:'44px 40px',boxShadow:'var(--shadow-card-on-dark)',display:'flex',flexDirection:'column',gap:24,alignItems:'center'}}>
<img src="../../assets/logos/nucleo-stacked-light.svg" style={{height:64}}/>
<div style={{textAlign:'center'}}>
<div style={{fontFamily:'var(--font-accent)',fontSize:22,color:'var(--color-navy)'}}>Claridad para crecer</div>
<div style={{fontSize:14,color:'var(--color-slate)',marginTop:4}}>Ingresá a tu portal de cliente</div>
</div>
<div style={{width:'100%',display:'flex',flexDirection:'column',gap:16}}>
<Input label="Email" placeholder="maria@ejemplo.com" style={{width:'100%'}}/>
<Input label="Contraseña" type="password" placeholder="••••••••" style={{width:'100%'}}/>
</div>
<Button variant="primary" size="lg" style={{width:'100%'}} onClick={onLogin}>Ingresar</Button>
<a href="#" style={{fontSize:13,color:'var(--color-slate)'}}>¿Olvidaste tu contraseña?</a>
</div>
</div>
);
}
