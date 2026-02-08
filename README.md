# Portfolio

A modern and responsive portfolio project built with Next.js, featuring an elegant design with multi-language support and dark/light mode.

## 🚀 Features

- **Multi-language**: Support for multiple languages using [next-intl](https://next-intl.dev/)
- **Dark/Light Mode**: Dynamic theme with [next-themes](https://github.com/pacocoursey/next-themes)
- **Responsive Design**: Fully responsive interface with [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Reusable components with [shadcn/ui](https://ui.shadcn.com/) and [Magic UI](https://magicui.design/)
- **TypeScript**: Fully typed for a better development experience
- **Icons**: Powered by the [Lucide](https://lucide.dev/) icon library

## 📋 Project Structure

```
.
├── app/                  # Next.js App Router
│   ├── page.tsx          # Homepage
│   ├── projects/         # Projects page
│   ├── skills/           # Skills page
│   └── trajectory/       # Trajectory/Timeline page
├── components/           # Reusable React components
│   ├── ui/               # Base UI components
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer
│   └── ...               # Other components
├── messages/             # Translation files
│   ├── en.json
│   ├── pt.json
│   └── ja.json
├── lib/                  # Utilities
└── src/
    └── i18n/             # Internationalization configuration
```