Toggle switch, navy knob on champagne track when on, on a slate track when off. The champagne `--shadow-focus` ring on keyboard focus, 45% opacity when disabled.

It is a real `<input type="checkbox" role="switch">` with `appearance: none`, so keyboard (Tab, space), `disabled`, `aria-label` and screen readers behave like a native switch. Any other input prop (`id`, `name`, `aria-label`…) passes through to the input, and `onChange` receives the native change event (`e.target.checked`). Without `label`, give it an `aria-label` or wrap it in your own `<label>`.

Controlled only: the knob is drawn from the `checked` prop, not from the input's own state, so always pass `checked` together with `onChange`. There is no `defaultChecked`: used uncontrolled, the input would change and the drawing would not.

```jsx
<Switch label="Mostrar cauciones" checked={notif} onChange={e=>setNotif(e.target.checked)} />

// Sin label: sólo el interruptor
<Switch aria-label="Notificaciones" checked={notif} disabled={busy} onChange={e=>setNotif(e.target.checked)} />
```
