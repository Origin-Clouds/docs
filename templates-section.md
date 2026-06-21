# Templates Section — Implementation Plan

> Replaces the `<section id="infrastructure">` feature grid on the landing page
> with a language/hello-world template picker, linked to docs pages with deploy buttons.

---

## Part A — Website: Replace Infrastructure Section

**File:** `originclouds/src/routes/index.tsx` (lines 497–569)

Replace the 9 infrastructure feature cards with 5 language template cards.
Each card shows:
- A **language-specific icon** from `lucide-react`
- **Language name** (Node.js, TypeScript, Python, Go, Rust)
- A **"Hello World" label** and brief descriptor
- Clicking navigates to `https://docs.originclouds.io/languages/<slug>/hello-world/`

The old feature data is commented out under a `// ORIGINAL INFRASTRUCTURE FEATURES` marker for later restoration.

### Icon Mapping

| Language | Lucide Icon |
|----------|-------------|
| Node.js  | `FileJson`  |
| TypeScript | `Braces`  |
| Python   | `FileCode`  |
| Go       | `Terminal`  |
| Rust     | `Shield`    |

---

## Part B — Docs: DeployButton Component

**File:** `docs/src/components/DeployButton.astro`

A reusable Astro component with props `{ language: string; template?: string }`.
Renders a styled `<a>` button with:
- Text: "Deploy to Origin Clouds →"
- **Placeholder URL:** `#` (visually present but non-functional)
- Inline `title` attribute explaining the eventual auth flow:
  > "Deploy flow coming soon — will handle auth redirect + post-signup resume"

---

## Part C — Docs: Hello World Pages

Create under `docs/src/content/docs/languages/`:

| File | Language | Hello World |
|---|---|---|
| `node/hello-world.mdx` | Node.js | `console.log("Hello, Origin Clouds!");` |
| `typescript/hello-world.mdx` | TypeScript | `console.log("Hello, Origin Clouds!");` |
| `python/hello-world.mdx` | Python | `print("Hello, Origin Clouds!")` |
| `go/hello-world.mdx` | Go | `fmt.Println("Hello, Origin Clouds!")` |
| `rust/hello-world.mdx` | Rust | `println!("Hello, Origin Clouds!");` |

Each page includes:
1. Frontmatter (`title`, `description`, `sidebar`)
2. Hello world code in a fenced code block
3. Brief instructions (create file, run locally, deploy)
4. `<DeployButton language="..." />` component invocation

---

## Part D — Docs: Sidebar Update

In `astro.config.mjs`, add a "Hello World" group:

```js
{
  label: 'Hello World',
  items: [
    { label: 'Node.js', slug: 'languages/node/hello-world' },
    { label: 'TypeScript', slug: 'languages/typescript/hello-world' },
    { label: 'Python', slug: 'languages/python/hello-world' },
    { label: 'Go', slug: 'languages/go/hello-world' },
    { label: 'Rust', slug: 'languages/rust/hello-world' },
  ],
}
```

---

## Auth Flow (Placeholder Note)

The deploy button is stubbed with `#` for now. The eventual flow:

1. User clicks "Deploy to Origin Clouds"
2. App checks auth status
3. If **not logged in** → redirect to signup/login page
4. After successful auth → redirect back to deploy flow with template pre-selected
5. Confirm deploy → provision sandbox → show status

---

## Files Changed / Created

| Action | File |
|--------|------|
| Edit   | `originclouds/src/routes/index.tsx` |
| Create | `docs/src/components/DeployButton.astro` |
| Create | `docs/src/content/docs/languages/node/hello-world.mdx` |
| Create | `docs/src/content/docs/languages/typescript/hello-world.mdx` |
| Create | `docs/src/content/docs/languages/python/hello-world.mdx` |
| Create | `docs/src/content/docs/languages/go/hello-world.mdx` |
| Create | `docs/src/content/docs/languages/rust/hello-world.mdx` |
| Edit   | `docs/astro.config.mjs` |
