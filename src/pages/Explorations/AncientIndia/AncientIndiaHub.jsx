import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const AncientIndiaHub = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Ancient India</h2>

            </div>

            <div className="space-y-6">
                <a href="https://g-abhi.github.io/panchaangam-viz/" target="_blank" rel="noopener noreferrer" className="block group">
                    <Card className="border border-slate-200 bg-white group-hover:shadow-md transition-all duration-300">
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <div>
                                    <CardTitle className="text-xl font-bold text-slate-900 mb-2">Panchangam</CardTitle>
                                    <CardDescription className="text-slate-600">
                                        Visualizing the Vedic calendar with the cosmos.
                                    </CardDescription>
                                </div>
                                <span className="text-2xl">↗</span>
                            </div>
                        </CardHeader>
                    </Card>
                </a>


            </div>


        </div>
    );
};

export default AncientIndiaHub;
