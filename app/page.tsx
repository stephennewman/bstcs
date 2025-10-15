export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Header */}
      <header className="px-4 sm:px-8 lg:px-16 py-4 sm:py-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl sm:text-3xl font-black" style={{ color: '#1A1A1A' }}>
            NEWMAN INTELLIGENCE
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-sm sm:text-base font-medium hover:underline" style={{ color: '#1F2937' }}>
              Home
            </a>
            <a href="/blog" className="text-sm sm:text-base font-medium hover:underline" style={{ color: '#41ab5d' }}>
              Blog
            </a>
            <button className="text-sm sm:text-base font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-105 transition-transform shadow-md" style={{ backgroundColor: '#41ab5d', color: '#FFFFFF' }}>
              📥 Download Report
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-20 lg:py-32" style={{ backgroundColor: '#F8FAFB' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight" style={{ color: '#1A1A1A' }}>
            Less Taxes.<br />More Traction.
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 sm:mb-12 max-w-4xl mx-auto font-medium leading-relaxed" style={{ color: '#1F2937' }}>
            Download the <span className="font-bold" style={{ color: '#41ab5d' }}>2026 Sales Tax Compliance & Technology Report</span> — a vendor-agnostic guide to navigating sales tax complexity, evaluating the right tools, and turning compliance into a growth advantage.
          </p>
          <button className="text-xl sm:text-2xl font-black px-8 sm:px-12 py-4 sm:py-6 rounded-full hover:scale-105 transition-transform shadow-lg" style={{ backgroundColor: '#41ab5d', color: '#FFFFFF' }}>
            📥 Download the Report (Free)
          </button>
          <p className="mt-6 text-base sm:text-lg" style={{ color: '#6B7280' }}>
            No forms that waste your time. Instant access. Real insights.
          </p>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 sm:mb-8" style={{ color: '#1A1A1A' }}>
            Sales tax isn't just a back-office problem anymore.
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 leading-relaxed" style={{ color: '#1F2937' }}>
            Sales tax complexity is creeping earlier into the customer journey — right into checkout, product taxability, and channel expansion. Regulations are evolving fast, and the gap between businesses that automate and those that fall behind is widening.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 leading-relaxed" style={{ color: '#1F2937' }}>
            This report breaks down how to stay ahead of the curve, minimize risk, and select the right technology for your stack.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-6 sm:p-8 rounded-2xl border-2" style={{ backgroundColor: 'rgba(65, 171, 93, 0.05)', borderColor: '#41ab5d' }}>
              <p className="text-lg sm:text-xl font-semibold" style={{ color: '#1A1A1A' }}>• Regulations are tightening across states and countries.</p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl border-2" style={{ backgroundColor: 'rgba(65, 171, 93, 0.05)', borderColor: '#41ab5d' }}>
              <p className="text-lg sm:text-xl font-semibold" style={{ color: '#1A1A1A' }}>• Taxability now depends on what you sell, not just where.</p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl border-2" style={{ backgroundColor: 'rgba(65, 171, 93, 0.05)', borderColor: '#41ab5d' }}>
              <p className="text-lg sm:text-xl font-semibold" style={{ color: '#1A1A1A' }}>• Early-stage and late-stage companies face different risks.</p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl border-2" style={{ backgroundColor: 'rgba(65, 171, 93, 0.05)', borderColor: '#41ab5d' }}>
              <p className="text-lg sm:text-xl font-semibold" style={{ color: '#1A1A1A' }}>• The vendor landscape is crowded, but not all solutions cover the full journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-20" style={{ backgroundColor: '#F8FAFB' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 sm:mb-12" style={{ color: '#1A1A1A' }}>
            A practical, no-fluff guide to the future of sales tax.
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border-l-4 sm:border-l-8" style={{ backgroundColor: '#FFFFFF', borderColor: '#3B82F6' }}>
              <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: '#3B82F6' }}>🧭 The Modern Tax Landscape</h3>
              <p className="text-base sm:text-lg" style={{ color: '#1F2937' }}>Key regulatory shifts for 2026 and what they mean for ecommerce, SaaS, and marketplaces.</p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl border-l-4 sm:border-l-8" style={{ backgroundColor: '#FFFFFF', borderColor: '#8B5CF6' }}>
              <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: '#8B5CF6' }}>🧠 The 7-Step Compliance Journey</h3>
              <p className="text-base sm:text-lg" style={{ color: '#1F2937' }}>From checkout to filing — where vendors fit in and where gaps appear.</p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl border-l-4 sm:border-l-8" style={{ backgroundColor: '#FFFFFF', borderColor: '#F59E0B' }}>
              <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: '#F59E0B' }}>🧮 Product Taxability Explained</h3>
              <p className="text-base sm:text-lg" style={{ color: '#1F2937' }}>How what you sell shapes your obligations, and why most businesses get it wrong.</p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl border-l-4 sm:border-l-8" style={{ backgroundColor: '#FFFFFF', borderColor: '#EF4444' }}>
              <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: '#EF4444' }}>🧑‍💻 Vendor Coverage Matrix</h3>
              <p className="text-base sm:text-lg" style={{ color: '#1F2937' }}>Side-by-side comparison of major players — Avalara, TaxJar, Stripe, Anrok, Vertex, and more.</p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl border-l-4 sm:border-l-8" style={{ backgroundColor: '#FFFFFF', borderColor: '#EC4899' }}>
              <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: '#EC4899' }}>⚠️ Risk Scenarios</h3>
              <p className="text-base sm:text-lg" style={{ color: '#1F2937' }}>Real-world examples of common compliance failures (and how to avoid them).</p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl border-l-4 sm:border-l-8" style={{ backgroundColor: '#FFFFFF', borderColor: '#14B8A6' }}>
              <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: '#14B8A6' }}>📈 Market Trends</h3>
              <p className="text-base sm:text-lg" style={{ color: '#1F2937' }}>Where the tax tech market is headed and which emerging vendors to watch.</p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl border-l-4 sm:border-l-8" style={{ backgroundColor: '#FFFFFF', borderColor: '#10B981' }}>
              <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: '#10B981' }}>🧰 Actionable Next Steps</h3>
              <p className="text-base sm:text-lg" style={{ color: '#1F2937' }}>A clean evaluation checklist to move fast and confidently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 sm:mb-12" style={{ color: '#1A1A1A' }}>
            Built for the people actually living this problem.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="p-6 sm:p-10 rounded-3xl border-2" style={{ backgroundColor: '#F8FAFB', borderColor: '#41ab5d' }}>
              <div className="text-4xl sm:text-5xl mb-4">🧮</div>
              <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: '#1A1A1A' }}>CFOs, Controllers & Finance Leaders</h3>
              <p className="text-base sm:text-lg" style={{ color: '#6B7280' }}>Minimize audit exposure and filing errors</p>
            </div>
            <div className="p-6 sm:p-10 rounded-3xl border-2" style={{ backgroundColor: '#F8FAFB', borderColor: '#41ab5d' }}>
              <div className="text-4xl sm:text-5xl mb-4">🧑‍💻</div>
              <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: '#1A1A1A' }}>Founders & Operators</h3>
              <p className="text-base sm:text-lg" style={{ color: '#6B7280' }}>Understand taxability as you scale</p>
            </div>
            <div className="p-6 sm:p-10 rounded-3xl border-2" style={{ backgroundColor: '#F8FAFB', borderColor: '#41ab5d' }}>
              <div className="text-4xl sm:text-5xl mb-4">🧾</div>
              <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: '#1A1A1A' }}>E-commerce & SaaS Teams</h3>
              <p className="text-base sm:text-lg" style={{ color: '#6B7280' }}>Evaluate tools that actually fit your product model</p>
            </div>
            <div className="p-6 sm:p-10 rounded-3xl border-2" style={{ backgroundColor: '#F8FAFB', borderColor: '#41ab5d' }}>
              <div className="text-4xl sm:text-5xl mb-4">🧑‍⚖️</div>
              <h3 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: '#1A1A1A' }}>Tax & Compliance Pros</h3>
              <p className="text-base sm:text-lg" style={{ color: '#6B7280' }}>Benchmark vendors and spot regulatory shifts</p>
            </div>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-center" style={{ color: '#1F2937' }}>
            🪜 Whether you're filing in 1 state or 50, shipping SaaS globally, or just starting to scale, this report gives you a structured way to understand your risk, opportunities, and options.
          </p>
        </div>
      </section>

      {/* Why It's Different */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-20" style={{ backgroundColor: '#F8FAFB' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 sm:mb-8" style={{ color: '#1A1A1A' }}>
            Vendor-agnostic. Product-aware. Built for decision makers.
          </h2>
          <p className="text-xl sm:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Unlike whitepapers that just list features or regulations, this report connects the dots between product, compliance, and market opportunity.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 sm:p-8 rounded-2xl border-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#41ab5d' }}>
              <div className="text-4xl sm:text-5xl mb-3">✅</div>
              <p className="text-xl sm:text-2xl font-black" style={{ color: '#1A1A1A' }}>No vendor bias</p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl border-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#41ab5d' }}>
              <div className="text-4xl sm:text-5xl mb-3">✅</div>
              <p className="text-xl sm:text-2xl font-black" style={{ color: '#1A1A1A' }}>Clear visual frameworks</p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl border-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#41ab5d' }}>
              <div className="text-4xl sm:text-5xl mb-3">✅</div>
              <p className="text-xl sm:text-2xl font-black" style={{ color: '#1A1A1A' }}>Actionable next steps</p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl border-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#41ab5d' }}>
              <div className="text-4xl sm:text-5xl mb-3">✅</div>
              <p className="text-xl sm:text-2xl font-black" style={{ color: '#1A1A1A' }}>Real-world risk mapping</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 sm:mb-8" style={{ color: '#1A1A1A' }}>
            Ready to navigate tax complexity with confidence?
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 sm:mb-12 font-semibold" style={{ color: '#1F2937' }}>
            Get the insights that finance, tax, and growth teams are using to make smarter compliance decisions in 2026.
          </p>
          <button className="text-2xl sm:text-3xl font-black px-10 sm:px-16 py-5 sm:py-8 rounded-full hover:scale-105 transition-transform shadow-lg" style={{ backgroundColor: '#41ab5d', color: '#FFFFFF' }}>
            📥 Download the Report
          </button>
          <p className="text-lg sm:text-xl mt-6 sm:mt-8 font-semibold" style={{ color: '#6B7280' }}>
            It's free. Instant access. No sales pitch — just clarity.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12" style={{ backgroundColor: '#F8FAFB' }}>
        <div className="max-w-6xl mx-auto text-center space-y-3 sm:space-y-4 text-sm sm:text-base" style={{ color: '#6B7280' }}>
          <p>🔹 <span className="font-semibold" style={{ color: '#1A1A1A' }}>About:</span> Independent analysis of the sales tax compliance landscape</p>
          <p>🔹 <span className="font-semibold" style={{ color: '#1A1A1A' }}>Vendors Covered:</span> Avalara, TaxJar, Stripe Tax, Anrok, Zamp, Fonoa, Vertex, Sovos, Numeral, Kintsugi, and more</p>
          <p>🔹 <span className="font-semibold" style={{ color: '#1A1A1A' }}>Last updated:</span> October 2025</p>
        </div>
      </footer>
    </div>
  );
}
