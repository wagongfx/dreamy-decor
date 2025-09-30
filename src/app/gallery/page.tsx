// src/app/gallery/page.tsx

import Image from 'next/image'; // <-- Image component ko import kiya

// Yahaan tumhari photos ki list banegi. Filenames check karna!
const galleryPhotos = [
  // Tumhari files ke naam yahaan daalo:
  { id: 1, src: '/gallery images/bday1.jpg', alt: 'Blue Themed Birthday Decor' },
  { id: 2, src: '/gallery images/bday2.jpg', alt: 'Custom Theme Party Setup' },
  { id: 3, src: '/gallery images/bday3.jpg', alt: 'Elegant Baby Shower Decor' },
  { id: 4, src: '/gallery images/bday4.jpg', alt: 'Kids Party Balloon Arch' },
  { id: 5, src: '/gallery images/bday5.jpg', alt: 'anniversary'},
  // ... jitni photos hain, utni entries aur daalna
];

export default function GalleryPage() {
  return (
    <div className="p-10 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">Our Beautiful Portfolio</h1>
      
      {/* Ab asli photo GRID yahaan banega */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryPhotos.map((photo) => (
          <div key={photo.id} className="relative aspect-square rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-300">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill={true} // Div ko cover karne ke liye
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
              priority={false} 
            />
          </div>
        ))}
      </div>
      
    </div>
  );
}