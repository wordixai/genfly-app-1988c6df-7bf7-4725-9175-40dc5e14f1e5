import Image from "next/image";
import { Coffee, Croissant, Clock, MapPin, Phone } from "lucide-react";

const menuItems = [
  {
    name: "Espresso",
    description: "Rich and aromatic single shot espresso",
    price: "$3.50"
  },
  {
    name: "Cappuccino", 
    description: "Espresso with steamed milk and foam",
    price: "$4.50"
  },
  {
    name: "Avocado Toast",
    description: "Sourdough bread with avocado, cherry tomatoes and feta",
    price: "$8.50"
  },
  {
    name: "Blueberry Muffin",
    description: "Freshly baked with organic blueberries",
    price: "$3.75"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f5f0] text-[#3a3226]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Cafe interior"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">Brew & Bites</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Artisanal coffee and fresh pastries in a cozy atmosphere
          </p>
          <button className="bg-[#8b5a2b] hover:bg-[#6d4621] text-white font-medium py-3 px-8 rounded-full text-lg transition">
            View Menu
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Coffee beans"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in 2010, Brew & Bites started as a small coffee cart in downtown. 
              Today we're proud to serve our community with ethically sourced coffee 
              and locally baked goods in our cozy cafe space.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Coffee className="text-[#8b5a2b]" />
                <span>Specialty Coffee</span>
              </div>
              <div className="flex items-center gap-2">
                <Croissant className="text-[#8b5a2b]" />
                <span>Fresh Pastries</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-[#8b5a2b]" />
                <span>Free WiFi</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-[#8b5a2b]" />
                <span>Downtown Location</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-[#3a3226] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Menu</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-[#5d4e3d] pb-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium">{item.name}</h3>
                  <span className="text-[#d4a762] font-medium">{item.price}</span>
                </div>
                <p className="text-[#c9c0b5] mt-2">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="border-2 border-[#d4a762] text-[#d4a762] hover:bg-[#d4a762] hover:text-[#3a3226] font-medium py-2 px-8 rounded-full transition">
              Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="text-[#8b5a2b]" size={24} />
                <p>123 Coffee Street, Downtown</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-[#8b5a2b]" size={24} />
                <p>Mon-Fri: 7am - 7pm<br />Sat-Sun: 8am - 6pm</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#8b5a2b]" size={24} />
                <p>(555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215259926161!2d-73.9878449241646!3d40.74844097138978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689784291073!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}