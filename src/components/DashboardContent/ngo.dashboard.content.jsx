import React from "react";
import { AnimationWrapper } from "../../common";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

const NGODashboardContent = () => {
    const donationTrends = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Donations Received',
                data: [12000, 19000, 15000, 25000, 22000, 30000],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.08)',
                tension: 0.4,
                fill: true
            }
        ]
    };
    const campaignPerformance = [
        {
            label: 'Campaign Performance',
            data: [65, 25, 10],
            backgroundColor: [
                '#22c55e',
                '#2563eb',
                '#fb923c'
            ],
            borderColor: [
                '#22c55e',
                '#2563eb',
                '#fb923c'
            ],
            borderWidth: 2,
            borderJoinStyle: 'round',
        }
    ];
    const activities = [
        {
            icon: '💰',
            color: 'bg-green-100 text-green-600',
            border: 'border-green-400',
            title: 'New donation received',
            desc: '₹5,000 from John Doe for "Education for All" campaign',
            time: '2 hours ago',
        },
        {
            icon: '📊',
            color: 'bg-blue-100 text-blue-600',
            border: 'border-blue-400',
            title: 'Campaign approved',
            desc: '"Clean Water Initiative" campaign has been approved',
            time: '1 day ago',
        },
        {
            icon: '📝',
            color: 'bg-orange-100 text-orange-600',
            border: 'border-orange-400',
            title: 'Impact report submitted',
            desc: 'Monthly impact report for "Health Care" campaign',
            time: '3 days ago',
        },
        {
            icon: '💬',
            color: 'bg-purple-100 text-purple-600',
            border: 'border-purple-400',
            title: 'New message received',
            desc: 'Message from donor regarding "Education for All" campaign',
            time: '5 days ago',
        },
    ];
    return (
        <AnimationWrapper>
            <main className="flex flex-col gap-10 border-t-[1px] py-10 border-gray-200 mt-4 mb-6 px-2 md:px-0">
                {/* Stats Cards */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            label: 'Total Donations',
                            value: '₹123,450',
                            sub: '+12% this month',
                            icon: '💰',
                            color: 'bg-blue-500',
                        },
                        {
                            label: 'Active Campaigns',
                            value: '8',
                            sub: '3 pending approval',
                            icon: '📊',
                            color: 'bg-green-500',
                        },
                        {
                            label: 'Total Donors',
                            value: '1,234',
                            sub: '+45 this week',
                            icon: '👥',
                            color: 'bg-purple-500',
                        },
                        {
                            label: 'Available Balance',
                            value: '₹45,670',
                            sub: 'Ready for withdrawal',
                            icon: '🏦',
                            color: 'bg-orange-500',
                        },
                    ].map((card) => (
                        <div
                            key={card.label}
                            className="group bg-white hover:shadow-xl transition-shadow duration-200 rounded-2xl p-6 flex flex-col gap-3 border border-gray-100 shadow-md min-h-[140px]"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl ${card.color} bg-opacity-20 group-hover:scale-105 transition-transform`}>{card.icon}</div>
                                <div>
                                    <p className="text-gray-500 text-xs font-medium">{card.label}</p>
                                    <p className="text-2xl font-bold text-gray-800 leading-tight">{card.value}</p>
                                </div>
                            </div>
                            <p className="text-xs text-gray-400 mt-1">{card.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Charts Section */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Donation Trends Chart */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col gap-2 min-h-[320px]">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold text-gray-700">Donation Trends</h3>
                            <Link to={'/ngo-dashboard/donations'} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                View Details →
                            </Link>
                        </div>
                        <div className="flex-1 flex items-center">
                            <Line
                                data={donationTrends}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: { display: false },
                                        tooltip: { enabled: true },
                                    },
                                    scales: {
                                        x: {
                                            title: { display: true, text: 'Month', color: '#64748b', font: { size: 12 } },
                                            grid: { display: false },
                                        },
                                        y: {
                                            beginAtZero: true,
                                            title: { display: true, text: 'Amount (₹)', color: '#64748b', font: { size: 12 } },
                                            ticks: {
                                                callback: function(value) {
                                                    return '₹' + value.toLocaleString();
                                                },
                                                color: '#64748b',
                                            },
                                            grid: { color: '#f1f5f9' },
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                    {/* Campaign Performance Chart */}
                    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col gap-2 min-h-[320px]">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold text-gray-700">Campaign Performance</h3>
                            <Link to={'/ngo-dashboard/campaigns'} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                View All →
                            </Link>
                        </div>
                        <div className="flex-1 flex items-center">
                            <Doughnut
                                data={{
                                    labels: ['Successful', 'In Progress', 'Pending'],
                                    datasets: campaignPerformance,
                                }}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            position: 'bottom',
                                            labels: {
                                                usePointStyle: true,
                                                pointStyle: 'circle',
                                                boxWidth: 10,
                                                padding: 20,
                                                color: '#334155',
                                                font: { size: 13, weight: 'bold' },
                                            },
                                        },
                                        tooltip: { enabled: true },
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Recent Activities Timeline */}
                <div className="w-full bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-700">Recent Activities</h3>
                        <Link to={'/ngo-dashboard/notifications'} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            View All →
                        </Link>
                    </div>
                    <ol className="relative border-l-2 border-gray-200 ml-4 space-y-0">
                        {activities.map((act, idx) => (
                            <li key={idx} className="mb-8 ml-6 last:mb-0">
                                <span className={`absolute -left-5 flex items-center justify-center w-10 h-10 rounded-full ring-4 ring-white ${act.color} text-xl border-2 ${act.border}`}>{act.icon}</span>
                                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold text-gray-800">{act.title}</p>
                                        <span className="text-xs text-gray-400">{act.time}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">{act.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </main>
        </AnimationWrapper>
    );
};

export default NGODashboardContent; 