// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-pink-900 text-white p-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xl font-bold mb-2">Dreamy Decor</p>
        <p className="text-sm mb-4">Creating magical moments for every celebration.</p>
        
        <div className="text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dreamy Decor. All rights reserved.</p>
          <p>Made with ❤️ by [Ayush khare]</p>
        </div>
      </div>
    </footer>
  );
}