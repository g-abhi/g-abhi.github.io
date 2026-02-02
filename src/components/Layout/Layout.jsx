import React from 'react';
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

const Layout = () => {
    const location = useLocation();
    const isPanchaangam = location.pathname.endsWith('panchaangam');

    return (
        <div className="min-h-screen flex flex-col w-full bg-[#f2f2f2] font-serif text-slate-950">
            {!isPanchaangam && <Navbar />}
            <main className={cn("flex-grow", !isPanchaangam && "pt-12")}>
                <Outlet />
            </main>
            {!isPanchaangam && (
                <footer className="py-12 mt-auto border-t border-slate-200 bg-white/50">
                    <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-500 font-serif">
                        <p>© {new Date().getFullYear()} • g-abhi</p>
                    </div>
                </footer>
            )}
        </div>
    );
};

export default Layout;
