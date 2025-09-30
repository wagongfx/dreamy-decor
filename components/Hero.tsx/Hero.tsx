import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl shadow-md">
      <h2 className="text-4xl font-extrabold">Make Every Moment Dreamy ✨</h2>
      <p className="mt-4 text-gray-700">Birthday, Baby Shower, Anniversary — Beautiful décor, stress-free setup.</p>
      <div className="mt-6 flex justify-center gap-4">
        <Link href="/services" className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700">See Packages</Link>
        <Link href="/contact" className="px-6 py-2 border border-purple-600 rounded-lg text-purple-600 hover:bg-purple-50">Contact Us</Link>
      </div>
    </section>
  )
}
