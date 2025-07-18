import React from 'react';
import { motion } from 'framer-motion';

const ngo = {
  name: "Helping Hands NGO",
  logo: "https://example.com/logo.png",
    isVerified: true,
    averageRatings: 4.5,
    totalRatings: 120,

    description: "Helping Hands is dedicated to improving the lives of underprivileged communities through education, healthcare, and sustainable development.",
    address: {
    street: "123 Charity Lane",
    city: "Kindness City",
    state: "Compassion State",
    country: "Goodwill Country"
    },
    establishedYear: 2005,
    category: ["Education", "Healthcare", "Sustainability"],
    projects: [
    { id: 1, name: "School Construction" },
    { id: 2, name: "Health Camp" },
    { id: 3, name: "Tree Plantation" }
    ],
    officialContactEmail: "contact@helpinghands.org",
    officialContactPhone: "+1 (555) 123-4567",
    website: "https://helpinghands.org"
};

const NgoDetailCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl w-full mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <img
          src={ngo.logo || '/placeholder-logo.png'}
          alt="NGO Logo"
          className="w-24 h-24 object-cover rounded-full border"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            {ngo.name}
            {ngo.isVerified && (
              <i className="flaticon-verified text-green-500 text-lg" title="Verified"></i>
            )}
          </h2>
          <div className="flex items-center text-gray-500 mt-1 text-sm">
            <i className="flaticon-star text-yellow-400 mr-1" />
            {ngo.averageRatings.toFixed(1)} / 5.0 ({ngo.totalRatings} ratings)
          </div>
          <p className="text-sm text-gray-600 mt-2">{ngo.description}</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div>
          <p className="text-sm text-gray-500 mb-1 font-semibold">Address</p>
          <p className="text-gray-700 text-sm flex items-center gap-2">
            <i className="flaticon-location" />
            {[ngo.address?.street, ngo.address?.city, ngo.address?.state, ngo.address?.country]
              .filter(Boolean)
              .join(', ')}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1 font-semibold">Established</p>
          <p className="text-gray-700 text-sm">{ngo.establishedYear || 'N/A'}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1 font-semibold">Category</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {ngo.category.map((cat, i) => (
              <span
                key={i}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1 font-semibold">Projects</p>
          <p className="text-gray-700 text-sm">{ngo.projects?.length || 0} projects</p>
        </div>
      </div>

      {/* Contact and Socials */}
      <div className="border-t mt-6 pt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        {ngo.officialContactEmail && (
          <p className="flex items-center gap-2 text-gray-600">
            <i className="flaticon-email" />
            {ngo.officialContactEmail}
          </p>
        )}
        {ngo.officialContactPhone && (
          <p className="flex items-center gap-2 text-gray-600">
            <i className="flaticon-phone-call" />
            {ngo.officialContactPhone}
          </p>
        )}
        {ngo.website && (
          <a
            href={ngo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <i className="flaticon-global" />
            Website
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default NgoDetailCard;
