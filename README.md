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

#### recommendet git aliases

---

## Notes Next:

- By default, Next.js uses Server Components;
- Pages and Layouts are Server Components by default;
- The root layout is a Server Component by default and can not be set to a Client Component.
- The top-most layout is called the Root Layout. This required layout is shared across all pages in an
  application. Root layouts must contain html and body tags;
- Passing data between a parent layout and its children is not possible;
- Layouts do not have access to the route segments below itself;
- A layout.tsx and page.tsx file can be defined in the same folder. The layout will wrap the page;
- Client Components can use state, effects, and event listeners;
- Client Components have access to browser APIs;
- "use client" doesn't need to be defined in every component that needs to be rendered on the client. Once you
  define the boundary, all child components and modules imported into it are considered part of the client bundle.

### Folders structure

- /app: Contains all the routes, components, and logic for your application, this is where you'll be mostly
  working from.
- /app/components: Contains all the UI components for your application, such as cards, tables, and forms;
- /app/lib: Contains functions used in your application, such as reusable utility functions and data fetching
  functions;
- /public: Contains all the static assets for your application, such as images.

---

## Rules and conventions

### Comments

- accepted comments: "TODO", "FIXME", "NOTE", "DEBUG";
  any othets trigger errors when committing

### Markup and styles

- html & css guidelines - http://sadcitizen.me/code-guide/

### Commits

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

```

#### Conventional commits spec. - (https://www.conventionalcommits.org/en/v1.0.0/)

---
