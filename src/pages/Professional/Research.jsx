import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const AuthorList = ({ authors }) => (
    <div className="text-sm text-slate-600 mt-2">
        {authors.map((author, index) => (
            <span key={index}>
                {author.isMe ? (
                    <strong className="text-slate-900">{author.name}</strong>
                ) : (
                    <span>{author.name}</span>
                )}
                {author.equalContribution && <sup className="text-slate-400">*</sup>}
                {index < authors.length - 1 && ', '}
            </span>
        ))}
    </div>
);

const ResearchCard = ({ title, year, venue, description, authors }) => (
    <Card className="border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
        <CardHeader>
            <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-xl font-bold text-slate-900">{title}</CardTitle>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter bg-slate-50 px-2 py-1 rounded">
                    {year}
                </span>
            </div>
            {authors && <AuthorList authors={authors} />}
            <CardDescription className="text-slate-500 font-medium mt-2">{venue}</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-slate-600 leading-relaxed text-base">
                {description}
            </p>
        </CardContent>
    </Card>
);

const Research = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
        <header className="mb-12 space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-serif">Research</h1>
            <p className="text-slate-600 text-lg max-w-2xl">Bridging the gap between modern computational methods and traditional knowledge systems.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ResearchCard
                title="Computational Archaeoastronomy"
                year="2024"
                venue="Published in J. Heritage Science"
                description="Simulating ancient celestial configurations to validate historical dates found in inscriptions."
                authors={[
                    { name: "Abhinav G.", isMe: true, equalContribution: true },
                    { name: "Dr. R. Sharma", equalContribution: true },
                    { name: "Prof. M. Patel" }
                ]}
            />

            <ResearchCard
                title="Semantic Analysis of Sanskrit Manuscripts"
                year="2023"
                venue="Conference on NLP"
                description="Using transformer models to correct OCR errors in palm-leaf manuscript digitizations."
                authors={[
                    { name: "Dr. S. Kumar" },
                    { name: "Abhinav G.", isMe: true },
                    { name: "Prof. A. Desai" }
                ]}
            />
        </div>

        <div className="mt-8 text-xs text-slate-400">
            <sup>*</sup> Equal contribution
        </div>
    </div>
);

export default Research;
