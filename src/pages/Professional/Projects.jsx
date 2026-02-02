import React from 'react';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ProjectCard = ({ title, tech, description }) => (
    <Card className="border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
        <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-900">{title}</CardTitle>
            <div className="flex flex-wrap gap-2 mt-2">
                {tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-slate-200 text-slate-500 rounded-md font-bold">
                        {t}
                    </span>
                ))}
            </div>
        </CardHeader>
        <CardContent>
            <CardDescription className="text-slate-600 leading-relaxed text-base">
                {description}
            </CardDescription>
        </CardContent>
    </Card>
);

const Projects = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <header className="mb-12 space-y-2">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-serif">Projects</h1>
                <p className="text-slate-600 text-lg max-w-2xl">Selected works and experiments in code and science.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProjectCard
                    title="Panchaangam Viz"
                    tech={['React', 'Three.js', 'Math']}
                    description="A 3D interactive visualization tool to demonstrate the calculation of Tithis based on celestial positions."
                />
                <ProjectCard
                    title="Rustic UI Kit"
                    tech={['Tailwind', 'CSS']}
                    description="A design system focusing on earthy tones and paper textures for digital interfaces."
                />
                <ProjectCard
                    title="Knowledge Graph"
                    tech={['Python', 'NLP', 'GraphDB']}
                    description="Extracting entities and relationships from ancient texts to build a queryable graph."
                />
            </div>
        </div>
    );
};

export default Projects;
