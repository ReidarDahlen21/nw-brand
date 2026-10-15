Checkbox with champagne fill + navy checkmark when checked; hueso fill and a navy 38% border when unchecked. Navy border on hover, the champagne `--shadow-focus` ring on keyboard focus, 45% opacity when disabled.

It is a real `<input type="checkbox">` with `appearance: none`, so keyboard, `disabled`, `aria-label` and screen readers behave like the native one. Any other input prop (`id`, `aria-label`, `name`…) passes through to the input, and `onChange` receives the native change event.

```jsx
<Checkbox label="Acepto los términos" checked={agreed} onChange={e=>setAgreed(e.target.checked)} />

// Sin label: sólo la casilla, para una fila con su propio <label>
<Checkbox aria-label="Dar de alta a Cho Mateo" checked={on} disabled={busy} onChange={e=>setOn(e.target.checked)} />
```
