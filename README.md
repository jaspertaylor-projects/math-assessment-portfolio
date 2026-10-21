# Math Assessment Portfolio

A one-page mathematics assessment portfolio featuring nine questions: one question at each Depth of Knowledge level (1–3) for each of grades 3, 4, and 5. DOK 1 questions use multiple choice; DOK 2 and 3 questions use constructed responses. Student prompts use short, direct language. Each question includes a specific Common Core standard, a link to its source, alignment evidence, an answer key, and scoring guidance. Constructed responses also include sample answers.

Built with React + Vite. Hosted for free on Cloudflare.

## Make it yours

| What | Where |
| --- | --- |
| Name, role, bio, email, LinkedIn | `src/site.config.js` |
| The nine questions, organized by grade | `src/data/grade3.jsx`, `src/data/grade4.jsx`, `src/data/grade5.jsx` |
| Combined question collection | `src/data/items.jsx` |
| DOK level descriptions | `src/data/dok.js` |
| Landing page and portfolio sections | `src/components/Sections.jsx` |
| Colors, fonts, layout | `src/styles.css` (tokens at the top) |

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173, live-reloads as you edit
npm run build      # production build into dist/
npm run preview    # serve the production build at http://localhost:4173
```

If `npm run dev` starts but doesn't pick up your edits and logs `ENOSPC: System limit for number of file watchers reached`, raise the Linux watcher limit once:

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

## Deploy (free)

### 1. Put the code on GitHub

```bash
git init -b main
git add .
git commit -m "Initial portfolio site"
gh repo create math-assessment-portfolio --public --source=. --push
```

Use `--private` instead of `--public` if you'd rather keep the source private. The site is still public either way.

### 2. Connect the repo to Cloudflare

1. Open the Cloudflare dashboard and go to **Workers & Pages → Create application**.
2. Choose **Import a repository**, authorize GitHub if prompted, and pick `math-assessment-portfolio`.
3. Confirm the settings. They should be detected from `wrangler.jsonc`:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
4. Click **Deploy**.

The site goes live at `https://math-assessment-portfolio.<your-subdomain>.workers.dev`. From then on, every `git push` to `main` redeploys it automatically.

**Using Cloudflare Pages instead?** Go to **Create application → Pages → Import an existing Git repository**, choose the **React (Vite)** preset (build command `npm run build`, output directory `dist`). You get a `*.pages.dev` URL. Either option is free for a static site like this.

### 3. (Optional) Custom domain

In the Worker's **Settings → Domains & Routes**, add a domain you own. Cloudflare Registrar sells domains at cost.

### Deploying from the terminal instead

```bash
npx wrangler login
npm run deploy
```

## Caching

`public/_headers` makes every deploy visible on a visitor's next normal page load, with no hard refresh and no manual purge:

- The page (`/`, `/index.html`) is sent with `Cache-Control: no-cache`, so browsers check for a new version on every visit.
- Built JS/CSS in `/assets/` is cached for a year. That's safe because Vite renames those files whenever their contents change.

The dashboard's **Purge Cache** and **Invalidate Cache** buttons only matter if you add a custom domain and turn on extra caching rules for it.
