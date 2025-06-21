import React, { useState } from "react";
import { AnimationWrapper } from "../../common";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";

const DonorDashboardContent = () => {


    const donatedSector = [
        {
            label: 'Donated Sectors',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 4,
            borderJoinStyle: 'round',
        }
    ]

    return (
        <AnimationWrapper>
            <main className='flex max-lg:flex-col max-lg:justify-start max-lg:items-center gap-4 items-start border-t-[1px] py-8 border-gray-200 mt-4 mb-6 '>

                <div className="w-full max-sm:px-7 lg:mr-8 sm:w-1/2 lg:w-1/2 flex flex-col items-start  justify-center gap-4">
                    {/* <div className=" w-[250px] sm:w-[350px] lg:w-[400px] flex flex-col items-start  justify-center gap-4"> */}
                    <div className="flex w-full flex-col items-start justify-center gap-2">
                        <div className="text-xl w-full flex justify-between items-center  text-gray-600">
                            <span>Donations</span>
                            <Link to={'/donor-dashboard/donations'} className=" cursor-pointer rounded-md bg-[#F1F2F7] text-sm hover:text-gray-700 hover:shadow-lg font-semibold px-4 py-2 ">View Report</Link>
                        </div>
                        <p className="text-slate-700 text-2xl"><span className="text-2xl text-pretty font-medium tracking-wide mr-1">RUP</span>5,000.00</p>
                        <p className="text-gray-500 text-sm">Donoted from 1 to 12 Dec</p>

                    </div>
                    <Doughnut
                        data={{
                            labels: ['Education', 'Health', 'Environment'],
                            datasets: donatedSector,
                        }}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'bottom',
                                    align: 'center', // aligns the legend items horizontally
                                    labels: {
                                        usePointStyle: true,
                                        pointStyle: 'circle', // display dots instead of rectangles
                                        boxWidth: 10,
                                        padding: 20,
                                        color: 'black', // legend text color
                                        font: {
                                            size: 10, // legend text size
                                            weight: 'bold', // legend text weight
                                        }
                                    },

                                },
                                title: {
                                    display: false, // disables the default top title
                                },
                                subtitle: {
                                    display: true,
                                    text: 'Donated Sectors Distribution',
                                    position: 'bottom', // Chart.js v4+ may not support this perfectly
                                    align: 'center',
                                    font: {
                                        size: 16,
                                        weight: 'bold',

                                    },
                                    padding: {
                                        top: 30,
                                    }
                                },
                            },
                        }}

                    />
                </div>
                <div className="w-full h-full lg:px-16">
                    <h1 className="text-xl font-medium text-gray-400 mb-3">Most donated NGOs</h1>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-start bg-[#F1F2F7] p-4 rounded-md gap-2">
                            <div className="w-16 flex-none h-16 rounded-full overflow-hidden border-2 border-gray-200">
                                <img src="https://t4.ftcdn.net/jpg/05/26/35/07/360_F_526350772_taMM7EVaoDzWAashADdBrYkjH24hqS3c.jpg" alt="" className="w-16 h-16 object-cover" />
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                                <h1 className="text-md font-medium text-slate-600 ">Shanti Niketan Trust</h1>
                                <div className="flex items-center gap-2 mt-1 flex-wrap text-gray-600">
                                    <p className="bg-indigo-200 px-4 py-1 rounded-full text-sm w-fit">Education</p>
                                    <p className="bg-indigo-200 px-4 py-1 rounded-full text-sm w-fit">Food</p>
                                    <p className="bg-indigo-200 px-4 py-1 rounded-full text-sm w-fit">Health</p>
                                    <p className="bg-indigo-200 px-4 py-1 rounded-full text-sm w-fit">Public</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start   bg-[#F1F2F7] p-4 rounded-md gap-2">
                            <div className="w-16 flex-none h-16 rounded-full overflow-hidden border-2 border-gray-200">
                                <img src="https://www.designmantic.com/logo-images/166751.png?company=Company%20Name&keyword=ngo&slogan=&verify=1" alt="" className="w-16 h-16 object-cover" />
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                                <h1 className="text-md font-medium text-slate-600 ">Poor Children Welfare</h1>
                                <div className="flex items-center gap-2 mt-1 flex-wrap text-gray-600">
                                    <p className="bg-indigo-200 px-4 py-1 rounded-full text-sm w-fit">Education</p>
                                    <p className="bg-indigo-200 px-4 py-1 rounded-full text-sm w-fit">Food</p>
                                    <p className="bg-indigo-200 px-4 py-1 rounded-full text-sm w-fit">Health</p>
                                    <p className="bg-indigo-200 px-4 py-1 rounded-full text-sm w-fit">Public</p>
                                </div>
                            </div>

                        </div>
                        <div className="flex items-start   bg-[#F1F2F7] p-4 rounded-md gap-2">
                            <div className="w-16 flex-none h-16 rounded-full overflow-hidden border-2 border-gray-200">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-WZvXdh_iSvNFSI3NKxR6AuBdJ9GRdS_gA&s" alt="" className="w-16 h-16 object-cover" />
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                                <h1 className="text-md font-medium text-slate-600 ">African Youth Welfare</h1>
                                <div className="flex items-center gap-2 mt-1 flex-wrap text-gray-600">
                                    <p className="bg-indigo-200 px-4 py-1 rounded-full text-sm w-fit">Education</p>
                                    <p className="bg-indigo-200 px-4 py-1 rounded-full text-sm w-fit">Food</p>
                                    <p className="bg-indigo-200 px-4 py-1 rounded-full text-sm w-fit">Health</p>
                                    <p className="bg-indigo-200 px-4 py-1 rounded-full text-sm w-fit">Public</p>
                                </div>
                            </div>

                        </div>
                        <div className="flex items-start   bg-[#F1F2F7] p-4 rounded-md gap-2">
                            <div className="w-16 flex-none h-16 rounded-full overflow-hidden border-2 border-gray-200">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10Dntsedb7vLhacjDdEMdSosZjrXWZ-Yn0Q&s" alt="" className="w-16 h-16 object-cover" />
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                                <h1 className="text-md font-medium text-slate-600 ">Youth Welfare</h1>
                                <div className="flex items-center gap-2 mt-1 flex-wrap text-gray-600">
                                    <p className="bg-indigo-200 px-4 py-1 rounded-full text-sm w-fit">Education</p>
                                    <p className="bg-indigo-200 px-4 py-1 rounded-full text-sm w-fit">Food</p>
                                    <p className="bg-indigo-200 px-4 py-1 rounded-full text-sm w-fit">Health</p>
                                    <p className="bg-indigo-200 px-4 py-1 rounded-full text-sm w-fit">Public</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                {/* <div className="w-full bg-yellow-200">hello</div> */}

            </main>

        </AnimationWrapper>
    )
}


export default DonorDashboardContent;