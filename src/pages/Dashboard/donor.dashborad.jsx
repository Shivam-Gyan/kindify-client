import { DashboardNavbar, DashboardNavigator, DonorDashboardContent, DonorSettingsContent } from '../../components'
import React, { useState } from "react";
import { donorDashboardData } from "../../content/data";

import { AnimationWrapper } from '../../common';
import { Outlet } from "react-router-dom";



const DonorDashboard = () => {

    const [activeTab, setActiveTab] = useState("Dashboard");

    console.log("User Dashboard Rendered");

    return (
        <AnimationWrapper>
            <main className="flex flex-row h-screen w-screen bg-white">

                {/* left-content */}
                <DashboardNavigator data={donorDashboardData} setActiveTab={setActiveTab} />

                {/* right-content */}
                <section className=" w-full">

                    {/* right top content navbar  */}
                    <DashboardNavbar />

                    {/* main content right-bottom content  */}
                    <div className="py-8 px-10 flex flex-col gap-4 h-[calc(100vh-4rem)] overflow-y-auto ">
                        <h1 className="text-2xl font-medium tracking-wide text-slate-500">{activeTab}</h1>
                        <Outlet/>
                    </div>
                </section>
            </main>
        </AnimationWrapper>
    )
}

export default DonorDashboard;