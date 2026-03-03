import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="py-[100px] md:py-[72px] sm:py-14 bg-[#1b2a1b] text-center relative overflow-hidden">
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(45,180,70,.1)_0%,transparent_70%)] rounded-full" />
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <h2 className="text-4xl md:text-3xl sm:text-2xl font-extrabold text-white mb-4">
          Ready to Start Recycling Smarter?
        </h2>
        <p className="text-[17px] text-white/60 max-w-[480px] mx-auto mb-9 leading-relaxed">
          Get a customized recycling program designed for your business.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#1a1a1a] font-semibold text-[15px] rounded-full transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,.2)]"
          >
            Get a Quote
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
          <Link
            href="/schedule-pickup"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold text-[15px] rounded-full transition-all duration-150 hover:border-white hover:bg-white/[0.08] hover:-translate-y-0.5"
          >
            Schedule a Pickup
            <span className="material-symbols-outlined text-lg">calendar_month</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
