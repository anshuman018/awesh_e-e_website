const brands = [
  { name: 'V GUARD', logo: '/logos/V GUARD.png' },
  { name: 'Haier', logo: '/logos/Haier.jpeg' },
  { name: 'Philips', logo: '/logos/phlips.png' },
  { name: 'Xiaomi', logo: '/logos/mi.png' },
  { name: 'Sansui', logo: '/logos/Sansui.png' },
  { name: 'Hyundai', logo: '/logos/Hyundai.jpeg' },
  { name: 'Intex', logo: '/logos/Intex.jpeg' },
  { name: 'Goldmedal', logo: '/public/logos/Goldmedal.png' },
];

export default function Brands() {
  return (
    <section id="brands" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Authorized Brands
              {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform -translate-y-2"></span> */}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are certified to repair and service all major electronic brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="h-32 flex items-center justify-center flex-col">
                <div className="h-16 flex items-center justify-center mb-4">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    className="max-h-16 max-w-full object-contain filter drop-shadow-sm" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextSibling) {
                        (e.currentTarget.nextSibling as HTMLElement).style.display = 'block';
                      }
                    }}
                  />
                </div>
                <span className="text-lg font-medium text-gray-800 text-center border-t border-gray-100 pt-3 w-full">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}