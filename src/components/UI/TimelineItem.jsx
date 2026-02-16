import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

/**
 * TimelineItem - A reusable component for Resume and Teaching entries.
 * Features an interrupted vertical line to support transparent logos.
 */
const TimelineItem = ({ title, subtitle, period, description, logo, isSvg, fullImage }) => (
    <div className="mb-12 pl-10 relative group last:mb-0">
        {/* Timeline Line Segments */}
        {/* Upper connector: from previous item to top of logo */}
        <div className="absolute left-0 top-[-48px] h-[44px] border-l-2 border-slate-200 group-first:hidden" />
        {/* Lower connector: from bottom of logo to end of entry content */}
        <div className="absolute left-0 top-[44px] bottom-0 border-l-2 border-slate-200" />

        {/* Logo Container */}
        <div className={`absolute -left-[24px] top-[-4px] w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center overflow-hidden shadow-sm z-10 ${fullImage ? '' : 'bg-white'}`}>
            {logo ? (
                isSvg ? (
                    <div className={`w-full h-full text-slate-800 flex items-center justify-center ${fullImage ? '' : 'p-2.5'}`}>
                        {logo}
                    </div>
                ) : (
                    <img src={logo} alt={`${title} logo`} className={`w-full h-full object-cover ${fullImage ? '' : 'p-2'}`} />
                )
            ) : (
                <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 font-bold">
                    {title.charAt(0)}
                </div>
            )}
        </div>

        <Card className="border-none shadow-none bg-transparent pt-0">
            <CardHeader className="pt-0 px-0 pb-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <CardTitle className="text-xl font-bold tracking-tight text-slate-900">{title}</CardTitle>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
                        {period}
                    </span>
                </div>
                <CardDescription className="text-lg font-medium text-slate-600">
                    {subtitle}
                </CardDescription>
            </CardHeader>
            <CardContent className="px-0 pt-1 pb-0">
                <p className="text-slate-600 leading-relaxed max-w-2xl">{description}</p>
            </CardContent>
        </Card>
    </div>
);

export default TimelineItem;
