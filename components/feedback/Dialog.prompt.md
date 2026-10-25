Centered modal on a blurred navy scrim — confirmations, fund transfer steps.

```jsx
<Dialog open={open} title="Confirmar transferencia" onClose={close} footer={<Button onClick={close}>Confirmar</Button>}>
  Se transferirán $50.000 a tu cuenta de ahorro.
</Dialog>
```

Sizes: `md` (default — brand scale, Fraunces title, for marketing surfaces) and `sm` (application density: Manrope title at `--text-heading-m`, 14px body, tighter padding — for dense product screens; reads `tokens/app.css`, so import that layer first). Pair `sm` with `Button size="sm"` and `Input`/`Select` `size="sm"` in the footer and body.
