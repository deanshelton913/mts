'use client';

import React from 'react';
import Image from 'next/image';
import { Shield, Cloud, Users, Phone, Mail, Globe, MapPin, CheckCircle, Server, Database, Lock, Settings, Monitor, Network, ShoppingCart, CreditCard, BarChart3, Calendar, FileText, Smartphone } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';

export function BusinessHandout() {
  return (
    <div className="w-full max-w-[5.5in] mx-auto bg-white shadow-lg print:shadow-none print:w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-blue-900 text-white p-6">
        <div className="grid grid-cols-2 gap-6 items-center">
          {/* Left Column - Logo and Taglines */}
          <div className="flex flex-col space-y-4">
            <div className="flex justify-center">
              <Image 
                src="/logo-cropped4.png" 
                alt="Mukilteo Technical Solutions Logo" 
                width={240}
                height={120}
                className="object-contain"
              />
            </div>
          </div>
          {/* Right Column - CTA Button */}
          <div className="flex justify-center items-center h-full">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 rounded-lg text-sm font-medium shadow-lg transform hover:scale-105 transition-transform">
              Free Consultation
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">

        {/* Our Solutions */}
        <div className="mb-8 bg-slate-50 p-6 rounded-lg border border-slate-200">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-slate-600 text-sm">Professional Websites</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-slate-600 text-sm">Digital Marketing</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-slate-600 text-sm">Point of Sale Systems</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-slate-600 text-sm">Customer Management</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-slate-600 text-sm">Inventory Tracking</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-slate-600 text-sm">Ongoing Support</span>
            </div>
          </div>
        </div>
        {/* Introductory Offer */}
        <div className="mb-8 -mx-6">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg border-4 border-yellow-400 shadow-xl">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">🎉 NEW CLIENT SPECIAL 🎉</div>
              <div className="text-5xl font-bold mb-2">$497</div>
              <div className="text-xl mb-4">Complete Website Setup</div>
              <div className="text-sm mb-6 opacity-90">
                Professional website + basic SEO + contact forms + mobile optimization
              </div>
              <div className="text-lg font-semibold">
                <span className="line-through opacity-75">$1,997</span>
                <span className="ml-2 text-yellow-300">SAVE $1,500</span>
              </div>
              <div className="text-xs mt-2 opacity-75">Limited time offer for first 10 clients</div>
            </div>
          </div>
        </div>
        


       

      

        {/* Service Area */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-slate-900">Serving Local Businesses</span>
          </div>
          <p className="text-slate-600 text-sm">
            Mukilteo • Everett • Lynnwood • Edmonds • Snohomish • Surrounding Areas
          </p>
          <p className="text-slate-500 text-xs mt-1">On-site and remote support available</p>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-blue-900 text-white p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Ready to Modernize Your Business?</h3>
          <p className="text-slate-200 text-sm mb-4">Free consultation - Let&apos;s discuss your technology needs</p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-300" />
              <span>(425) 905-4469</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-300" />
              <span>info@mukilteotech.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-blue-300" />
              <span>www.mukilteotech.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
