# 🧠 AI Learning Platform

A gamified, AI-powered educational platform designed to help users learn smarter through interactive lessons, personalized quizzes, and visually immersive learning paths.

Built with:
- Next.js 14 (App Router)
- Tailwind CSS + ShadCN UI
- Supabase (Auth + DB)
- OpenAI API
- TypeScript

---

## 🚀 Features

## 🌐 Live Preview

[https://ai-learning.vercel.app](https://ai-learning.vercel.app) *(Coming soon if not live yet)*

- 📚 Guided learning paths by subject/topic
- 🎮 XP, streaks, ranks, and achievements
- 🧠 AI review quizzes (personalized from completed lessons)
- 💬 AI tutor (ask questions about lessons)
- 🖼️ SVG/vector-based visual learning
- 🌙 Dark mode + responsive design
- 🔐 Auth via Supabase (login/signup)
- 🧪 Full developer test suite for AI reliability

---

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Create a .env.local file
echo "OPENAI_API_KEY=sk-..." >> .env.local

# Start the dev server
npm run dev
```

Visit `http://localhost:3000` to view the app.

---

## 🧩 Project Structure (Simplified)

```
src/
├── app/              # Routes (App Router)
├── components/       # UI and layout components
├── data/             # Static lessons and test content
├── lib/              # Utilities and API clients
├── scripts/          # AI test tools
├── styles/           # Global + Tailwind styles
├── planning/         # [IGNORED] Local design & vision docs
```

---

## 🧪 Developer Utilities

- Run AI tests before pushing:
```bash
npx tsx scripts/run-ai-tests.ts
```

- AI quiz & tutor logic live in `lib/ai-test-utils.ts`
- Test data lives in `data/test-lessons.ts`

---

## 🤝 Contributing

This project is in early development and not open for public contributions yet.  
However, if you're curious or have a suggestion, feel free to open an issue or star the repo!

> For collaborators: keep all work-in-progress documents inside the `/planning` folder (ignored in Git).

---

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)** license.

This means:
- ✅ Others can **use, share, and remix** your work **non-commercially**
- ❌ Others **cannot sell, resell, or build commercial knockoffs**
- ✅ Must credit you as the original creator

If you'd like to collaborate commercially or license the project for wider use, please contact the author.

---

## ✨ Built By

Made by dripz0r – follow for updates or collab ideas.
