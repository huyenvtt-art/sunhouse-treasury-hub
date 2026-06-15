# Sunhouse Treasury Hub

Quản trị và kinh doanh tài chính — Tập đoàn Sunhouse.

## Tech stack

- React 19 + TypeScript
- Tailwind CSS 4
- React Flow (luồng tiền)
- Recharts (biểu đồ dashboard)
- React Router

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push repository to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

Or deploy via CLI:

```bash
npx vercel
```

The `vercel.json` file configures SPA routing for React Router.
