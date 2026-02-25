'use client'
import React, { useState } from 'react'

interface ContactFormProps {
  type?: 'quote' | 'pickup'
}

export default function ContactForm({ type = 'quote' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    materials: '',
    pickupDate: '',
    address: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type }),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', company: '', message: '', materials: '', pickupDate: '', address: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-[#4BE576] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#1E1E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-[#1F1E1E] text-xl font-bold mb-2">Message Sent!</h3>
        <p className="text-[#686767]">We&apos;ll be in touch within 24 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-[#4BE576] font-semibold hover:underline text-sm"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#1F1E1E] mb-1.5">Full Name *</label>
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4BE576] focus:ring-1 focus:ring-[#4BE576] transition"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1F1E1E] mb-1.5">Company</label>
          <input
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4BE576] focus:ring-1 focus:ring-[#4BE576] transition"
            placeholder="Acme Corp"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#1F1E1E] mb-1.5">Email *</label>
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4BE576] focus:ring-1 focus:ring-[#4BE576] transition"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1F1E1E] mb-1.5">Phone</label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4BE576] focus:ring-1 focus:ring-[#4BE576] transition"
            placeholder="817-946-5655"
          />
        </div>
      </div>

      {type === 'pickup' && (
        <>
          <div>
            <label className="block text-sm font-semibold text-[#1F1E1E] mb-1.5">Pickup Address *</label>
            <input
              name="address"
              type="text"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4BE576] focus:ring-1 focus:ring-[#4BE576] transition"
              placeholder="123 Main St, City, TX 00000"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1F1E1E] mb-1.5">Preferred Pickup Date</label>
            <input
              name="pickupDate"
              type="date"
              value={formData.pickupDate}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4BE576] focus:ring-1 focus:ring-[#4BE576] transition"
            />
          </div>
        </>
      )}

      <div>
        <label className="block text-sm font-semibold text-[#1F1E1E] mb-1.5">Materials to Recycle</label>
        <input
          name="materials"
          type="text"
          value={formData.materials}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4BE576] focus:ring-1 focus:ring-[#4BE576] transition"
          placeholder="e.g., Electronics, Pallets, Metal scrap..."
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1F1E1E] mb-1.5">
          {type === 'pickup' ? 'Additional Notes' : 'Tell Us About Your Needs'}
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4BE576] focus:ring-1 focus:ring-[#4BE576] transition resize-none"
          placeholder={type === 'pickup' ? 'Any special instructions...' : 'Describe your recycling needs, volume, frequency...'}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again or call us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-[#4BE576] text-[#1E1E1E] font-bold py-4 rounded-full text-base hover:brightness-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending'
          ? 'Sending...'
          : type === 'pickup'
          ? 'Schedule My Pickup'
          : 'Get My Free Quote'}
      </button>

      <p className="text-center text-[#686767] text-xs">
        No spam. No obligation. We respond within 24 hours.
      </p>
    </form>
  )
}
