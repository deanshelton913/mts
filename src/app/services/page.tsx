import Link from 'next/link';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ServicesPage() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: [
        'Responsive design for all devices',
        'E-commerce solutions',
        'Content management systems',
        'Custom web applications',
        'Performance optimization',
        'SEO-friendly development',
      ],
      icon: '🌐',
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology planning and implementation to align with your business goals.',
      features: [
        'Technology assessment and planning',
        'Infrastructure design and implementation',
        'Security audits and recommendations',
        'Cloud migration strategies',
        'Digital transformation consulting',
        'Technology roadmap development',
      ],
      icon: '💡',
    },
    {
      title: 'Technical Support',
      description: 'Ongoing support and maintenance to keep your systems running smoothly and efficiently.',
      features: [
        '24/7 system monitoring',
        'Proactive maintenance',
        'Troubleshooting and problem resolution',
        'Software updates and patches',
        'Backup and disaster recovery',
        'Help desk support',
      ],
      icon: '🔧',
    },
    {
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation and online presence optimization.',
      features: [
        'Digital marketing strategy',
        'Social media management',
        'Content strategy and creation',
        'Analytics and reporting',
        'Conversion optimization',
        'Brand development',
      ],
      icon: '📈',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We start by understanding your business needs, current technology stack, and goals.',
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive technology strategy tailored to your business objectives.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the plan with attention to detail and best practices.',
    },
    {
      step: '04',
      title: 'Support & Optimization',
      description: 'Provide ongoing support and continuously optimize for better performance.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive technical solutions designed to help small businesses establish a strong online presence and leverage technology for growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and long-term success for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Small Businesses Choose Us
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p className="text-gray-300">20+ years of experience in the technology industry, with deep understanding of small business needs.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local Focus</h3>
                  <p className="text-gray-300">Based in Mukilteo, we understand the local business landscape and provide personalized service.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
                  <p className="text-gray-300">Competitive pricing designed for small business budgets without compromising quality.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                  <p className="text-gray-300">We don't just build solutions - we provide ongoing support and maintenance.</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Let's discuss your project and how we can help your business succeed with the right technical solutions.
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
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you need a new website, IT consulting, or ongoing technical support, we're here to help your business thrive.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center"
          >
            Get Your Free Quote
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
