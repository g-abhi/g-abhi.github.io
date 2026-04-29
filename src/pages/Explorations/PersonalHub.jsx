import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AncientIndiaHub from './AncientIndia/AncientIndiaHub';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ExplorationsMenu = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <Link to="ancient-india" className="block group">
            <Card className="border border-slate-200 bg-white group-hover:shadow-md transition-all duration-300">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-900">Ancient India</CardTitle>
                    <CardDescription className="text-lg text-slate-600">
                        Learning about the Vedas.
                    </CardDescription>
                </CardHeader>
            </Card>
        </Link>

        <Card className="border border-slate-200 bg-slate-50 opacity-60">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-400">Photography</CardTitle>
                <CardDescription className="text-lg text-slate-400">
                    Gallery coming soon...
                </CardDescription>
            </CardHeader>
        </Card>
    </div>
);

const ExplorationsHub = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 max-w-5xl mx-auto px-4 py-16">
            <header className="mb-16 space-y-2 text-center flex flex-col items-center">
                <h1 className="text-5xl font-bold tracking-tight text-slate-900 font-serif">Studio</h1>
            </header>
            <Routes>
                <Route index element={<ExplorationsMenu />} />
                <Route path="ancient-india" element={<AncientIndiaHub />} />
            </Routes>
        </div>
    );
};

export default ExplorationsHub;
