import Link from "next/link";
import {
  BookOpen,
  Download,
  GitBranch,
  Rocket,
  Zap,
  Globe,
  Code,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent dark:from-blue-500/10" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>GSET v2.1.3 Released</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Write in any syntax,
            <br />
            <span className="text-blue-600 dark:text-blue-400">
              run on any platform
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            GSET (Generic Syntax Extension Tool) is a powerful transpiler that
            lets you write code using your preferred programming syntax and
            compile it to run on any target language.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <Rocket className="w-5 h-5" />
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/docs/installation"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 hover:bg-white/90 rounded-lg font-medium transition-colors"
            >
              <Download className="w-5 h-5" />
              Install GSET
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why GSET?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                14+ Language Targets
              </h3>
              <p className="text-muted-foreground">
                Transpile to Python, JavaScript, Java, Go, Ruby, PHP, C#, Rust,
                Swift, Kotlin, C/C++, and more.
              </p>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Syntax</h3>
              <p className="text-muted-foreground">
                Write in Python, JavaScript, Java, Go, or custom syntax. Choose
                whatever feels natural to you.
              </p>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Installation</h3>
              <p className="text-muted-foreground">
                One-liner install for all platforms. Works on Linux, macOS, and
                Windows.
              </p>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                List Comprehensions
              </h3>
              <p className="text-muted-foreground">
                Expressive Python-style list operations: [x * x for x in nums if
                x {">"} 0]
              </p>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Keywords</h3>
              <p className="text-muted-foreground">
                Define your own function names via headers or configuration
                files.
              </p>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <ShieldIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Security Hardened</h3>
              <p className="text-muted-foreground">
                Input validation, command sanitization, and depth limits for
                safe operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Example */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Write once in your preferred syntax:
              </h3>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <span className="text-blue-600">print</span>(
                <span className="text-green-600">"Hello from Python!"</span>)
                <br />
                nums = [<span className="text-orange-500">1</span>,{" "}
                <span className="text-orange-500">2</span>,{" "}
                <span className="text-orange-500">3</span>]<br />
                <span className="text-blue-600">for</span> i{" "}
                <span className="text-blue-600">in</span> nums {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-blue-600">print</span>(i)
                <br />
                {"}"}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Compile to any language:
              </h3>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                <div className="text-muted-foreground">// Go</div>
                <div>
                  fmt.<span className="text-blue-600">Println</span>(
                  <span className="text-green-600">"Hello from Python!"</span>)
                </div>
                <div className="border-t border-border my-2" />
                <div className="text-muted-foreground">// Python</div>
                <div>
                  <span className="text-blue-600">print</span>(
                  <span className="text-green-600">"Hello from Python!"</span>)
                </div>
                <div className="border-t border-border my-2" />
                <div className="text-muted-foreground">// JavaScript</div>
                <div>
                  console.<span className="text-blue-600">log</span>(
                  <span className="text-green-600">"Hello from Python!"</span>)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 mb-8">
            Install GSET in seconds and start writing cross-platform code today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs/installation"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 hover:bg-white/90 rounded-lg font-medium transition-colors"
            >
              <Download className="w-5 h-5" />
              Install GSET
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 hover:bg-white/10 rounded-lg font-medium transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Read Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">GSET</span>
            <span className="text-muted-foreground">v2.1.3</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              href="/docs"
              className="hover:text-foreground transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="https://github.com/Crazygiscool/GSETLang"
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <span>License: CC BY-NC 4.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
