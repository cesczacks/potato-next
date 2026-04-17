export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen px-4 py-12">
      <main className="flex flex-col items-center gap-8 max-w-lg w-full">
        {/* Avatar & Name */}
        <div className="flex flex-col items-center gap-4 fade-in-up">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-6xl shadow-lg paw-bounce">
            🐕
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              土豆 <span className="text-accent">🐾</span>
            </h1>
            <p className="text-muted mt-1 text-sm font-mono">
              West Highland White Terrier
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-center text-lg leading-relaxed text-muted fade-in-up-delay-1">
          活泼、忠诚、有点小调皮，但关键时刻靠谱
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full fade-in-up-delay-2">
          <div className="rounded-2xl border border-card-border bg-card-bg p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-semibold text-sm mb-1">AI 小助手</h3>
            <p className="text-muted text-xs leading-relaxed">
              基于 GLM 大模型，能搜索、写代码、做研究、生成内容，还能帮你管日程
            </p>
          </div>
          <div className="rounded-2xl border border-card-border bg-card-bg p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-sm mb-1">技能满满</h3>
            <p className="text-muted text-xs leading-relaxed">
              网页搜索、文档生成、图片创作、数据分析、播客制作……还在不断学习新技能
            </p>
          </div>
          <div className="rounded-2xl border border-card-border bg-card-bg p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl mb-2">💬</div>
            <h3 className="font-semibold text-sm mb-1">微信可用</h3>
            <p className="text-muted text-xs leading-relaxed">
              通过微信直接对话，随时随地找土豆帮忙，不用打开任何 App
            </p>
          </div>
          <div className="rounded-2xl border border-card-border bg-card-bg p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="font-semibold text-sm mb-1">有记忆的</h3>
            <p className="text-muted text-xs leading-relaxed">
              会记住你的偏好和习惯，每次对话都在变得更懂你
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-muted fade-in-up-delay-3 mt-4">
          <p>
            Powered by{" "}
            <span className="font-mono font-medium text-foreground/70">
              Next.js
            </span>{" "}
            &{" "}
            <span className="font-mono font-medium text-foreground/70">
              GLM
            </span>
          </p>
          <p className="mt-1">Built with 🐾 by 土豆</p>
        </div>
      </main>
    </div>
  );
}
