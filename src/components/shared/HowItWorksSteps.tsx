import { type StepItem } from '@/lib/types'

export default function HowItWorksSteps({
  steps,
  title,
}: {
  steps: StepItem[]
  title?: string
}) {
  return (
    <section className="py-16">
      {title && (
        <h2 className="mb-10 text-center text-3xl font-bold text-[#1a1a1a]">{title}</h2>
      )}
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-center md:gap-6">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center text-center md:flex-1">
            {index > 0 && (
              <div className="mb-4 h-8 w-px bg-gray-300 md:hidden" aria-hidden="true" />
            )}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2DB446] text-lg font-bold text-white">
              {step.number}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-[#1a1a1a]">{step.title}</h3>
            <p className="max-w-xs text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
