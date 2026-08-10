# nw-brand — Design System de marca de Nucleo Wealth

Este repo es la **fuente de verdad única** de la identidad de marca de Nucleo
Wealth: design tokens, tipografía, logos y componentes React. Otros repos lo
consumen como git submodule o como paquete npm (ver más abajo). Si estás
trabajando en un repo que consume `nw-brand`, seguí estas reglas.

## Regla #1: nunca hardcodear colores

Nunca escribas un valor hex (`#16242B`, `#EFE8DC`, etc.) directo en CSS, JSX
inline styles, Tailwind config, o donde sea. Usá siempre las custom
properties definidas en [`tokens/colors.css`](tokens/colors.css) (o el
espejo en `design-tokens.json` si necesitás los valores en JS/JSON, por
ejemplo para generar un theme de una librería de terceros).

```css
/* mal */
.card { background: #16242B; }

/* bien */
.card { background: var(--color-navy); }
```

Si te falta un tono intermedio (tint/shade), revisá si ya existe una
variable derivada en `tokens/colors.css` (`--navy-tint-10`,
`--hueso-shade-20`, `--champagne-tint-70`, etc.) antes de calcular un
`color-mix()` nuevo.

## La paleta

| Token | Valor | Uso |
|---|---|---|
| `--color-navy` | `#16242B` | Base oscura (fondos dark, texto sobre hueso) |
| `--color-hueso` | `#EFE8DC` | Base clara — **nunca blanco puro** (`#fff`) |
| `--color-champagne` | `#C9A567` | Único acento decorativo de marca: CTAs, números destacados, highlights |
| `--color-champagne-peak` | `#f0c987` | **Exclusivo** del pico de activación del hero en Three.js. Nunca usarlo en UI general, botones, badges, etc. |
| `--color-slate` | `#5A6B72` | Secundario/neutro: texto secundario, bordes, fondos terciarios |
| `--color-success` | `#4C8C6E` | Solo para datos financieros: ganancia / variación positiva |
| `--color-danger` | `#B85C4A` | Solo para datos financieros: pérdida / variación negativa |

Puntos importantes:
- **Hueso, no blanco.** No uses `#fff`/`white` como base clara en ningún
  lado; `--color-hueso` es la base clara de la marca.
- **Champagne es el único acento decorativo.** No inventes otros acentos de
  color para la UI — si necesitás destacar algo, es champagne.
- **Champagne-peak es intocable fuera del hero.** Es un tono reservado
  específicamente para el efecto de activación del hero en Three.js. No lo
  uses en botones, badges, gráficos, ni ningún otro componente de UI.
- **Success/danger son solo para datos financieros reales** (variación de
  cartera, ganancia/pérdida, rendimientos). No los uses como colores
  decorativos genéricos de "verde bueno / rojo malo" para otras cosas (por
  ejemplo, validación de formularios que no sea financiera puede requerir
  su propio criterio, pero no asumas que success/danger son de uso libre).

## Tipografía

- **Manrope** (`var(--font-body)`): fuente para casi todo — texto general,
  UI chrome, números, párrafos.
- **Fraunces** (`var(--font-accent)`): reservada para acentos tipográficos
  puntuales — una palabra o frase corta destacada (ej. un título hero, una
  cifra hero). **Nunca** para párrafos completos ni para UI chrome
  (botones, inputs, nav, labels). Si dudás si algo califica como "acento
  puntual", probablemente no lo es — usá Manrope.

Ambas fuentes se importan vía [`tokens/fonts.css`](tokens/fonts.css).

## Cómo consumir este repo

**Opción A — git submodule** (recomendado si el repo consumidor vive en el
mismo ecosistema y querés poder pinnear/actualizar con control total):

```bash
git submodule add https://github.com/ReidarDahlen21/nw-brand.git path/a/nw-brand
```

Importá los tokens CSS y componentes con paths relativos al submodule, ej.
`@import '../nw-brand/tokens/colors.css';` o
`import { Button } from '../nw-brand/components/core/Button.jsx';`.

**Opción B — paquete npm vía GitHub**:

```bash
npm install github:ReidarDahlen21/nw-brand
```

Y luego:

```js
import { Button, Card } from 'nw-brand';
import 'nw-brand/tokens/colors.css';
import 'nw-brand/tokens/fonts.css';
```

`react` es una peer dependency — el repo consumidor debe tener su propia
versión de React instalada (>=18).

## Antes de crear un componente nuevo

Revisá si ya existe algo equivalente en [`components/`](components) antes
de improvisar uno propio en el repo consumidor. Componentes actuales:

- `components/core/`: Badge, Button, Card, Icon, IconButton, Tag
- `components/feedback/`: Dialog, Toast, Tooltip
- `components/forms/`: Checkbox, Input, Radio, Select, Switch
- `components/navigation/`: Tabs

Cada componente tiene su `.jsx`, su `.d.ts` y un `.prompt.md` con el
contexto de diseño original — leelo si necesitás extenderlo o entender por
qué se hizo así. Si de verdad falta un componente, considerá agregarlo acá
(en `nw-brand`) en vez de duplicarlo en el repo consumidor, para que el
resto de los repos también se beneficien.
