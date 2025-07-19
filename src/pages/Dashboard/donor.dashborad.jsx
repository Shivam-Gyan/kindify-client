import { DashboardNavbar, DashboardNavigator, Footer } from '../../components'
import React, { useState } from "react";
import { donorDashboardData } from "../../content/data";

import { AnimationWrapper } from '../../common';
import { Outlet } from "react-router-dom";




const DonorDashboard = () => {

    const url = window.location.pathname;
    let path = url.split('/')[2];

    if (url.split('/')[2] === 'contact&help') {
        path = 'contact & help';
    }
    const [activeTab, setActiveTab] = useState(path);
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    return (
        <AnimationWrapper>
            <div className="flex flex-col overflow-hidden">
                <main className="flex flex-row h-screen w-screen bg-white">
                    {/* left-content */}
                    <div className="relative z-40">
                        <DashboardNavigator
                            isMenuOpen={isMenuOpen}
                            setIsMenuOpen={setIsMenuOpen}
                            data={donorDashboardData}
                            setActiveTab={setActiveTab}
                        />
                    </div>

                    {/* right-content */}
                    <section
                        className={`transition-all duration-300 w-full ${isMenuOpen ? 'lg:pl-64' : 'lg:pl-0'
                            }`}
                    >
                        <DashboardNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

                        <div className="py-8 max-lg:px-3 px-10 flex flex-col gap-4 h-[calc(100vh-4rem)] overflow-y-auto scroll-smooth">
                            <h1 className="text-2xl max-lg:ml-6 ml-0 font-medium tracking-wide text-slate-500 capitalize">
                                {activeTab}
                            </h1>
                            <Outlet />
                        </div>
                    </section>
                </main>
                {/* Footer */}
                <Footer />
            </div>
        </AnimationWrapper>
    )
}

export default DonorDashboard;