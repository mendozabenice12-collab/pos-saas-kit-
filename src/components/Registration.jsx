import { useState } from 'react'

export default function Registration() {
  const [form, setForm] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    farmName: '',
    address: '',
    breed: '',
    roosterName: '',
    weight: '',
    numEntries: 1,
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const breeds = ['Sweater', 'Hatch', 'Kelso', 'Roundhead', 'Shamo', 'Asil', 'Other']

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Required'
    if (!form.contactNumber.trim()) e.contactNumber = 'Required'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.breed) e.breed = 'Select a breed'
    if (!form.weight || isNaN(form.weight) || form.weight < 1.5 || form.weight > 2.5)
      e.weight = 'Must be between 1.5–2.5 kg'
    if (!form.numEntries || form.numEntries < 1) e.numEntries = 'At least 1 entry'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length === 0) setSubmitted(true)
  }

  const totalFee = (form.numEntries || 0) * 5500

  if (submitted) {
    return (
      <section id="register" className="py-20 px-5 bg-sabong-dark">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="font-display text-3xl font-bold text-sabong-gold mb-3">Registration Submitted!</h2>
          <p className="text-sabong-cream/70 text-lg mb-2">
            Thank you, <span className="text-white font-semibold">{form.fullName}</span>. Your entry for{' '}
            <span className="text-sabong-gold font-semibold">{form.numEntries}</span> rooster(s) has been received.
          </p>
          <p className="text-sabong-cream/60 mb-8">
            Total entry fee: <span className="text-white font-semibold">₱{totalFee.toLocaleString()}</span>
          </p>
          <div className="bg-black/40 border border-sabong-gold/20 rounded-2xl p-6 text-left mb-8">
            <p className="text-sabong-cream/50 text-xs uppercase tracking-wider mb-3">Your Registration Summary</p>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between"><dt className="text-sabong-cream/60">Farm</dt><dd className="text-white">{form.farmName || '—'}</dd></div>
              <div className="flex justify-between"><dt className="text-sabong-cream/60">Breed</dt><dd className="text-white">{form.breed}</dd></div>
              <div className="flex justify-between"><dt className="text-sabong-cream/60">Rooster Name</dt><dd className="text-white">{form.roosterName || '—'}</dd></div>
              <div className="flex justify-between"><dt className="text-sabong-cream/60">Weight</dt><dd className="text-white">{form.weight} kg</dd></div>
              <div className="flex justify-between"><dt className="text-sabong-cream/60">Entries</dt><dd className="text-white">{form.numEntries}</dd></div>
              <div className="flex justify-between"><dt className="text-sabong-cream/60">Contact</dt><dd className="text-white">{form.contactNumber}</dd></div>
            </dl>
          </div>
          <p className="text-sabong-cream/50 text-sm mb-6">
            We'll contact you at {form.contactNumber}{form.email ? ` or ${form.email}` : ''} to confirm your slot and arrange payment.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ fullName: '', contactNumber: '', email: '', farmName: '', address: '', breed: '', roosterName: '', weight: '', numEntries: 1 }) }}
            className="border-2 border-sabong-gold text-sabong-gold font-semibold px-8 py-3 rounded-full hover:bg-sabong-gold hover:text-sabong-dark transition-colors"
          >
            Register Another Entry
          </button>
        </div>
      </section>
    )
  }

  const inputClass = (field) =>
    `w-full bg-black/40 border rounded-xl px-4 py-3 text-white placeholder-sabong-cream/30 outline-none transition-colors ${
      errors[field] ? 'border-red-500' : 'border-sabong-gold/20 focus:border-sabong-gold/60'
    }`

  return (
    <section id="register" className="py-20 px-5 bg-black">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sabong-gold text-sm font-semibold tracking-[0.3em] uppercase mb-2">Sign Up to Compete</p>
          <h2 className="font-display text-4xl font-bold text-white">Entry Registration</h2>
          <p className="text-sabong-cream/60 mt-3">Fill out the form below to register your gamefowl for the 4th Jap Gagalac Derby.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-sabong-dark/60 border border-sabong-gold/20 rounded-3xl p-6 sm:p-8 space-y-5">
          {/* Breeder Info */}
          <div>
            <label className="block text-sabong-gold text-sm font-semibold mb-1.5">Full Name *</label>
            <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Juan Dela Cruz" className={inputClass('fullName')} />
            {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sabong-gold text-sm font-semibold mb-1.5">Contact Number *</label>
              <input type="tel" name="contactNumber" value={form.contactNumber} onChange={handleChange} placeholder="0917 123 4567" className={inputClass('contactNumber')} />
              {errors.contactNumber && <p className="text-red-400 text-xs mt-1">{errors.contactNumber}</p>}
            </div>
            <div>
              <label className="block text-sabong-gold text-sm font-semibold mb-1.5">Email (optional)</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="juan@example.com" className={inputClass('email')} />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sabong-gold text-sm font-semibold mb-1.5">Farm / Breeder Name</label>
            <input type="text" name="farmName" value={form.farmName} onChange={handleChange} placeholder="Del Cruz Gamefowl Farm" className={inputClass('farmName')} />
          </div>

          <div>
            <label className="block text-sabong-gold text-sm font-semibold mb-1.5">Address / Location</label>
            <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Tarlac City, Tarlac" className={inputClass('address')} />
          </div>

          {/* Rooster Info */}
          <div className="border-t border-sabong-gold/15 pt-5">
            <p className="text-sabong-gold text-sm font-semibold uppercase tracking-wider mb-4">Gamefowl Details</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sabong-gold text-sm font-semibold mb-1.5">Breed *</label>
              <select name="breed" value={form.breed} onChange={handleChange} className={inputClass('breed')}>
                <option value="" disabled>Select a breed</option>
                {breeds.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
              {errors.breed && <p className="text-red-400 text-xs mt-1">{errors.breed}</p>}
            </div>
            <div>
              <label className="block text-sabong-gold text-sm font-semibold mb-1.5">Rooster Name / ID</label>
              <input type="text" name="roosterName" value={form.roosterName} onChange={handleChange} placeholder="Champion #1" className={inputClass('roosterName')} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sabong-gold text-sm font-semibold mb-1.5">Weight (kg) *</label>
              <input type="number" step="0.01" name="weight" value={form.weight} onChange={handleChange} placeholder="2.00" className={inputClass('weight')} />
              {errors.weight && <p className="text-red-400 text-xs mt-1">{errors.weight}</p>}
            </div>
            <div>
              <label className="block text-sabong-gold text-sm font-semibold mb-1.5">Number of Entries *</label>
              <input type="number" min="1" name="numEntries" value={form.numEntries} onChange={handleChange} className={inputClass('numEntries')} />
              {errors.numEntries && <p className="text-red-400 text-xs mt-1">{errors.numEntries}</p>}
            </div>
          </div>

          {/* Fee summary */}
          <div className="bg-sabong-red/10 border border-sabong-red/30 rounded-xl px-4 py-3 flex justify-between items-center">
            <span className="text-sabong-cream/70 text-sm">Total Entry Fee (₱5,500 × {form.numEntries || 0})</span>
            <span className="text-sabong-gold font-bold text-lg">₱{totalFee.toLocaleString()}</span>
          </div>

          <button type="submit" className="w-full bg-sabong-red text-white font-semibold text-lg py-3.5 rounded-xl hover:bg-red-700 transition-colors">
            Submit Registration
          </button>
        </form>
      </div>
    </section>
  )
}
