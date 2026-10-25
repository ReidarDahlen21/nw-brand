// Tamaños compartidos por Input y Select. `sm` es el control de aplicación:
// 13px, 32px de alto, radio de 4px — los mismos valores que `--app-text-s`,
// `--app-control-h` y `--app-radius-s` de `tokens/app.css`, escritos acá
// porque un componente no puede leer `--app-*` (CLAUDE.md, "La capa de
// aplicación"). Si cambia uno, cambiar el otro.
export const fieldSizes={
sm:{label:{fontSize:'.8125rem'},control:{fontSize:'.8125rem',height:32,padding:'0 var(--space-3)',borderRadius:4},caption:{fontSize:'var(--text-caption)'}},
md:{label:{fontSize:'var(--text-body-s)'},control:{fontSize:'var(--text-body-m)',padding:'12px 14px',borderRadius:'var(--radius-m)'},caption:{fontSize:'var(--text-caption)'}}
};
