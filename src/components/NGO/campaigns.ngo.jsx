import React, { useState } from "react";
import { AnimationWrapper } from "../../common";

const CampaignsNGO = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [showCreateModal, setShowCreateModal] = useState(false);

    const campaigns = [
        {
            id: 1,
            title: "Education for All",
            description: "Providing quality education to underprivileged children in rural areas",
            target: 500000,
            raised: 350000,
            status: "active",
            category: "Education",
            startDate: "2024-01-15",
            endDate: "2024-06-15",
            donors: 234,
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400"
        },
        {
            id: 2,
            title: "Clean Water Initiative",
            description: "Building water wells and providing clean drinking water to communities",
            target: 300000,
            raised: 180000,
            status: "active",
            category: "Health",
            startDate: "2024-02-01",
            endDate: "2024-07-01",
            donors: 156,
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400"
        },
        {
            id: 3,
            title: "Medical Camp",
            description: "Free medical checkup and medicine distribution for rural communities",
            target: 200000,
            raised: 200000,
            status: "completed",
            category: "Health",
            startDate: "2024-01-01",
            endDate: "2024-03-01",
            donors: 89,
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400"
        },
        {
            id: 4,
            title: "Tree Plantation Drive",
            description: "Planting 10,000 trees to combat climate change",
            target: 150000,
            raised: 75000,
            status: "pending",
            category: "Environment",
            startDate: "2024-03-01",
            endDate: "2024-08-01",
            donors: 45,
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'active': return 'bg-green-100 text-green-800';
            case 'completed': return 'bg-blue-100 text-blue-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getProgressColor = (raised, target) => {
        const percentage = (raised / target) * 100;
        if (percentage >= 80) return 'bg-green-500';
        if (percentage >= 50) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    const filteredCampaigns = campaigns.filter(campaign => {
        if (activeTab === 'all') return true;
        return campaign.status === activeTab;
    });

    return (
        <AnimationWrapper>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Campaign Management</h2>
                        <p className="text-gray-600">Manage your fundraising campaigns</p>
                    </div>
                    <button
                        onClick={() => setShowCreateModal(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
                    >
                        <span>+</span>
                        Create Campaign
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                    {['all', 'active', 'pending', 'completed'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-md font-medium text-sm capitalize transition-colors ${
                                activeTab === tab
                                    ? 'bg-white text-blue-600 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Campaigns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCampaigns.map((campaign) => (
                        <div key={campaign.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                            <div className="relative">
                                <img
                                    src={campaign.image}
                                    alt={campaign.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-3 right-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                                        {campaign.status}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-blue-600 font-medium">{campaign.category}</span>
                                    <span className="text-sm text-gray-500">{campaign.donors} donors</span>
                                </div>
                                
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{campaign.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{campaign.description}</p>
                                
                                {/* Progress Bar */}
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-600">Progress</span>
                                        <span className="text-gray-800 font-medium">
                                            {Math.round((campaign.raised / campaign.target) * 100)}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${getProgressColor(campaign.raised, campaign.target)}`}
                                            style={{ width: `${Math.min((campaign.raised / campaign.target) * 100, 100)}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between text-sm mt-1">
                                        <span className="text-gray-600">₹{campaign.raised.toLocaleString()}</span>
                                        <span className="text-gray-600">₹{campaign.target.toLocaleString()}</span>
                                    </div>
                                </div>
                                
                                {/* Campaign Dates */}
                                <div className="text-xs text-gray-500 mb-4">
                                    <p>Start: {new Date(campaign.startDate).toLocaleDateString()}</p>
                                    <p>End: {new Date(campaign.endDate).toLocaleDateString()}</p>
                                </div>
                                
                                {/* Action Buttons */}
                                <div className="flex space-x-2">
                                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium">
                                        Edit
                                    </button>
                                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md text-sm font-medium">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Create Campaign Modal */}
                {showCreateModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold">Create New Campaign</h3>
                                <button
                                    onClick={() => setShowCreateModal(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>
                            
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Campaign Title
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter campaign title"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Description
                                    </label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Describe your campaign"
                                    ></textarea>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Target Amount
                                        </label>
                                        <input
                                            type="number"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="₹"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Category
                                        </label>
                                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option>Education</option>
                                            <option>Health</option>
                                            <option>Environment</option>
                                            <option>Poverty</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Start Date
                                        </label>
                                        <input
                                            type="date"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            End Date
                                        </label>
                                        <input
                                            type="date"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex justify-end space-x-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowCreateModal(false)}
                                        className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                    >
                                        Create Campaign
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </AnimationWrapper>
    );
};

export default CampaignsNGO; 