import React, { useState } from 'react';
import { Sparkles, Send, Calendar, Clock, User, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import { BRAND_INFO, SERVICE_CATEGORIES } from '../data/salonData';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    selectedService: '',
    preferredDate: '',
    preferredTime: '',
    additionalMessage: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Flatten all services for the select dropdown
  const allServices = SERVICE_CATEGORIES.flatMap(cat => 
    cat.services.map(s => `${s.name} (${cat.name})`)
  );

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Please enter your mobile number';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = 'Please enter a valid phone number';
    }

    if (!formData.selectedService) {
      newErrors.selectedService = 'Please select a service';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Build the formatted WhatsApp Message exactly as requested
    const messageLines = [
      `💅 *APPOINTMENT ENQUIRY – THE NAIL STORY BY MADHU*`,
      ``,
      `Hello! I would like to book an appointment with your studio:`,
      `• *Full Name:* ${formData.fullName.trim()}`,
      `• *Mobile Number:* ${formData.mobileNumber.trim()}`,
      `• *Selected Service:* ${formData.selectedService}`,
      `• *Preferred Date:* ${formData.preferredDate}`,
      `• *Preferred Time:* ${formData.preferredTime}`,
      formData.additionalMessage.trim() ? `• *Special Note / Reference:* ${formData.additionalMessage.trim()}` : null,
      ``,
      `Please let me know if this slot is available. Thank you! ✨`
    ].filter(Boolean).join('\n');

    const encodedMessage = encodeURIComponent(messageLines);
    const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 400);
  };

  // Get today's date formatted as YYYY-MM-DD for min date
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-20 lg:py-28 bg-gradient-to-b from-cream-white via-soft-blush/40 to-nude-pink/30 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-champagne/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-10 w-96 h-96 bg-rose-gold/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/90 border border-rose-gold/30 px-4 py-1.5 rounded-full text-xs font-montserrat uppercase tracking-wider text-rose-gold shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-gold" />
            <span>Direct WhatsApp Booking</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-dark-brown font-normal mb-4">
            Let's Create <span className="italic rose-gold-text">Your Nail Story.</span>
          </h2>

          <p className="font-sans text-dark-brown/75 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Ready for your next nail transformation? Get in touch with us to book your appointment.
          </p>
        </div>

        {/* The Appointment Enquiry Form Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-rose-gold/30 shadow-2xl">
          
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Row 1: Full Name & Mobile Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div>
                <label 
                  htmlFor="fullName" 
                  className="block text-xs font-montserrat uppercase tracking-wider font-semibold text-dark-brown mb-2"
                >
                  Full Name <span className="text-rose-gold">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-dark-brown/40">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Aditi Sharma"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/20'
                        : 'border-rose-gold/30 focus:border-rose-gold focus:ring-rose-gold/20 bg-cream-white/50'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-sans">
                    <AlertCircle className="w-3 h-3" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label 
                  htmlFor="mobileNumber" 
                  className="block text-xs font-montserrat uppercase tracking-wider font-semibold text-dark-brown mb-2"
                >
                  Mobile Number <span className="text-rose-gold">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-dark-brown/40">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="e.g. 98765 43210"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 transition-all ${
                      errors.mobileNumber
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/20'
                        : 'border-rose-gold/30 focus:border-rose-gold focus:ring-rose-gold/20 bg-cream-white/50'
                    }`}
                  />
                </div>
                {errors.mobileNumber && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-sans">
                    <AlertCircle className="w-3 h-3" />
                    {errors.mobileNumber}
                  </p>
                )}
              </div>

            </div>

            {/* Row 2: Select Service */}
            <div>
              <label 
                htmlFor="selectedService" 
                className="block text-xs font-montserrat uppercase tracking-wider font-semibold text-dark-brown mb-2"
              >
                Select Service <span className="text-rose-gold">*</span>
              </label>
              <select
                id="selectedService"
                name="selectedService"
                value={formData.selectedService}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 transition-all appearance-none bg-no-repeat bg-[right_1rem_center] ${
                  errors.selectedService
                    ? 'border-red-400 focus:ring-red-300 bg-red-50/20'
                    : 'border-rose-gold/30 focus:border-rose-gold focus:ring-rose-gold/20 bg-cream-white/50'
                }`}
              >
                <option value="">-- Choose a Service --</option>
                <optgroup label="Nail Services">
                  <option value="Nail Extensions">Nail Extensions</option>
                  <option value="Acrylic Nails">Acrylic Nails</option>
                  <option value="Nail Art">Nail Art</option>
                  <option value="Nail Designs">Nail Designs</option>
                  <option value="Nail Painting">Nail Painting</option>
                  <option value="Nail Cut & Filing">Nail Cut & Filing</option>
                  <option value="Nail Polish Changes">Nail Polish Changes</option>
                  <option value="Nail Repair">Nail Repair</option>
                  <option value="Polish Removal">Polish Removal</option>
                  <option value="Stiletto Nails">Stiletto Nails</option>
                </optgroup>
                <optgroup label="Manicure & Pedicure">
                  <option value="Manicure">Manicure</option>
                  <option value="Gel Manicures">Gel Manicures</option>
                  <option value="French Manicures">French Manicures</option>
                  <option value="Children's Manicures">Children's Manicures</option>
                  <option value="Men's Manicures">Men's Manicures</option>
                  <option value="Pedicure">Pedicure</option>
                </optgroup>
                <optgroup label="Beauty & Relaxation">
                  <option value="Eyelash Extensions">Eyelash Extensions</option>
                  <option value="Brazilian Waxing">Brazilian Waxing</option>
                  <option value="Waxing">Waxing</option>
                  <option value="Back Massages">Back Massages</option>
                  <option value="Foot Massages">Foot Massages</option>
                  <option value="Hand & Foot Massages">Hand & Foot Massages</option>
                </optgroup>
              </select>
              {errors.selectedService && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-sans">
                  <AlertCircle className="w-3 h-3" />
                  {errors.selectedService}
                </p>
              )}
            </div>

            {/* Row 3: Preferred Appointment Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Preferred Date */}
              <div>
                <label 
                  htmlFor="preferredDate" 
                  className="block text-xs font-montserrat uppercase tracking-wider font-semibold text-dark-brown mb-2"
                >
                  Preferred Appointment Date <span className="text-rose-gold">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-dark-brown/40">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    min={todayStr}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 transition-all ${
                      errors.preferredDate
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/20'
                        : 'border-rose-gold/30 focus:border-rose-gold focus:ring-rose-gold/20 bg-cream-white/50'
                    }`}
                  />
                </div>
                {errors.preferredDate && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-sans">
                    <AlertCircle className="w-3 h-3" />
                    {errors.preferredDate}
                  </p>
                )}
              </div>

              {/* Preferred Time */}
              <div>
                <label 
                  htmlFor="preferredTime" 
                  className="block text-xs font-montserrat uppercase tracking-wider font-semibold text-dark-brown mb-2"
                >
                  Preferred Appointment Time <span className="text-rose-gold">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-dark-brown/40">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 transition-all ${
                      errors.preferredTime
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/20'
                        : 'border-rose-gold/30 focus:border-rose-gold focus:ring-rose-gold/20 bg-cream-white/50'
                    }`}
                  >
                    <option value="">-- Choose Slot (10 AM - 10 PM) --</option>
                    <option value="10:00 AM – 11:30 AM">10:00 AM – 11:30 AM</option>
                    <option value="11:30 AM – 01:00 PM">11:30 AM – 01:00 PM</option>
                    <option value="01:00 PM – 02:30 PM">01:00 PM – 02:30 PM</option>
                    <option value="02:30 PM – 04:00 PM">02:30 PM – 04:00 PM</option>
                    <option value="04:00 PM – 05:30 PM">04:00 PM – 05:30 PM</option>
                    <option value="05:30 PM – 07:00 PM">05:30 PM – 07:00 PM</option>
                    <option value="07:00 PM – 08:30 PM">07:00 PM – 08:30 PM</option>
                    <option value="08:30 PM – 10:00 PM">08:30 PM – 10:00 PM</option>
                  </select>
                </div>
                {errors.preferredTime && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-sans">
                    <AlertCircle className="w-3 h-3" />
                    {errors.preferredTime}
                  </p>
                )}
              </div>

            </div>

            {/* Row 4: Additional Message */}
            <div>
              <label 
                htmlFor="additionalMessage" 
                className="block text-xs font-montserrat uppercase tracking-wider font-semibold text-dark-brown mb-2"
              >
                Additional Message / Art Preference (Optional)
              </label>
              <div className="relative">
                <textarea
                  id="additionalMessage"
                  name="additionalMessage"
                  rows={3}
                  value={formData.additionalMessage}
                  onChange={handleChange}
                  placeholder="Tell us if you want nail extensions, special nail art ideas, bridal styling, or removal of existing nails..."
                  className="w-full px-4 py-3 rounded-xl border border-rose-gold/30 focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/20 bg-cream-white/50 text-sm font-sans focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-rose-gradient hover:bg-rose-gradient-hover text-white font-montserrat text-sm uppercase tracking-widest font-semibold shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-4 h-4 text-champagne" />
                <span>BOOK VIA WHATSAPP</span>
              </button>
            </div>

            {/* Note below form */}
            <p className="text-center text-xs text-dark-brown/60 font-sans font-light">
              Clicking will open WhatsApp with your pre-filled enquiry directly to the studio (+91 {BRAND_INFO.phone}). No payment required online.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}
