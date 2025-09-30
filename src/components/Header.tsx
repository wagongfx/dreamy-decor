// src/components/Header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white p-4 shadow-md border-b border-pink-100 sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* Brand Name */}
        <Link href="/" className="text-3xl font-extrabold text-pink-600 hover:text-pink-800 transition duration-300 tracking-wider">
          Dreamy Decor
        </Link>
        
        {/* Links */}
        <div className="space-x-6">
          <Link href="/gallery" className="text-gray-600 hover:text-pink-600 font-medium text-lg transition duration-200">
            gallery
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-pink-600 font-medium text-lg transition duration-200">
            Services
          </Link>
          <Link href="/contact" className="text-white bg-pink-500 px-4 py-2 rounded-full hover:bg-pink-600 font-bold transition duration-200">
            Book Now
          </Link>
        </div>
      </nav>
    </header>
  );
}