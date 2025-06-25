import React, { useState } from 'react'

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certificates = [
    {
      id: 1,
      title: "Flutter Development",
      issuer: "Flutter Team",
      date: "2024",
      image: "/Certificate/Flutter.jpg",
      description: "Comprehensive Flutter development certification covering mobile app development with Dart.",
      pdfUrl: "/Certificate/Flutter_for_beginners.pdf",
      category: "Mobile Development"
    },
    {
      id: 2,
      title: "Apps With Flutter for Beginners",
      issuer: "The Net Ninja",
      date: "2024",
      image: "/Certificate/92201703037_Apps With flutter for begginers by the Net NInja.jpeg",
      description: "Complete beginner's guide to building mobile applications with Flutter framework.",
      pdfUrl: "/Certificate/92201703037_Apps With flutter for begginers.pdf",
      category: "Mobile Development"
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      issuer: "Coursera",
      date: "2024",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop",
      description: "Comprehensive course on machine learning algorithms and data science principles.",
      pdfUrl: "/Certificate/Machine_learning.pdf",
      category: "Data Science"
    },
    {
      id: 4,
      title: "Android Fundamentals",
      issuer: "Google Developers",
      date: "2024",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      description: "Core Android development concepts and best practices for mobile app creation.",
      pdfUrl: "/Certificate/Android_Fundamentals.pdf",
      category: "Mobile Development"
    },
    {
      id: 5,
      title: "MU FEST Participation",
      issuer: "Manipal University",
      date: "2024",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
      description: "Participation certificate for MU FEST technical festival showcasing innovative projects.",
      pdfUrl: "/Certificate/MU_FEST.pdf",
      category: "Events & Competitions"
    },
    {
      id: 6,
      title: "Hack The Mountain",
      issuer: "Hackathon Organizers",
      date: "2024",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      description: "Achievement certificate for participating in the prestigious Hack The Mountain hackathon.",
      pdfUrl: "/Certificate/hack_the_mountain.pdf",
      category: "Hackathons"
    },
    {
      id: 7,
      title: "Web Nexus Certificate",
      issuer: "Web Development Institute",
      date: "2024",
      image: "/Certificate/Ranvijay Singh.png",
      description: "Advanced web development certification covering modern frameworks and technologies.",
      pdfUrl: "/Certificate/Ranvijay_Singh_Web_Nexus.pdf",
      category: "Web Development"
    }
  ]

  const categories = [...new Set(certificates.map(cert => cert.category))]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredCertificates = selectedCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory)

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate)
  }

  const closeModal = () => {
    setSelectedCertificate(null)
  }

  return (
    <section id="Certificate" className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            A collection of my professional certifications and achievements that demonstrate my commitment to continuous learning and skill development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'All'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-600 shadow-md'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => openCertificate(certificate)}
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white dark:bg-slate-600 rounded-full p-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-full">
                    {certificate.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-slate-400">{certificate.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {certificate.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-slate-300 mb-2">
                  Issued by <span className="font-medium">{certificate.issuer}</span>
                </p>
                
                <p className="text-gray-700 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                  {certificate.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(certificate.pdfUrl, '_blank')
                    }}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      openCertificate(certificate)
                    }}
                    className="flex-1 border border-blue-600 text-blue-600 dark:text-blue-400 py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Counter */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-8 bg-white dark:bg-slate-700 rounded-full px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{certificates.length}</div>
              <div className="text-sm text-gray-600 dark:text-slate-300">Total Certificates</div>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-slate-500"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{categories.length}</div>
              <div className="text-sm text-gray-600 dark:text-slate-300">Categories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Certificate View */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{selectedCertificate.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                
                <div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-slate-300">Issuer</h4>
                      <p className="text-gray-800 dark:text-white">{selectedCertificate.issuer}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-slate-300">Date</h4>
                      <p className="text-gray-800 dark:text-white">{selectedCertificate.date}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-slate-300">Category</h4>
                      <span className="inline-block text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedCertificate.category}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-slate-300">Description</h4>
                      <p className="text-gray-800 dark:text-white">{selectedCertificate.description}</p>
                    </div>
                    
                    <div className="pt-4">
                      <a
                        href={selectedCertificate.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Certificate
                      </a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
      )}
    </section>
  )
}

export default Certificate