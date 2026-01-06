import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">Privacy Policy</h1>
          <p className="text-gray-400 text-left">Last Updated: 05-01-2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8 text-left">
          <p className="text-gray-300 leading-relaxed text-justify">
            This Privacy Policy explains how Infini8 (&quot;Infini8&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects information when you access or use our website, platform, and services (collectively, the &quot;Services&quot;).
          </p>

          <p className="text-gray-300 leading-relaxed text-justify">
            By using Infini8, you agree to the collection and use of information as described in this Policy.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">1. Information We Collect</h2>
            
            <div className="ml-4 mt-4">
              <h3 className="text-xl font-semibold text-white mb-3 text-left">1.1 Information You Provide</h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                We may collect information you voluntarily provide, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
                <li>Name, email address, company name, and contact details</li>
                <li>Account credentials</li>
                <li>Billing and payment information</li>
                <li>Business inputs, configurations, and preferences</li>
                <li>Support requests and communications</li>
              </ul>
            </div>

            <div className="ml-4 mt-6">
              <h3 className="text-xl font-semibold text-white mb-3 text-left">1.2 Information Collected Automatically</h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                When you use Infini8, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
                <li>IP address, browser type, and device information</li>
                <li>Usage data and interaction logs</li>
                <li>Pages visited, features used, and session activity</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div className="ml-4 mt-6">
              <h3 className="text-xl font-semibold text-white mb-3 text-left">1.3 Product-Specific Data</h3>
              
              <div className="mt-4">
                <p className="text-gray-300 leading-relaxed mb-2 text-left">
                  <strong className="text-white">Infini8 Voice</strong>
                </p>
                <p className="text-gray-300 leading-relaxed mb-4 text-justify ml-4">
                  May process call metadata, conversation transcripts, intent signals, and automation triggers as required to provide the service.
                </p>
              </div>

              <div className="mt-4">
                <p className="text-gray-300 leading-relaxed mb-2 text-left">
                  <strong className="text-white">Infini8 SEO</strong>
                </p>
                <p className="text-gray-300 leading-relaxed mb-4 text-justify ml-4">
                  May process business niche information, keywords, research inputs, and generated content.
                </p>
              </div>

              <div className="mt-4">
                <p className="text-gray-300 leading-relaxed mb-2 text-left">
                  <strong className="text-white">Infini8 Marketer</strong>
                </p>
                <p className="text-gray-300 leading-relaxed mb-4 text-justify ml-4">
                  May process campaign data, performance metrics, and automation configurations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">2. How We Use Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              We use collected information to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
              <li>Provide, operate, and improve the Services</li>
              <li>Configure and personalise AI-powered features</li>
              <li>Enable integrations with third-party tools</li>
              <li>Monitor performance, security, and reliability</li>
              <li>Communicate with you about updates and support</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">3. Legal Basis for Processing</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              We process personal data based on:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
              <li>Your consent</li>
              <li>Performance of a contract</li>
              <li>Legitimate business interests</li>
              <li>Compliance with legal obligations</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              We do not sell your personal data.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              We may share data with:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
              <li>Trusted service providers and infrastructure partners</li>
              <li>Integration partners you authorise (e.g., WATI, HubSpot)</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4 text-justify">
              All third parties are bound by confidentiality and data protection obligations.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">5. Data Retention</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              We retain information only for as long as necessary to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
              <li>Provide the Services</li>
              <li>Meet contractual and legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4 text-justify">
              You may request deletion of your data, subject to legal and operational requirements.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">6. Data Security</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              Infini8 implements industry-standard security measures including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
              <li>Access controls</li>
              <li>Secure data storage</li>
              <li>Encryption where applicable</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4 text-justify">
              However, no system is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">7. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Restrict or object to processing</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4 text-justify">
              Requests can be made by contacting us at the email below.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">8. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed text-justify">
              Your information may be processed in locations outside your country of residence. We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">9. Updates to This Policy</h2>
            <p className="text-gray-300 leading-relaxed text-justify">
              We may update this Privacy Policy periodically. Continued use of the Services after updates constitutes acceptance of the revised policy.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">10. Contact Us</h2>
            <div className="text-gray-300 space-y-2 text-left">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:connect@88gb.in" className="text-purple-400 hover:text-purple-300 underline">
                  connect@88gb.in
                </a>
              </p>
              <p>
                <strong className="text-white">Website:</strong>{" "}
                <a href="https://www.infini8.org" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                  https://www.infini8.org
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

