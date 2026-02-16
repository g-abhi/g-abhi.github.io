import React from 'react';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import LinkBadge from "@/components/UI/LinkBadge";

const ProjectCard = ({ title, tech, description, links }) => (
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
            <CardDescription className="text-slate-600 leading-relaxed text-base mb-4">
                {description}
            </CardDescription>
            {links && links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                    {links.map((link, idx) => (
                        <LinkBadge key={idx} {...link} />
                    ))}
                </div>
            )}
        </CardContent>
    </Card>
);

const Projects = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <header className="mb-12 space-y-2">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-serif">Projects</h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProjectCard
                    title="Reality Sports"
                    tech={['NeRF', 'Instant-NGP', 'Record3D']}
                    description="Leveraging Neural Radiance Fields (NeRF) to create highly realistic 3D sports environments. Most Creative Hack Award @ Hacklytics 2023 (Data Hackathon hosted by Data Science at Georgia Tech)."
                    links={[
                        { label: "GitHub", url: "https://github.com/AniketPant02/RealitySports", type: "github" },
                        { label: "Devpost", url: "https://devpost.com/software/realitysports", type: "devpost" }
                    ]}
                />
                <ProjectCard
                    title="ShippingGPT"
                    tech={['ChatGPT', 'Supabase', 'deck.gl']}
                    description="Process news articles and visualize real-time global maritime shipping risk insights."
                    links={[
                        // { label: "Docs", url: "#", type: "web" },
                        // { label: "GitHub", url: "#", type: "github" }
                    ]}
                />
            </div>
        </div>
    );
};

export default Projects;
