// src/components/Footer.jsx
import React, { useState } from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Star,
  Award,
  Shield,
  Clock,
  Headphones,
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleNewsletterSubmit = async (e) => {
  e.preventDefault();

  if (!name || !email) {
    toast.error('Please enter your name and email!');
    return;
  }

  try {
    const response = await fetch(
      "https://hotelbooking-system-using-mern.onrender.com/api/reviews",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, review }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to submit review!');
    }

    toast.success(`Thank you ${name}! Your review is submitted.`);
    setEmail('');
    setName('');
    setReview('');

  } catch (error) {
    console.error(error);
    toast.error('Something went wrong. Please try again.');
  }
};


  const clientReviews = [
    { name: 'Sarah Johnson', rating: 5, text: 'Amazing experience! The booking was seamless and the hotel exceeded all expectations.', location: 'New York, USA' },
    { name: 'Michael Chen', rating: 5, text: "Best hotel booking platform I've used. Great prices and excellent customer service.", location: 'Singapore' },
    { name: 'Emma Williams', rating: 4, text: 'Fantastic selection of hotels. Found the perfect place for our family vacation!', location: 'London, UK' },
  ];

  const quickLinks = ['About Us', 'Contact Us', 'Careers', 'Press & Media', 'Privacy Policy', 'Terms & Conditions'];
  const popularDestinations = ['Dubai Hotels', 'Paris Hotels', 'New York Hotels', 'Tokyo Hotels', 'London Hotels', 'Bali Hotels'];
  const services = ['Hotel Booking', 'Flight + Hotel', 'Group Bookings', 'Corporate Travel', 'Travel Insurance', 'Car Rentals'];

  return (
    <footer className="mt-20 text-white" style={{ background: 'linear-gradient(135deg, #31135e, #905ef1, #bb39f6)' }}>
      <Toaster position="top-right" />

      {/* Trust Badges */}
      <div className="bg-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-10 h-10 text-[#14c9e1]" />
              <h4 className="font-semibold">Secure Booking</h4>
              <p className="text-white/70">100% Protected</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="w-10 h-10 text-[#14c9e1]" />
              <h4 className="font-semibold">Best Price Guarantee</h4>
              <p className="text-white/70">Lowest Rates</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Headphones className="w-10 h-10 text-[#14c9e1]" />
              <h4 className="font-semibold">24/7 Support</h4>
              <p className="text-white/70">Always Here for You</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-10 h-10 text-[#14c9e1]" />
              <h4 className="font-semibold">Free Cancellation</h4>
              <p className="text-white/70">On Most Bookings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Reviews */}
      <div className="py-14 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-2">What Our Clients Say</h3>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-white/70">4.9 out of 5 (15,000+ reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientReviews.map((review, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 hover:border-[#f209fe] hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 mb-4 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-white/60">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-[#14c9e1]">Nepal Hotels</h3>
            <p className="text-white/70 mb-6">Your trusted partner for seamless hotel bookings worldwide.</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#14c9e1]" />
                <span className="text-white/70">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#14c9e1]" />
                <span className="text-white/70">+977 9816988657</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#14c9e1]" />
                <span className="text-white/70">support@nepalhotels.com</span>
              </div>
            </div>

            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#f209fe] transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-[#14c9e1]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/70 hover:text-[#f209fe] transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg mb-4 text-[#14c9e1]">Popular Destinations</h4>
            <ul className="space-y-2">
              {popularDestinations.map((dest, i) => (
                <li key={i}>
                  <a href="#" className="text-white/70 hover:text-[#f209fe] transition">{dest}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4 text-[#14c9e1]">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, i) => (
                <li key={i}>
                  <a href="#" className="text-white/70 hover:text-[#f209fe] transition">{service}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-14 pt-10 border-t border-white/20">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-3">Review For Client ✨</h4>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#f209fe]"
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#f209fe]"
              />
              <input
                type="review"
                placeholder="Write your review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#f209fe]"
              />
              <button
                type="submit"
                className="px-5 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(90deg, #14c9e1, #bb39f6, #f209fe)' }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 py-6 text-center text-white/60">
        © 2026 Nepal Hotels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
