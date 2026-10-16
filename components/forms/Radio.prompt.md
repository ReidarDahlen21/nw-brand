Single-select radio: champagne ring and champagne dot when checked; hueso fill and a navy 38% border when unchecked. Navy border on hover, the champagne `--shadow-focus` ring on keyboard focus, 45% opacity when disabled.

It is a real `<input type="radio">` with `appearance: none`, so keyboard, `disabled`, `aria-label` and screen readers behave like the native one. Give every radio of a group the same `name`: Tab enters the group and the arrow keys move inside it. Any other input prop (`id`, `name`, `value`, `aria-label`…) passes through to the input, and `onChange` receives the native change event.

```jsx
<Radio name="freq" value="m" label="Mensual" checked={freq==='m'} onChange={()=>setFreq('m')} />
<Radio name="freq" value="a" label="Anual" checked={freq==='a'} onChange={()=>setFreq('a')} />
```
