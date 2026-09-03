# Barbearia Navalha — SaaS Next.js

Landing page da Barbearia Navalha, construída com Next.js 16 + React 19 + Tailwind CSS v4 + shadcn/ui.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui (componentes)
- Lucide React (ícones)

## Tema

Cor primária: âmbar `oklch(0.65 0.18 65)` ≈ `#c8873a`.
Modo claro e escuro funcionais.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Estrutura

```
src/
  app/          # App Router (layout, page, robots, sitemap, global-error)
  components/   # Componentes base + shadcn/ui
  features/     # Features de landing e billing
  hooks/        # Hooks React
  styles/       # global.css (tema âmbar)
  templates/    # Hero, Features, Pricing, CTA, Footer, Navbar, Logo
  types/        # Tipos TypeScript
  utils/        # AppConfig, Helpers, PricingPlans
```

## Planos

- Bronze: R$79/mês — 1 corte, barba, produtos premium
- Prata: R$119/mês — 2 cortes, barba, hidratação, prioridade
- Ouro: R$179/mês — 4 cortes, barba, hidratação, estética facial

---

Adaptado de [ixartz/SaaS-Boilerplate](https://github.com/ixartz/SaaS-Boilerplate) (MIT).
