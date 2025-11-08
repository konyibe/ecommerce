// src/components/Footer.jsx
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">E-Commerce</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your one-stop destination for premium fashion and lifestyle
            products.
          </p>
        </div>

        {/* Column 2: Shop */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-emerald-400 transition">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition">
                Accessories
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-emerald-400 transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-emerald-400 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-emerald-400 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-emerald-400 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-emerald-400 transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} E-Commerce. All rights reserved.
      </div>
    </footer>
  );
}
