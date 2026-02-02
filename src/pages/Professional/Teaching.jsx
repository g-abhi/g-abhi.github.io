import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const TeachingItem = ({ course, role, period, description, logo }) => (
    <div className="mb-12 border-l-2 border-slate-200 pl-10 relative group">
        {/* Logo Container */}
        <div className="absolute -left-[24px] top-0 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center overflow-hidden shadow-sm z-10">
            {logo ? (
                <img src={logo} alt={`${course} logo`} className="w-full h-full object-cover p-2" />
            ) : (
                <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 font-bold">
                    {course.charAt(0)}
                </div>
            )}
        </div>

        <Card className="border-none shadow-none bg-transparent pt-0">
            <CardHeader className="pt-0 px-0 pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <CardTitle className="text-xl font-bold tracking-tight text-slate-900">{course}</CardTitle>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
                        {period}
                    </span>
                </div>
                <CardDescription className="text-lg font-medium text-slate-600">
                    {role}
                </CardDescription>
            </CardHeader>
            <CardContent className="px-0 pt-2 pb-0">
                <p className="text-slate-600 leading-relaxed max-w-2xl">{description}</p>
            </CardContent>
        </Card>
    </div>
);

const Teaching = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
        <header className="mb-16 space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-serif">Teaching</h1>
            <p className="text-slate-600 text-lg max-w-2xl">Empowering students through first-principles thinking and interdisciplinary exploration.</p>
        </header>

        <div className="space-y-4 ml-2">
            <TeachingItem
                course="Introduction to Computer Graphics (CS101)"
                role="Visiting Faculty"
                period="Fall 2023"
                description="Taught fundamental concepts of 2D/3D rendering, shader programming, and geometric modeling. Focused on bridging mathematical theory with real-time implementation."
                logo="https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
            />

            <TeachingItem
                course="Advanced Data Structures"
                role="Graduate Instructor"
                period="Spring 2022"
                description="Explored complex algorithms, graph theory, and memory optimization. Encouraged students to apply these structures in large-scale system design."
                logo="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
            />

            <TeachingItem
                course="History of Science in South Asia"
                role="Co-Instructor"
                period="2021 - 2022"
                description="An interdisciplinary course exploring ancient astronomical instruments, mathematical manuscripts, and the evolution of scientific thought in the subcontinent."
                logo="https://cdn-icons-png.flaticon.com/512/3063/3063176.png"
            />
        </div>
    </div>
);

export default Teaching;
