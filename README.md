# Todo App

A minimal **React + TypeScript** todo list built with **Vite**, using **Zustand** for state management, **TailwindCSS** for styling and **Lucide** icons. The project follows a classic *add‑list‑toggle‑edit‑delete* flow and stores todos in `localStorage` via Zustand’s persistence middleware.

## Features
- **Add** new tasks with a single input.
- **Toggle** completion state by clicking the circle icon.
- Inline **edit** of task text.
- Delete individual tasks.
- Filter view: *All*, *Active*, *Completed*.
- Clear all completed tasks.
- Responsive UI with dark mode support.
- Unit tests with Vitest & React‑Testing‑Library.

## Architecture
```
src/
├─ components/   # Presentational / container components (AddTodo, TodoItem, TodoList)
├─ store/        # Zustand store (todoStore.ts) – includes persistence via localStorage
└─ App.tsx       # Root component with filter controls and layout
```
- **Zustand** manages the todo list state. The `persist` middleware keeps the list in `localStorage`, so data survives page reloads.
- **TailwindCSS** provides a utility‑first styling layer; dark mode is handled via CSS variables and the `dark:` variant.
- **Lucide-react** supplies SVG icons used throughout the UI.
- **Vite** powers dev server (HMR) and production build.

## Getting Started
```bash
# 1. Clone & enter repo
git clone https://github.com/<user>/todo-app.git && cd todo-app

# 2. Install dependencies – we use pnpm for speed, but npm works as well
pnpm install   # or: npm i

# 3. Run in development mode (hot‑reload)
pnpm dev      # opens http://localhost:5173 by default

# 4. Build for production
pnpm build    # outputs to /dist

# 5. Preview built output locally
pnpm preview
```

## Testing
The project uses **Vitest** with Jest DOM matchers.
```bash
pnpm test
```

### Example Test
`src/store/todoStore.test.ts` covers basic store operations: add, toggle, delete.

## Contributing
1. Fork the repo and create a feature branch (`feature/<short-name>`).
2. Run tests & lint before committing:
   ```bash
   pnpm test
   pnpm lint
   ```
3. Ensure `tsc` passes: `pnpm build --no-minify`.
4. Submit a PR and reference the related issue or task.

### Style Guidelines
- All new code should be **TypeScript**; avoid `any` unless absolutely necessary.
- Follow existing naming conventions (`camelCase`, descriptive function names).
- Tests are optional but highly encouraged for new features.

## License
MIT © Perezident