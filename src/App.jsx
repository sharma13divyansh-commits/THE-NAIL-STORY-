import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import SocialMedia from './components/SocialMedia';
import BookingForm from './components/BookingForm';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-white text-dark-brown">
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Us */}
        <AboutUs />

        {/* 4. Our Services */}
        <Services />

        {/* 5. Our Nail Art Gallery */}
        <Gallery />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Customer Testimonials */}
        <Testimonials />

        {/* 8. Instagram & YouTube */}
        <SocialMedia />

        {/* 9. Appointment Booking */}
        <BookingForm />

        {/* 10. Contact & Location */}
        <ContactLocation />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Interactive Quick Floating WhatsApp & Phone CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
