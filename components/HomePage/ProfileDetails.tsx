import React from 'react';
import CodeHeroSection from './Hero';

const ProfileDetails = () => {
  return (
    <div className="min-h-screen">
    <CodeHeroSection />
    <div className="max-w-2xl mx-auto py-12 px-4">
    <div className="rounded-lg shadow-lg p-8">
    <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
    <h3 className="text-lg font-semibold mb-2">Name:</h3>
    <p className="text-slate-600">Your Full Name</p>
    </div>
    <div>
    <h3 className="text-lg font-semibold mb-2">Email:</h3>
    <p className="text-slate-600">your.email@example.com</p>
    </div>
    <div>
    <h3 className="text-lg font-semibold mb-2">Phone:</h3>
    <p className="text-slate-600">+1 (555) 123-4567</p>
    </div>
    <div>
    <h3 className="text-lg font-semibold mb-2">Location:</h3>
    <p className="text-slate-600">City, Country</p>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default ProfileDetails;