import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const AncientIndiaHub = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Ancient India</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Uncovering hidden knowledge and scientific principles from ancient texts.
                </p>
            </div>

            <div className="space-y-6">
                <Link to="panchaangam" className="block group">
                    <Card className="border border-slate-200 bg-white group-hover:shadow-md transition-all duration-300">
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <div>
                                    <CardTitle className="text-xl font-bold text-slate-900 mb-2">Panchaangam & Time</CardTitle>
                                    <CardDescription className="text-slate-600">
                                        Interactive visualization of the Moon, Sun, and Earth to explain the concept of Tithi and Nakshatra.
                                    </CardDescription>
                                </div>
                                <span className="text-2xl">→</span>
                            </div>
                        </CardHeader>
                    </Card>
                </Link>

                {/* Placeholder for future articles */}
                <Card className="border border-slate-200 bg-slate-50 opacity-60">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-slate-400 mb-2">Vedic Mathematics (Coming Soon)</CardTitle>
                        <CardDescription className="text-slate-400">
                            Exploration of mathematical sutras.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>

            <div className="mt-8 text-center">
                <Link to=".." className="text-slate-600 hover:text-slate-900 underline decoration-dotted">
                    ← Back to Personal
                </Link>
            </div>
        </div>
    );
};

export default AncientIndiaHub;
