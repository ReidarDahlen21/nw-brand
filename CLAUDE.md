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

**Los literales viven en dos archivos de este repo, y en ninguno más:**
`tokens/colors.css` (la paleta de marca, espejada en `design-tokens.json`) y
`tokens/app.css` (la capa de aplicación — ver más abajo), donde hay dos:
`--app-warning` y `--app-info`. Están ahí y no en `colors.css` porque son
estados de una interfaz densa y ninguna superficie de marketing los carga.
Un consumidor que lea `design-tokens.json` no los va a encontrar: es
deliberado, ese archivo es el espejo de la **marca**, no de la extensión.

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

## La capa de aplicación (`tokens/app.css`)

Los tokens de arriba están calibrados para **marketing**: tamaños fluidos,
espaciado generoso, el escalón de texto más chico en 12px. Vestir un
producto denso —una tabla de cartera, un panel de trabajo— necesita
palabras que la marca nunca tuvo que decir.

Esas palabras viven en [`tokens/app.css`](tokens/app.css), **aparte y
opt-in**:

```js
import 'nw-brand/tokens/colors.css';
import 'nw-brand/tokens/spacing.css';
import 'nw-brand/tokens/typography.css';
import 'nw-brand/tokens/radius-shadow.css';
import 'nw-brand/tokens/app.css';   // sólo productos densos
```

Qué agrega, todo con prefijo `--app-`:

- **Densidad**: alturas de barra y de fila, altos de control, paddings de
  tarjeta y de celda.
- **Escalones tipográficos** por debajo del piso de marketing (11px) y entre
  medio (13px). Los escalones que la marca ya define aparecen en la escala
  `--app-text-*` **por referencia** (`var(--text-caption)`), no con un valor
  propio.
- **Radios chicos** (2px, 4px), porque `--radius-s` (6px) se nota redondo en
  un control de 32px.
- **Variantes suave y profunda de ganancia y pérdida** para las píldoras.
  `--color-success` y `--color-danger` no cambian: lo que se agrega es el
  fondo (`-soft`) y la tinta (`-deep`). **El base no es tinta**: da 2,6:1
  sobre una tarjeta, así que cualquier cosa que tenga que leerse va en
  `-deep` (4,7:1 en el peor caso).
- **Aviso e información** (`--app-warning`, `--app-info`), con la misma
  construcción base/`-soft`/`-deep`.

Dos reglas que sostienen todo esto:

- **Es aditiva.** `tokens/app.css` no redefine ni un token de los otros
  archivos. Si se descarta entero, la marca queda como estaba y ningún
  consumidor de marketing se entera. El corolario incómodo: **los componentes
  de `components/` no pueden consumir un token `--app-*`**, porque los carga
  gente que no importa esta capa y se quedarían sin valor. Por eso
  `--app-gain-soft` repite el `color-mix` que `Badge.jsx` ya tiene inline —
  es duplicación forzada, no un descuido; si cambia uno, cambiar el otro.
- **Aviso e información no son success ni danger.** La marca reserva esos
  dos para el dato financiero: un banner rojo de "sesión por vencer" se lee
  como una pérdida. Y tampoco son champagne, que da 1.9:1 sobre hueso y es
  relleno, no tinta.

Los valores nuevos **no están en `design-tokens.json`**: ese archivo es el
espejo de la marca, y esta capa es una extensión que no todos los
consumidores cargan.

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
