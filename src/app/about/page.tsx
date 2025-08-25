import Link from 'next/link';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.',
      icon: '⭐',
    },
    {
      title: 'Integrity',
      description: 'Honest, transparent communication and ethical business practices are the foundation of our relationships.',
      icon: '🤝',
    },
    {
      title: 'Innovation',
      description: 'We stay current with the latest technologies and best practices to provide cutting-edge solutions.',
      icon: '💡',
    },
    {
      title: 'Partnership',
      description: 'We view our clients as long-term partners, invested in their success and growth.',
      icon: '🚀',
    },
  ];

  const expertise = [
    'Web Development & Design',
    'E-commerce Solutions',
    'Cloud Infrastructure',
    'Cybersecurity',
    'Digital Marketing',
    'IT Strategy & Consulting',
    'System Integration',
    'Technical Support',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Mukilteo Technical Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Helping small businesses thrive in the digital age with 20+ years of technology expertise and a passion for innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded with a vision to bridge the technology gap for small businesses, Mukilteo Technical Solutions was born from the recognition that many local businesses struggle to establish and maintain a strong online presence.
                </p>
                <p>
                  With over two decades of experience in the technology industry, our founder has witnessed firsthand how the right technical solutions can transform a business. From simple websites to complex digital transformations, we&apos;ve helped countless small businesses leverage technology to grow and compete in today&apos;s digital marketplace.
                </p>
                <p>
                  Based in Mukilteo, Washington, we&apos;re proud to serve our local community and surrounding areas. We understand the unique challenges that small businesses face and are committed to providing personalized, cost-effective solutions that drive real results.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 mb-6">
                To empower small businesses with the technical solutions they need to succeed in the digital economy, providing expert guidance, reliable service, and innovative technology that drives growth and competitive advantage.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100">
                To be the trusted technology partner for small businesses, helping them navigate the digital landscape with confidence and achieve sustainable growth through innovative technical solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-200">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                20+ Years of Technology Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our deep understanding of technology trends, business needs, and industry best practices allows us to deliver solutions that are not only technically sound but also strategically aligned with your business objectives.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Experience Matters</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Proven Track Record</h4>
                    <p className="text-gray-600">Successfully delivered hundreds of projects across various industries.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Industry Knowledge</h4>
                    <p className="text-gray-600">Deep understanding of small business challenges and technology solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Future-Proof Solutions</h4>
                    <p className="text-gray-600">Technology choices that scale with your business and adapt to changing needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Local Business, Local Focus
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                As a Mukilteo-based company, we&apos;re deeply invested in the success of our local business community. We understand the unique challenges and opportunities that small businesses in our area face.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Personal, face-to-face service</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Understanding of local market dynamics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Quick response times and local support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Community investment and partnerships</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h3>
              <p className="text-blue-100 mb-6">
                Let&apos;s discuss how we can help your business leverage technology for growth and success. We&apos;re here to be your trusted technology partner.
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center"
              >
                Schedule a Consultation
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s Build the Future Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the many small businesses that have transformed their operations and grown their success with our technical solutions.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center"
          >
            Get Started Today
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
