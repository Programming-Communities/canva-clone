

```markdown
# Canvas Clone - Step by Step Guide

## 1️⃣ Next.js Files Explanation
```
📦canva-clone
<br>
┣ 📂public          # Static files (accessible at /file.svg)
<br>
┣ 📜.env.local      # Environment variables (secret keys)
<br>
┣ 📜.gitignore      # Files to exclude from Git
<br>
┣ 📜next.config.mjs # Next.js configuration
<br>
┣ 📜package.json    # Project dependencies
<br>
┗ 📜README.md       # Project documentation
<br>
```

## 2️⃣ Tailwind CSS Setup

### Install Tailwind v4:
```bash
npm install tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init
```

### Check if Tailwind is working:
Create `app/page.js` with:
```jsx
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button>Subcriber</Button>
    </div>
  );
}

```
*If button turns blue, Tailwind works!*

## 3️⃣ Convex DB Setup

### Install and Initialize:
```bash
npm install convex
npx convex init
```

### Auto-generated Files:
```
convex/
  └── convex.json   # Project config
.env.local          # Created automatically with:
```

### Required `.env.local` Content:
```env
# Deployment used by `npx convex dev`

CONVEX_DEPLOYMENT=dev:benevolent-beagle-320

NEXT_PUBLIC_CONVEX_URL=https://your-convex-url-here
```
*Get URL from terminal after `npx convex dev`*

## 4️⃣ Run Project
```bash
npm run dev       # Frontend
npx convex dev    # Backend
```


