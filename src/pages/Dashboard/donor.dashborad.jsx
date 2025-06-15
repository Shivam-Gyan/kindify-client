import React, { useState } from "react";
import { DashboardNavbar, DashboardNavigator,DonorDashboardContent } from '../../components'
import { donorDashboardData } from "../../content/data";


const DonorDashboard = () => {

    const [activeTab, setActiveTab] = useState("Dashboard");

    console.log("User Dashboard Rendered");

    return (
        <main className="flex flex-row h-screen w-full bg-white">

            {/* left-content */}
            <DashboardNavigator data={donorDashboardData} setActiveTab={setActiveTab} />

            {/* right-content */}
            <section className=" w-full">

                {/* right top content navbar  */}
                <DashboardNavbar />

                {/* main content right-bottom content  */}
                <div className="py-8 px-10 flex flex-col gap-4">

                    <h1 className="text-2xl font-medium tracking-wide text-slate-500">{activeTab}</h1>

                    <div className=" h-[60vh] w-full lg:w-[80vh]">
                        <DonorDashboardContent />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DonorDashboard;