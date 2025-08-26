'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      icon: '🌐',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology planning and implementation for your business.',
      icon: '💡',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Technical Support',
      description: 'Ongoing support and maintenance to keep your systems running smoothly.',
      icon: '🔧',
      gradient: 'from-purple-600 to-indigo-500',
    },
    {
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation and online presence optimization.',
      icon: '📈',
      gradient: 'from-violet-500 to-purple-600',
    },
  ];

  const benefits = [
    '20+ years of industry experience',
    'Small business focused solutions',
    'Competitive pricing',
    'Local support and service',
    'Modern technology stack',
    'Ongoing maintenance and support',
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
            style={{ transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.1}px)` }}
          />
          <div 
            className="absolute top-40 right-20 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"
            style={{ transform: `translateY(${scrollY * 0.2}px) translateX(${-scrollY * 0.1}px)` }}
          />
          <div 
            className="absolute bottom-40 left-1/4 w-40 h-40 bg-purple-600/20 rounded-full blur-xl"
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          />
        </div>

        {/* Diagonal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/20 to-purple-800/40" />
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="mb-6">
            <SparklesIcon className="h-12 w-12 mx-auto mb-4 text-purple-300 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="block bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Technical Solutions
            </span>
            <span className="block bg-gradient-to-r from-purple-200 to-purple-300 bg-clip-text text-transparent">
              for the Future
            </span>
          </h1>
          <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Helping small businesses thrive in the digital age with professional technical solutions and 20+ years of industry expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center">
                Get Started Today
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border-2 border-purple-300/50 text-white rounded-full font-semibold hover:bg-purple-500/10 hover:border-purple-300 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
          style={{ 
            opacity: Math.max(0, 1 - (scrollY / 500)),
            transform: `translateX(-50%) translateY(${Math.max(0, 20 - (scrollY / 10))}px)`
          }}
        >
          <div className="flex flex-col items-center text-purple-300 text-sm">
            <span className="mb-2 opacity-70 text-white drop-shadow-lg">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-purple-300/50 rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
              <div className="w-1 h-3 bg-purple-300/70 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Services Section */}
      <section className="relative py-24 bg-white">
        {/* Diagonal Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 transform -skew-y-6 origin-top-left" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Innovative
              </span>
              <br />
              Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From web development to IT consulting, we provide the technical foundation your business needs to succeed online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Stats Section */}
      <section className="relative py-24 bg-gradient-to-r from-purple-900 to-blue-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)',
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollY * 0.2}px)` 
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
            <div className="group">
              <div className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                20+
              </div>
              <div className="text-xl text-purple-200">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                24h
              </div>
              <div className="text-xl text-purple-200">Avg. Response Time</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-xl text-purple-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us with Diagonal Design */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-purple-50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-20" />
              <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Why Choose
                  <span className="block bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                    Mukilteo Tech?
                  </span>
                </h2>
                <p className="text-lg text-purple-100 mb-8 leading-relaxed">
                  With over two decades of experience in the technology industry, we understand the unique challenges small businesses face. Our solutions are designed to be scalable, reliable, and cost-effective.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                        <CheckCircleIcon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-purple-100 group-hover:text-white transition-colors">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20" />
              <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
                <p className="text-purple-100 mb-8 leading-relaxed">
                  Let&apos;s discuss how we can help your business establish a strong online presence and leverage technology for growth.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-200 group"
                >
                  Schedule a Consultation
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bold CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Transform
            </span>
            <br />
            Your Business Today
          </h2>
          <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-4xl mx-auto">
            Don&apos;t let technology hold your business back. Partner with experts who understand your needs and can deliver results.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-6 rounded-full text-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center">
              Get Your Free Consultation
              <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </section>
    </div>
  );
}
