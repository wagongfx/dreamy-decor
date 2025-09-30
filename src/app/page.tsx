// src/app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      
      {/* Home Page Content */}
      <h1 className="text-6xl font-extrabold text-pink-600 mb-6">
        Creating Dreamy Moments
      </h1>
      <p className="text-xl text-gray-700 mb-10">
        We specialize in beautiful, custom decorations for birthdays, baby showers, and special events.
      </p>
      
      {/* Abhi ke liye ek simple Image Placeholder */}
      <div className="w-full max-w-4xl h-96 bg-gray-200 flex items-center justify-center rounded-lg shadow-xl">
        <span className="text-gray-500 text-2xl">Main Event Photo Yahan Aayegi</span>
      </div>
      
    </main>
  );
}