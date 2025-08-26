'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircleIcon, ArrowRightIcon, EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export default function ContactSuccessPage() {
  useEffect(() => {
    // Track conversion event when page loads
    if (typeof window !== 'undefined' && window.gtag) {
      // Google Ads conversion (if you have a conversion action set up)
      window.gtag('event', 'conversion', {
        send_to: 'AW-1005222920/contact_form_submission',
        value: 1.0,
        currency: 'USD',
      });
      
      // Google Analytics 4 custom event
      window.gtag('event', 'contact_form_submission', {
        event_category: 'Contact',
        event_label: 'Contact Form Success',
        value: 1,
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <CheckCircleIcon className="h-24 w-24 mx-auto text-green-400 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thank You!
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Your message has been sent successfully. We&apos;re excited to work with you!
            </p>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here&apos;s what you can expect from us in the coming days.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Confirmation Email</h3>
              <p className="text-gray-600">
                You&apos;ll receive a confirmation email within the next few minutes with a copy of your message and our contact information.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Response</h3>
              <p className="text-gray-600">
                Our team will review your request and get back to you within 24 hours with next steps and a personalized consultation plan.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Planning</h3>
              <p className="text-gray-600">
                We&apos;ll schedule a detailed consultation to discuss your project requirements, timeline, and budget to create the perfect solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Need to Reach Us Sooner?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                While we&apos;ll get back to you quickly, here are other ways to get in touch if you need immediate assistance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg mr-4">
                    <EnvelopeIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us Directly</h3>
                    <a 
                      href="mailto:info@mukilteotech.com" 
                      className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                      info@mukilteotech.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg mr-4">
                    <PhoneIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                    <a 
                      href="tel:+1-425-555-0123" 
                      className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                      (425) 555-0123
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg mr-4">
                    <ClockIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM PST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">While You Wait</h3>
              <p className="text-purple-100 mb-6">
                Explore our services and learn more about how we can help transform your business with the right technology solutions.
              </p>
              <div className="space-y-4">
                <Link
                  href="/services"
                  className="block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 text-center"
                >
                  View Our Services
                </Link>
                <Link
                  href="/about"
                  className="block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200 text-center"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to questions you might have about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly will you respond?</h3>
              <p className="text-gray-600">
                We guarantee a response within 24 hours during business days. Most inquiries receive a response within 4-6 hours.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What information do you need from me?</h3>
              <p className="text-gray-600">
                We&apos;ll need details about your project goals, timeline, budget, and any existing systems or websites you have.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer free consultations?</h3>
              <p className="text-gray-600">
                Yes! We offer a free initial consultation to discuss your project and provide recommendations without any obligation.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I need to make changes to my request?</h3>
              <p className="text-gray-600">
                No problem! Simply reply to our response email or give us a call. We&apos;re flexible and happy to adjust our approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            While you wait for our response, take a look at our services and start planning your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Explore Services
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Learn About Us
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
