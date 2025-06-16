import React, { useState } from "react";

import blackLogo from '../../image/logoblack.png'
import { Link, NavLink } from "react-router-dom";

const DashboardNavigator = ({ data, setActiveTab }) => {

    const handleActiveTabClick = (name) => {
        setActiveTab(name);
    }

    return (
        <section className="w-64 h-screen relative bg-[#F1F2F7] hidden lg:flex flex-col">
            {/* <section className="w-64 h-screen relative bg-[#F1F2F7] border-r-[1px] border-gray-200 flex flex-col"> */}

            <Link to={'/'} className="w-64 h-16 border-b-[1px] border-slate-300 cursor-pointer pl-7 py-5 ">
                <img src={blackLogo} alt="" className="w-28" />
                {/* <div className="absolute max-md:flex-none cursor-pointer right-4 pl-[6px] bg-[#E4E7F4] h-6 w-6 border-[1px] rounded-sm  top-5">X</div> */}

            </Link>


            <div className="pl-7 py-4 mb-4 pr-4">
                <h1 className="my-2 text-xs font-medium tracking-widest text-slate-400">MENU</h1>
                {
                    data.menu.map((item, index) => (
                        <NavLink to={item.link} key={index} onClick={() => handleActiveTabClick(item.name)} className={({ isActive }) =>
                            `flex items-center gap-2 p-3 px-2 cursor-pointer tracking-wide text-slate-500  hover:text-slate-700  hover:bg-[#E4E7F4] ${isActive ? 'bg-[#E4E7F4] text-slate-700  font-semibold' : ''
                            }`
                        }>
                            <i className={`${item.icon} text-md mt-1`}></i>
                            <span to={item.link} className="text-sm font-medium">{item.name}</span>
                        </NavLink>
                    ))
                }
            </div>
            <div className="pl-7 py-4 mb-4 pr-4">
                <h1 className="my-2 text-xs font-medium tracking-widest text-slate-400">OTHERS</h1>
                {
                    data.other.map((item, index) => (
                        <NavLink to={item.link} key={index} onClick={() => handleActiveTabClick(item.name)} className={({ isActive }) =>
                            `flex items-center gap-2 p-3 px-2 cursor-pointer tracking-wide text-slate-500 hover:text-slate-700  hover:bg-[#E4E7F4] ${isActive ? 'bg-[#E4E7F4] text-slate-700  font-semibold' : ''
                            }`
                        }>
                            <i className={`${item.icon} text-md mt-1`}></i>
                            <span className="text-sm font-medium">{item.name}</span>
                        </NavLink>
                    ))
                }
            </div>

        </section >
    )
}


export default DashboardNavigator;