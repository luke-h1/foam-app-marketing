import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Foam - A Better Twitch Experience</title>
        <meta
          name="description"
          content="Your new favorite way to experience Twitch on mobile"
        />
      </Head>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Foam</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              Your new favorite way to experience
              <span className="text-blue-400 font-semibold"> Twitch</span> on
              mobile.
            </p>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-500 hover:to-purple-500 glow-hover transform hover:scale-105">
              <span className="relative">Coming Soon</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <main className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <section className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Why <span className="text-gradient">Foam</span>?
            </h2>

            <div className="grid gap-8 md:gap-12">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/70">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Foam is a{" "}
                  <span className="text-blue-400 font-semibold">
                    lightweight, open-source
                  </span>{" "}
                  Twitch client designed for iOS and Android. With a sleek
                  interface and enhanced features, Foam offers a better way to
                  watch your favorite streams.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Stay tuned for updates and be the first to try Foam when it
                  launches!
                </p>
              </div>

              {/* Feature highlights */}
              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Lightning Fast
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Optimized for performance
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Open Source
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Built by the community
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-green-500/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Mobile First
                  </h3>
                  <p className="text-gray-400 text-sm">iOS & Android ready</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
          <p className="text-center text-gray-400">
            <Link
              href="https://github.com/luke-h1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-semibold"
            >
              Built by luke-h1
            </Link>
            <span className="mx-2">•</span>
            Follow us for updates!
            <span className="mx-2">•</span>
            <Link
              href="/privacy-policy"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
