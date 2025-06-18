export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-32 gap-6">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Learn Smarter with AI
      </h1>
      <p className="max-w-xl text-muted-foreground text-lg">
        Personalized lessons. Gamified progress. Visual explanations. Built for the curious.
      </p>
      <div className="flex gap-4 mt-6">
        <a
          href="/learn"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium shadow hover:bg-primary/90 transition"
        >
          Start Learning
        </a>
        <a
          href="/quiz"
          className="border border-border px-6 py-3 rounded-lg font-medium text-foreground hover:bg-muted transition"
        >
          Try a Quiz
        </a>
      </div>
    </section>
  );
}
