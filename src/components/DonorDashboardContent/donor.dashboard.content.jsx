import React, { useState } from "react";


import { Chart as Chartjs } from "chart.js/auto";
import { Bar,Line } from "react-chartjs-2";
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import utc from 'dayjs/plugin/utc';

import { donations } from '../../content/data'; // Importing donations data

dayjs.extend(isoWeek);
dayjs.extend(utc);


const groupByMonth = (donations) => {
    const monthly = {};

    donations.forEach(donation => {
        const date = dayjs.utc(donation.date); // safely parse UTC
        const month = date.format('MMMM YYYY'); // Example: "January 2025"

        monthly[month] = (monthly[month] || 0) + donation.amount;
    });

    return {
        labels: Object.keys(monthly),
        data: Object.values(monthly)
    };
};


const groupByWeek = (donations) => {
    const weekly = {};

    donations.forEach(donation => {
        const date = dayjs.utc(donation.date);
        const weekKey = `Week ${date.isoWeek()} (${date.year()})`; // Example: "Week 2 (2025)"

        weekly[weekKey] = (weekly[weekKey] || 0) + donation.amount;
    });

    return {
        labels: Object.keys(weekly),
        data: Object.values(weekly)
    };
};

const DonorDashboardContent = () => {

    // const { labels, data } = groupByMonth(donations)
    const { labels, data } = groupByWeek(donations)

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Donations',
                data,
                backgroundColor: '#36A2EB',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <Line
                data={chartData}
            />
        </>
    )
}


export default DonorDashboardContent;