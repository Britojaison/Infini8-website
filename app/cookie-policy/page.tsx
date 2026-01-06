import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">Cookie Policy</h1>
          <p className="text-gray-400 text-left">Last Updated: 05-01-2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8 text-left">
          <p className="text-gray-300 leading-relaxed text-justify">
            This Cookie Policy explains how Infini8 uses cookies and similar technologies on our website and platform.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">1. What Are Cookies?</h2>
            <p className="text-gray-300 leading-relaxed text-justify">
              Cookies are small text files stored on your device when you visit a website. They help websites function properly, improve performance, and understand user behaviour.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">2. How Infini8 Uses Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              Infini8 uses cookies to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
              <li>Ensure core website functionality</li>
              <li>Improve user experience and performance</li>
              <li>Analyse traffic and usage patterns</li>
              <li>Remember user preferences</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">3. Types of Cookies We Use</h2>
            
            <div className="ml-4 mt-4">
              <h3 className="text-xl font-semibold text-white mb-3 text-left">3.1 Essential Cookies</h3>
              <p className="text-gray-300 leading-relaxed text-justify">
                Required for basic website functionality and security. These cannot be disabled.
              </p>
            </div>

            <div className="ml-4 mt-6">
              <h3 className="text-xl font-semibold text-white mb-3 text-left">3.2 Performance and Analytics Cookies</h3>
              <p className="text-gray-300 leading-relaxed text-justify">
                Help us understand how users interact with our website and Services, allowing us to improve usability and performance.
              </p>
            </div>

            <div className="ml-4 mt-6">
              <h3 className="text-xl font-semibold text-white mb-3 text-left">3.3 Functional Cookies</h3>
              <p className="text-gray-300 leading-relaxed text-justify">
                Remember user settings and preferences to provide a more personalised experience.
              </p>
            </div>

            <div className="ml-4 mt-6">
              <h3 className="text-xl font-semibold text-white mb-3 text-left">3.4 Third-Party Cookies</h3>
              <p className="text-gray-300 leading-relaxed text-justify">
                Set by trusted third-party services such as analytics, integrations, or embedded tools.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">4. Managing Cookies</h2>
            <p className="text-gray-300 leading-relaxed text-justify">
              You can manage or disable cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">5. Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed text-justify">
              We may update this Cookie Policy from time to time. Any changes will be reflected on this page.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">6. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              If you have questions about our use of cookies, contact:
            </p>
            <div className="text-gray-300 space-y-2 text-left">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:connect@88gb.in" className="text-purple-400 hover:text-purple-300 underline">
                  connect@88gb.in
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

