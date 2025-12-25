import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
              FOAM
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-16 font-light tracking-wide">
            Custom Twitch client for IOS & Android
          </p>

          <div className="space-y-8 text-lg text-gray-500 max-w-xl mx-auto">
            <p>Coming soon</p>
          </div>
        </div>
        <footer className="absolute bottom-0 left-0 right-0 py-8">
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
            <Link
              href="https://github.com/luke-h1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </Link>
            <span>•</span>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
