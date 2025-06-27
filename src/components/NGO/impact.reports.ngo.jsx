import React, { useState } from "react";
import { AnimationWrapper } from "../../common";

const ImpactReportsNGO = () => {
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [selectedCampaign, setSelectedCampaign] = useState('');

    const campaigns = [
        { id: 1, name: "Education for All" },
        { id: 2, name: "Clean Water Initiative" },
        { id: 3, name: "Medical Camp" },
        { id: 4, name: "Tree Plantation Drive" }
    ];

    const impactReports = [
        {
            id: 1,
            campaign: "Education for All",
            title: "Monthly Progress Report - January 2024",
            description: "Successfully provided education to 150 children in rural areas. Built 2 new classrooms and distributed 300 books.",
            date: "2024-01-31",
            status: "published",
            beneficiaries: 150,
            photos: 8,
            documents: 2,
            impact: "High"
        },
        {
            id: 2,
            campaign: "Clean Water Initiative",
            title: "Water Well Completion Report",
            description: "Completed construction of 3 water wells serving 500 families. Water quality tests passed all standards.",
            date: "2024-01-28",
            status: "published",
            beneficiaries: 500,
            photos: 12,
            documents: 3,
            impact: "High"
        },
        {
            id: 3,
            campaign: "Medical Camp",
            title: "Health Camp Impact Assessment",
            description: "Conducted free medical checkups for 200 patients. Distributed medicines worth ₹50,000.",
            date: "2024-01-25",
            status: "draft",
            beneficiaries: 200,
            photos: 15,
            documents: 1,
            impact: "Medium"
        },
        {
            id: 4,
            campaign: "Tree Plantation Drive",
            title: "Tree Plantation Progress Update",
            description: "Planted 2,000 trees in the first phase. Community participation exceeded expectations.",
            date: "2024-01-20",
            status: "published",
            beneficiaries: 1000,
            photos: 20,
            documents: 2,
            impact: "Medium"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'published': return 'bg-green-100 text-green-800';
            case 'draft': return 'bg-yellow-100 text-yellow-800';
            case 'pending': return 'bg-blue-100 text-blue-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getImpactColor = (impact) => {
        switch (impact) {
            case 'High': return 'bg-green-100 text-green-800';
            case 'Medium': return 'bg-yellow-100 text-yellow-800';
            case 'Low': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <AnimationWrapper>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Impact Reports</h2>
                        <p className="text-gray-600">Share progress and impact stories with your donors</p>
                    </div>
                    <button
                        onClick={() => setShowUploadModal(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
                    >
                        <span>+</span>
                        Upload Report
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Total Reports</p>
                                <p className="text-2xl font-bold text-gray-800">{impactReports.length}</p>
                            </div>
                            <div className="text-3xl text-blue-600">📊</div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Published</p>
                                <p className="text-2xl font-bold text-green-600">
                                    {impactReports.filter(r => r.status === 'published').length}
                                </p>
                            </div>
                            <div className="text-3xl text-green-600">✅</div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Total Beneficiaries</p>
                                <p className="text-2xl font-bold text-purple-600">
                                    {impactReports.reduce((sum, report) => sum + report.beneficiaries, 0).toLocaleString()}
                                </p>
                            </div>
                            <div className="text-3xl text-purple-600">👥</div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Photos Uploaded</p>
                                <p className="text-2xl font-bold text-orange-600">
                                    {impactReports.reduce((sum, report) => sum + report.photos, 0)}
                                </p>
                            </div>
                            <div className="text-3xl text-orange-600">📸</div>
                        </div>
                    </div>
                </div>

                {/* Reports Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {impactReports.map((report) => (
                        <div key={report.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm text-blue-600 font-medium">{report.campaign}</span>
                                    <div className="flex space-x-2">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                                            {report.status}
                                        </span>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(report.impact)}`}>
                                            {report.impact}
                                        </span>
                                    </div>
                                </div>
                                
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{report.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{report.description}</p>
                                
                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                                    <div className="bg-gray-50 p-2 rounded">
                                        <p className="text-xs text-gray-500">Beneficiaries</p>
                                        <p className="font-semibold text-gray-800">{report.beneficiaries}</p>
                                    </div>
                                    <div className="bg-gray-50 p-2 rounded">
                                        <p className="text-xs text-gray-500">Photos</p>
                                        <p className="font-semibold text-gray-800">{report.photos}</p>
                                    </div>
                                    <div className="bg-gray-50 p-2 rounded">
                                        <p className="text-xs text-gray-500">Documents</p>
                                        <p className="font-semibold text-gray-800">{report.documents}</p>
                                    </div>
                                </div>
                                
                                <div className="text-xs text-gray-500 mb-4">
                                    Published: {new Date(report.date).toLocaleDateString()}
                                </div>
                                
                                {/* Action Buttons */}
                                <div className="flex space-x-2">
                                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium">
                                        View
                                    </button>
                                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md text-sm font-medium">
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Upload Report Modal */}
                {showUploadModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold">Upload Impact Report</h3>
                                <button
                                    onClick={() => setShowUploadModal(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>
                            
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Campaign
                                    </label>
                                    <select
                                        value={selectedCampaign}
                                        onChange={(e) => setSelectedCampaign(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select Campaign</option>
                                        {campaigns.map(campaign => (
                                            <option key={campaign.id} value={campaign.id}>
                                                {campaign.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Report Title
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter report title"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Description
                                    </label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Describe the impact and progress made"
                                    ></textarea>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Number of Beneficiaries
                                        </label>
                                        <input
                                            type="number"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="0"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Impact Level
                                        </label>
                                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Upload Photos
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                                        <div className="text-gray-500">
                                            <p>Drag and drop photos here, or click to select</p>
                                            <p className="text-sm">Maximum 10 photos, 5MB each</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Upload Documents
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                                        <div className="text-gray-500">
                                            <p>Drag and drop documents here, or click to select</p>
                                            <p className="text-sm">PDF, DOC, DOCX files only</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex justify-end space-x-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowUploadModal(false)}
                                        className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                    >
                                        Upload Report
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

export default ImpactReportsNGO; 