Labeled text field for forms — onboarding, KYC, settings.

```jsx
<Input label="Nombre completo" placeholder="Ej. María Fernández" />
```

Pass `error` to switch the border/caption to danger; `helpText` for a neutral caption. Focus ring uses champagne.

Sizes: `md` (default) and `sm` — the application control: 13px, 32px tall, 4px radius (the values of `--app-text-s`, `--app-control-h`, `--app-radius-s`). `sm` works without `tokens/app.css` (same values, written inline).
