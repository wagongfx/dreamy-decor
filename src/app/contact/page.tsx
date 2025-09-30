// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="p-10 max-w-2xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-6">Book Your Dream Event</h1>
      <p className="text-center text-gray-600 mb-8">Tell us about your event and we will get back to you with a quote!</p>
      
      <form className="space-y-4 bg-white p-8 rounded-xl shadow-2xl border border-pink-200">
        <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"/>
        <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"/>
        <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"/>
        <select className="w-full p-3 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500">
            <option>Birthday Party</option>
            <option>Baby Shower</option>
            <option>Custom Event</option>
        </select>
        <textarea placeholder="Tell us more about your theme and date" rows={4} className="w-full p-3 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"></textarea>
        <button type="submit" className="w-full bg-pink-600 text-white font-bold py-3 rounded-lg hover:bg-pink-700 transition duration-200">
          Get a Free Quote
        </button>
      </form>
    </div>
  );
}