"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function PrivacyPolicy() {
  const [selectedProduct, setSelectedProduct] = useState<"general" | "infini8graph">("general");

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">Privacy Policy</h1>
          <p className="text-gray-400 text-left">Last Updated: 20 January 2026</p>
        </div>

        {/* Product Selector */}
        <div className="mb-10">
          <p className="text-gray-400 mb-4 text-sm">Select a product to view its privacy policy:</p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedProduct("general")}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${selectedProduct === "general"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
            >
              Infini8 (General)
            </button>
            <button
              onClick={() => setSelectedProduct("infini8graph")}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${selectedProduct === "infini8graph"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
            >
              infini8Graph
            </button>
          </div>
        </div>

        {/* General Privacy Policy Content */}
        {selectedProduct === "general" && (
          <div className="prose prose-invert max-w-none space-y-8 text-left animate-fadeIn">
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
        )}

        {/* infini8Graph Privacy Policy Content */}
        {selectedProduct === "infini8graph" && (
          <div className="prose prose-invert max-w-none space-y-8 text-left animate-fadeIn">
            <p className="text-gray-300 leading-relaxed text-justify">
              infini8Graph (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the infini8Graph website and analytics platform (the &quot;Service&quot;). This Privacy Policy explains how we collect, use, store, and protect your information when you use our Service.
            </p>

            <p className="text-gray-300 leading-relaxed text-justify">
              By accessing or using infini8Graph, you agree to the practices described in this Privacy Policy.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">1. Information We Collect</h2>

              <div className="ml-4 mt-4">
                <h3 className="text-xl font-semibold text-white mb-3 text-left">1.1 Information You Provide via Instagram Login</h3>
                <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                  When you sign in using Instagram (via Meta OAuth), we collect and store limited information necessary to provide analytics services, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
                  <li>Instagram User ID</li>
                  <li>Instagram username</li>
                  <li>Account metadata required for analytics access</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4 text-justify">
                  We do not collect your Instagram password.
                </p>
              </div>

              <div className="ml-4 mt-6">
                <h3 className="text-xl font-semibold text-white mb-3 text-left">1.2 Access Tokens</h3>
                <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                  To access Instagram analytics securely, we store:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
                  <li>Instagram access tokens</li>
                  <li>Token expiration timestamps</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4 text-justify">
                  All access tokens are encrypted at rest using industry-standard encryption and are never exposed to the client browser.
                </p>
              </div>

              <div className="ml-4 mt-6">
                <h3 className="text-xl font-semibold text-white mb-3 text-left">1.3 Analytics Data</h3>
                <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                  We temporarily process and cache analytics data such as:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
                  <li>Follower counts and growth trends</li>
                  <li>Engagement metrics (likes, comments, saves, reach, impressions)</li>
                  <li>Post, Reel, and hashtag performance</li>
                  <li>Derived KPIs (e.g. engagement rate, reach ratio)</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4 text-justify">
                  This data is used only to generate insights for your account and is not sold, shared, or used for advertising.
                </p>
              </div>

              <div className="ml-4 mt-6">
                <h3 className="text-xl font-semibold text-white mb-3 text-left">1.4 Automatically Collected Information</h3>
                <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                  When you access the website, we may collect limited technical information such as:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
                  <li>Browser type and version</li>
                  <li>Device type</li>
                  <li>IP address (used only for security and rate limiting)</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4 text-justify">
                  This data is not used to identify you personally.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">2. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                We use collected information to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
                <li>Authenticate your account</li>
                <li>Retrieve analytics from the Instagram Graph API</li>
                <li>Generate dashboards, charts, and reports</li>
                <li>Cache analytics to reduce API usage and improve performance</li>
                <li>Secure the platform against abuse</li>
                <li>Comply with legal and platform requirements</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4 text-justify">
                We do not use your data for advertising or profiling.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">3. How We Store and Protect Data</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
                <li>User data is stored in Supabase PostgreSQL</li>
                <li>Access tokens are AES-encrypted</li>
                <li>Authentication is handled using JWT stored in secure, HttpOnly cookies</li>
                <li>All communication uses HTTPS</li>
                <li>Access to production databases is restricted and logged</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4 text-justify">
                We take reasonable technical and organizational measures to protect your data, but no system is 100% secure.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">4. Data Retention</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
                <li>User account data is retained while your account remains active</li>
                <li>Cached analytics data is stored temporarily and automatically refreshed or overwritten</li>
                <li>Access tokens are refreshed or deleted based on expiration and account status</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4 text-justify">
                You may request deletion of your data at any time.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">5. Data Deletion &amp; Account Removal</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                You may request complete deletion of your data, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
                <li>User record</li>
                <li>Encrypted access tokens</li>
                <li>Cached analytics</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4 text-justify">
                To request deletion, use the in-app account deletion option or contact us at:
              </p>
              <p className="text-gray-300 leading-relaxed mt-2">
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:support@infini8graph.com" className="text-purple-400 hover:text-purple-300 underline">
                  support@infini8graph.com
                </a>
              </p>
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-yellow-400 font-medium">
                  ⚠️ Data deletion is permanent and cannot be undone.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">6. Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                infini8Graph integrates with the following third-party services:
              </p>
              <div className="grid gap-4 mt-4">
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-2xl">📊</span>
                  <div>
                    <p className="text-white font-semibold">Meta Platforms / Instagram Graph API</p>
                    <p className="text-gray-400 text-sm">For analytics data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-2xl">🗄️</span>
                  <div>
                    <p className="text-white font-semibold">Supabase</p>
                    <p className="text-gray-400 text-sm">Database and secure data storage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <p className="text-white font-semibold">Cloudflare</p>
                    <p className="text-gray-400 text-sm">Secure tunneling and network protection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="text-white font-semibold">Vercel</p>
                    <p className="text-gray-400 text-sm">Website hosting</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mt-4 text-justify">
                These services process data only as required to operate the Service and are governed by their own privacy policies.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">7. Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                We use cookies only for authentication and security purposes, such as:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
                <li>Maintaining your login session</li>
                <li>Protecting against unauthorized access</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4 text-justify">
                We do not use tracking or advertising cookies.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">8. Children&apos;s Privacy</h2>
              <p className="text-gray-300 leading-relaxed text-justify">
                infini8Graph is not intended for individuals under the age of 13. We do not knowingly collect personal data from children.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">9. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed text-justify">
                Your data may be processed in servers located outside your country of residence. By using the Service, you consent to such transfers in accordance with applicable laws.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed text-justify">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4 text-justify">
                Continued use of the Service after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Footer */}
            <section className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-center">
                © 2026 infini8Graph. All rights reserved.
              </p>
            </section>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}
