# e-commers-shop-pet

1. [Installation](#installation)
2. [Notes Next](#notes-next)
3. [Folders structure](#folders-structure)
4. [Rules and conventions](#rules-and-conventions)

---

## Installation

```bash
  npm install
  npm run prepare
  npx husky add .husky/pre-commit "npm run lint-staged"
```

---

## Notes Next:

- Pages and Layouts are Server Components by default;
- The root layout is a Server Component by default and can not be set to a Client Component.
- The top-most layout is called the Root Layout. This required layout is shared across all pages in an
  application. Root layouts must contain html and body tags;
- Passing data between a parent layout and its children is not possible;
- Layouts do not have access to the route segments below itself;
- A layout.tsx and page.tsx file can be defined in the same folder. The layout will wrap the page.;

### Folders structure

- /app: Contains all the routes, components, and logic for your application, this is where you'll be mostly
  working from.
- /app/components: Contains all the UI components for your application, such as cards, tables, and forms;
- /app/lib: Contains functions used in your application, such as reusable utility functions and data fetching
  functions;
- /public: Contains all the static assets for your application, such as images.

---

## Rules and conventions

- accepted comments: "TODO", "FIXME", "NOTE", "DEBUG";
  any othets trigger errors when committing
