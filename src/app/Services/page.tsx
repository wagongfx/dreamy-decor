// src/app/services/page.tsx
export default function ServicesPage() {
  return (
    <div className="p-10 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">Choose Your Dream Package</h1>
      
      <div className="space-y-6">
        <div className="p-6 border-2 border-pink-300 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-pink-700">1. Silver Celebration (Starting at ₹5,000)</h2>
          <p className="text-gray-700 mt-2">Includes: Basic Backdrop, 100 Balloons, Cake Table setup.</p>
        </div>
        
        <div className="p-6 border-2 border-pink-500 rounded-lg shadow-lg bg-pink-50">
          <h2 className="text-2xl font-semibold text-pink-800">2. Gold Glamour (Starting at ₹10,000)</h2>
          <p className="text-gray-700 mt-2">Includes: Custom Theme Backdrop, Premium Balloons, LED Lights, Props, and Entrance Decor.</p>
        </div>
      </div>
    </div>
  );
}