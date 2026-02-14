import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { HotelCard } from "../components/HotelCard";
import { hotels, destinations } from "../data/mockData";
import { ArrowRight, CheckCircle, Award, Zap, Shield, Wifi, Coffee, Dumbbell, Utensils, Car, Waves, Heart, Quote, Star } from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ----------------- Newsletter Component -----------------
function NewsLetter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    // Validate email
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      // Make POST request to backend
      const response = await fetch(
        "https://hotelbooking-system-using-mern-3.onrender.com/api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Subscribed successfully!", {
          position: "bottom-right",
          autoClose: 3000,
        });
        setEmail(""); // Clear input
      } else {
        toast.error(data.message || "Something went wrong", {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("Server error. Please try again later.", {
        position: "bottom-right",
        autoClose: 3000,
      });
      console.error("Subscription error:", error);
    }
  };


  return (
    <section className="py-14 bg-gradient-to-b from-pink-100 via-pink-50 to-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-2xl font-bold mb-3 text-gray-900">
          Get Exclusive Deals 📩
        </h2>
        <p className="text-gray-700 mb-6">
          Subscribe for special discounts & travel updates.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-xl border border-pink-200 w-full sm:w-2/3 
            focus:ring-2 focus:ring-pink-400 outline-none shadow-sm"
          />

          <button
            onClick={handleSubscribe}
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 
            text-white rounded-xl shadow-md hover:shadow-lg transition"
          >
            Subscribe
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

// ----------------- Home Component -----------------
export const Home = ({ onNavigate }) => {
  const featuredHotels = hotels.slice(0, 4);

  const features = [
    { icon: CheckCircle, title: "Easy Booking", description: "Book your hotel in just 3 simple steps" },
    { icon: Award, title: "Best Prices", description: "Get the best deals on hotel accommodations" },
    { icon: Zap, title: "Instant Confirmation", description: "Receive your booking confirmation instantly" },
    { icon: Shield, title: "Secure Payment", description: "Your payment information is always secure" },
  ];

  const handleSearch = () => onNavigate("hotels");
  const handleHotelSelect = (hotelId) => onNavigate("hotel-detail", hotelId);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[520px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1673505413397-0cd0dc4f5854?auto=format&fit=crop&w=1400&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-black/50 to-pink-700/40" />

        <div className="relative max-w-7xl mx-auto px-6 text-center w-full">
          <h1 className="text-white text-5xl font-bold drop-shadow-lg mb-4">
            Discover Nepal's Finest Hotels
          </h1>
          <p className="text-white/90 text-xl mb-6">
            From the majestic Himalayas to serene valleys 🌿
          </p>

          <SearchBar onSearch={handleSearch} />

          <button
            onClick={() => onNavigate("hotels")}
            className="mt-6 px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg transition"
          >
            Explore Hotels ✨
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-xl shadow-md bg-gradient-to-r from-blue-100 to-blue-50">
            <h2 className="text-3xl font-bold text-blue-700">500+</h2>
            <p className="text-gray-600">Hotels Listed</p>
          </div>
          <div className="p-6 rounded-xl shadow-md bg-gradient-to-r from-pink-100 to-pink-50">
            <h2 className="text-3xl font-bold text-pink-600">10K+</h2>
            <p className="text-gray-600">Happy Travelers</p>
          </div>
          <div className="p-6 rounded-xl shadow-md bg-gradient-to-r from-green-100 to-green-50">
            <h2 className="text-3xl font-bold text-green-700">100%</h2>
            <p className="text-gray-600">Verified Reviews</p>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Popular Destinations 🌍</h2>
              <p className="text-gray-600">Explore the beauty of Nepal’s top places</p>
            </div>

            <button
              onClick={() => onNavigate("hotels")}
              className="text-pink-600 hover:text-pink-500 flex items-center space-x-2 font-semibold"
            >
              <span>View All</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                onClick={() => onNavigate("hotels")}
                className="group cursor-pointer"
              >
                <div className="relative h-52 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.hotelCount} hotels</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-16 bg-gradient-to-b from-pink-100 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Hotels ⭐</h2>
              <p className="text-gray-700">Handpicked stays for your perfect trip</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredHotels.map((hotel) => (
              <div key={hotel.id} className="hover:scale-105 transition duration-300">
                <HotelCard hotel={hotel} onSelect={handleHotelSelect} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Top Amenities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find hotels with everything you need</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { icon: Wifi, name: 'Free WiFi', color: 'from-blue-500 to-cyan-500' },
              { icon: Coffee, name: 'Breakfast', color: 'from-amber-500 to-orange-500' },
              { icon: Dumbbell, name: 'Gym', color: 'from-red-500 to-pink-500' },
              { icon: Utensils, name: 'Restaurant', color: 'from-green-500 to-emerald-500' },
              { icon: Car, name: 'Parking', color: 'from-purple-500 to-indigo-500' },
              { icon: Waves, name: 'Pool', color: 'from-cyan-500 to-blue-500' },
              { icon: Shield, name: 'Security', color: 'from-gray-600 to-gray-800' },
              { icon: Heart, name: 'Spa', color: 'from-pink-500 to-rose-500' }
            ].map((amenity, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${amenity.color} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <amenity.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-900 text-center">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Sections */}
       <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        Loved By Travelers
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Join millions of happy guests worldwide
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: 'Nirpesh Dhungel',
          role: 'Business Traveler',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBcBuOI2YAVuKxBsYIh5tU-EE6RLji2dBB3Y2YxDGy1TswfiIcnmiUfsuM1F2NpSpdHA&usqp=CAU',
          rating: 5,
          text: 'Absolutely incredible! The booking process was so smooth and the hotel exceeded all expectations. Will definitely use again!',
        },
        {
          name: 'Ankit Adhikari',
          role: 'Vacation Enthusiast',
          image: 'https://images.unsplash.com/photo-1638899719048-91b22d3d9ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRyYXZlbGVycyUyMGhvdGVsfGVufDF8fHx8MTc3MDEyMjExNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          rating: 5,
          text: 'Found the perfect beachfront resort at an unbeatable price. Customer service was top-notch. Highly recommend HotelBook!',
        },
        {
          name: 'Bhagwan Rai',
          role: 'Digital Nomad',
          image: 'https://images.unsplash.com/photo-1766973116575-f6ab89f6dc62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGNvdXBsZSUyMHRyYXZlbHxlbnwxfHx8fDE3NzAxMjIxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          rating: 5,
          text: 'I book hotels weekly and HotelBook is my go-to platform. Best prices, instant confirmation, and amazing support team!',
        },
      ].map((testimonial, index) => (
        <div
          key={index}
          className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
        >
          <Quote className="absolute top-6 right-6 w-16 h-16 text-blue-200 opacity-50" />

          <div className="flex items-center mb-6">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="ml-4">
              <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>

          <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed italic">
            "{testimonial.text}"
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

       
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose HotelBook?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience hassle-free booking with benefits designed for you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-16 py-16 bg-gradient-to-b from-pink-50 via-pink-100 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-8 text-gray-800">Frequently Asked Questions ❓</h2>
          <div className="space-y-4 text-left">
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition cursor-pointer">
              <p className="font-semibold">✔ Check-in time?</p>
              <p className="text-gray-600">Check-in starts from 12:00 PM.</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition cursor-pointer">
              <p className="font-semibold">✔ Free cancellation?</p>
              <p className="text-gray-600">Yes, free cancellation within 5 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsLetter />
    </div>
  );
};
