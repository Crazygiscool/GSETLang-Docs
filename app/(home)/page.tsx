import Link from "next/link";
import Image from "next/image";
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
          <Image
            src="/logo.png"
            alt=""
            width={96}
            height={96}
            priority
            className="mx-auto mb-6 w-20 h-20 rounded-2xl shadow-lg"
          />
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>GSET v3.3.0 Released</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Write in any syntax,
            <br />
            <span className="text-blue-600 dark:text-blue-400">
              compile to any language
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            GSET (Generic Syntax Extension Tool) is a Rust transpiler that
            parses real languages with tree-sitter into a shared typed IR, then
            emits complete runnable source. Python to Go works today; all five
            backends are in development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <Rocket className="w-5 h-5" />
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/docs/getting-started/installation"
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
                Real-Language Input
              </h3>
              <p className="text-muted-foreground">
                tree-sitter grammars parse actual source — Python today, with
                JavaScript/TypeScript and more on the roadmap.
              </p>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Shared Typed IR</h3>
              <p className="text-muted-foreground">
                Spans, types, and diagnostics flow through one intermediate
                representation — imports are first-class items every backend
                must consume.
              </p>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Correct-Output Gate
              </h3>
              <p className="text-muted-foreground">
                Emitted code must pass the target language's own syntax
                checker — a failure breaks CI, not your program at runtime.
              </p>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast by Design</h3>
              <p className="text-muted-foreground">
                A gset invocation never loads a grammar it doesn't need.
                Median startup is ~1.86 ms — faster than the old Go binary.
              </p>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Easy Installation
              </h3>
              <p className="text-muted-foreground">
                Homebrew, AUR, Chocolatey, winget, a Debian package, and a
                one-liner install for Linux, macOS, and Windows.
              </p>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Honest Capability Matrix
              </h3>
              <p className="text-muted-foreground">
                Backends declare what they support before emitting — no
                silently dropped constructs, no plausible-but-wrong output.
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
                Write once in real Python:
              </h3>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <span className="text-blue-600">def</span> fib(
                <span className="text-orange-500">n</span>
                <span className="text-green-600">: int</span>)
                <span className="text-blue-600"> -&gt;</span>{" "}
                <span className="text-orange-500">int</span>:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-blue-600">if</span> n{" "}
                <span className="text-orange-500">{"<"}</span>{" "}
                <span className="text-orange-500">2</span>:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-blue-600">return</span> n<br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-blue-600">return</span> fib(n{" "}
                <span className="text-orange-500">{"-"}</span>{" "}
                <span className="text-orange-500">1</span>){" "}
                <span className="text-orange-500">{"+"}</span> fib(n{" "}
                <span className="text-orange-500">{"-"}</span>{" "}
                <span className="text-orange-500">2</span>)
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Compile to any language:
              </h3>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                <div className="text-muted-foreground">
                  $ gset run fib.py -t go
                </div>
                <div>55</div>
                <div className="border-t border-border my-2" />
                <div className="text-muted-foreground">// generated Go</div>
                <div>
                  <span className="text-blue-600">func</span> fib(n{" "}
                  <span className="text-orange-500">int</span>){" "}
                  <span className="text-orange-500">int</span> {"{"}
                </div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;return fib(n - 1) + fib(n - 2)</div>
                <div>{"}"}</div>
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
            Install GSET in seconds and try the Python-to-Go pipeline today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs/getting-started/installation"
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
            <span className="text-muted-foreground">v3.3.0</span>
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