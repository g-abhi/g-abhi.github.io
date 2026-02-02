import React from 'react';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ExperienceItem = ({ role, company, period, description, logo }) => (
    <div className="mb-12 border-l-2 border-slate-200 pl-10 relative group">
        {/* Logo Container */}
        <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center overflow-hidden shadow-sm z-10">
            {logo ? (
                <img src={logo} alt={`${company} logo`} className="w-full h-full object-cover p-1" />
            ) : (
                <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 font-bold">
                    {company.charAt(0)}
                </div>
            )}
        </div>

        <Card className="border-none shadow-none bg-transparent pt-0">
            <CardHeader className="pt-0 px-0 pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <CardTitle className="text-xl font-bold tracking-tight text-slate-900">{role}</CardTitle>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
                        {period}
                    </span>
                </div>
                <CardDescription className="text-lg font-medium text-slate-600">
                    {company}
                </CardDescription>
            </CardHeader>
            <CardContent className="px-0 pt-2 pb-0">
                <p className="text-slate-600 leading-relaxed max-w-2xl">{description}</p>
            </CardContent>
        </Card>
    </div>
);

const Resume = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-16 space-y-2">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-serif">Experience</h1>
                <p className="text-slate-600 text-lg max-w-2xl">A professional timeline across research, industry, and academia.</p>
            </header>

            <div className="space-y-4 ml-2">
                <ExperienceItem
                    role="Senior Researcher"
                    company="Institute of Ancient Sciences"
                    period="2023 - Present"
                    description="Leading research into astronomical correlations in localized texts. Developing visualization tools for complex temporal data."
                    logo="https://cdn-icons-png.flaticon.com/512/3063/3063176.png"
                />

                <ExperienceItem
                    role="Associate Professor"
                    company="University of Technology"
                    period="2020 - 2023"
                    description="Taught Advanced Algorithms and Computer Graphics. Mentored 20+ students in their final year capstone projects."
                    logo="https://cdn-icons-png.flaticon.com/512/2997/2997300.png"
                />

                <ExperienceItem
                    role="Software Engineer"
                    company="Tech Innovations Inc."
                    period="2018 - 2020"
                    description="Built scalable full-stack applications. Optimized database queries reducing load time by 40%."
                    logo="https://cdn-icons-png.flaticon.com/512/2721/2721626.png"
                />
            </div>
        </div>
    );
};

export default Resume;
