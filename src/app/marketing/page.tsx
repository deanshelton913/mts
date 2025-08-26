'use client';

import { BusinessHandout } from '@/components/BusinessHandout';

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Marketing Materials
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional business materials showcasing our technical expertise and enterprise solutions
          </p>
        </div>

        {/* Marketing Material Display */}
        <div className="flex justify-center">
          <BusinessHandout />
        </div>

      </div>
    </div>
  );
}
