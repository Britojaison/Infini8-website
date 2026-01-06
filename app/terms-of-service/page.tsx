import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">Terms of Service</h1>
          <p className="text-gray-400 text-left">Last Updated: 05-01-2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8 text-left">
          <p className="text-gray-300 leading-relaxed text-justify">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Infini8 website, platform, and services (collectively, the &quot;Services&quot;) provided by Infini8 (&quot;Infini8&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using our Services, you agree to be bound by these Terms.
          </p>

          <p className="text-gray-300 leading-relaxed text-justify">
            If you do not agree to these Terms, you may not access or use the Services.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">1. About Infini8</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              Infini8 is an AI-powered platform offering multiple products designed to help businesses automate, scale, and optimise growth-related workflows. Our current products include:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong className="text-white">Infini8 Voice</strong> – Custom AI calling agents integrated with business workflows</li>
              <li><strong className="text-white">Infini8 SEO</strong> – AI-driven content research and SEO blog generation</li>
              <li><strong className="text-white">Infini8 Marketer</strong> – AI tools for marketing automation and optimisation</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4 text-justify">
              Additional products may be added over time and will also be governed by these Terms.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">2. Eligibility and Account Responsibility</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              You must be at least 18 years old and legally capable of entering into a binding agreement to use Infini8. If you are using Infini8 on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">3. Use of Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              You agree to use Infini8 only for lawful business purposes and in compliance with all applicable laws, regulations, and industry standards.
            </p>
            <p className="text-gray-300 leading-relaxed mb-2 text-left">You may not:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
              <li>Use the Services for illegal, harmful, or deceptive activities</li>
              <li>Attempt to reverse engineer, copy, or misuse Infini8&apos;s systems</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Use Infini8 to generate or distribute spam, harassment, or fraudulent communications</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4 text-justify">
              Infini8 reserves the right to suspend or terminate access if these conditions are violated.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">4. Product-Specific Terms</h2>
            
            <div className="ml-4 mt-4">
              <h3 className="text-xl font-semibold text-white mb-3 text-left">4.1 Infini8 Voice</h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                Infini8 Voice enables the creation of customised AI calling agents based on client requirements.
              </p>
              <p className="text-gray-300 leading-relaxed mb-2 text-left">You acknowledge that:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
                <li>Voice conversations may be processed and analysed to provide the service</li>
                <li>You are responsible for obtaining any legally required consent for call recording or automated calling</li>
                <li>Infini8 does not guarantee specific business outcomes from AI conversations</li>
                <li>Infini8 is not liable for how end users interpret or respond to AI-generated voice interactions.</li>
              </ul>
            </div>

            <div className="ml-4 mt-6">
              <h3 className="text-xl font-semibold text-white mb-3 text-left">4.2 Infini8 SEO</h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                Infini8 SEO generates content based on AI research and optimisation models.
              </p>
              <p className="text-gray-300 leading-relaxed mb-2 text-left">You acknowledge that:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
                <li>Generated content is informational and not guaranteed to achieve specific rankings</li>
                <li>You are responsible for reviewing, approving, and publishing generated content</li>
                <li>Search engine algorithms are outside Infini8&apos;s control</li>
                <li>Infini8 does not guarantee traffic, rankings, or revenue outcomes.</li>
              </ul>
            </div>

            <div className="ml-4 mt-6">
              <h3 className="text-xl font-semibold text-white mb-3 text-left">4.3 Infini8 Marketer</h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-justify">
                Infini8 Marketer provides AI-powered marketing insights, automation, and recommendations.
              </p>
              <p className="text-gray-300 leading-relaxed mb-2 text-left">You acknowledge that:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
                <li>Marketing performance depends on multiple external factors</li>
                <li>AI suggestions are advisory in nature</li>
                <li>Final decisions and execution remain your responsibility</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">5. Integrations and Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              Infini8 may integrate with third-party platforms such as WATI, HubSpot, CRMs, analytics tools, or messaging services.
            </p>
            <p className="text-gray-300 leading-relaxed mb-2 text-left">Infini8 is not responsible for:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
              <li>Availability, reliability, or security of third-party services</li>
              <li>Data loss or issues originating from third-party platforms</li>
              <li>Changes or limitations imposed by third-party providers</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4 text-justify">
              Your use of third-party services is subject to their respective terms and policies.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">6. Data and Privacy</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              Infini8 processes data in accordance with its Privacy Policy. By using the Services, you consent to the collection and processing of data as described therein.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify">
              You retain ownership of your business data. Infini8 uses data only to provide, maintain, and improve the Services, and to meet legal obligations.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">7. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              All Infini8 software, designs, trademarks, logos, documentation, and proprietary systems are owned by Infini8 or its licensors.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify">
              You are granted a limited, non-exclusive, non-transferable right to use the Services during your subscription period. No ownership rights are transferred.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">8. Fees and Payments</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              Certain Infini8 Services may require payment. Pricing, billing cycles, and payment terms will be communicated separately or displayed on the website.
            </p>
            <p className="text-gray-300 leading-relaxed mb-2 text-left">Unless otherwise stated:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
              <li>Fees are non-refundable</li>
              <li>Taxes are the customer&apos;s responsibility</li>
              <li>Failure to pay may result in suspension or termination of access</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">9. Service Availability and Modifications</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              Infini8 may update, modify, or discontinue parts of the Services at any time to improve performance or comply with legal requirements.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify">
              We do not guarantee uninterrupted or error-free operation.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">10. Termination</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              You may stop using Infini8 at any time. Infini8 may suspend or terminate your access if:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
              <li>You violate these Terms</li>
              <li>Payment obligations are not met</li>
              <li>Continued use poses legal, security, or operational risks</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4 text-justify">
              Upon termination, your access to the Services will cease.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">11. Disclaimers</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              The Services are provided &quot;as is&quot; and &quot;as available&quot;.
            </p>
            <p className="text-gray-300 leading-relaxed mb-2 text-left">Infini8 disclaims all warranties, including:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Accuracy of AI-generated outputs</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4 text-justify">
              Use of the Services is at your own risk.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">12. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              To the maximum extent permitted by law, Infini8 shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Decisions made based on AI-generated outputs</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4 text-justify">
              Infini8&apos;s total liability shall not exceed the fees paid by you in the preceding 12 months.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">13. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              You agree to indemnify and hold Infini8 harmless from claims, damages, or losses arising from:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-left">
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your interactions with end users or third parties</li>
            </ul>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">14. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed text-justify">
              These Terms shall be governed by and interpreted in accordance with the laws of India, without regard to conflict of law principles.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">15. Changes to These Terms</h2>
            <p className="text-gray-300 leading-relaxed text-justify">
              Infini8 may update these Terms from time to time. Continued use of the Services after updates constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8 text-left">16. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              For questions regarding these Terms, contact:
            </p>
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

