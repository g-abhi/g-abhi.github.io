import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import LinkBadge from "@/components/UI/LinkBadge";

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

const ResearchCard = ({ title, year, venue, description, authors, links }) => (
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
            <p className="text-slate-600 leading-relaxed text-base mb-4">
                {description}
            </p>
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

const Research = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
        <header className="mb-12 space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-serif">Research</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ResearchCard
                title="TOD-ProcBench: Benchmarking Complex Instruction-Following in Task-Oriented Dialogues"
                year="2025"
                venue="Oral Talk in Workshop on GenAI for E-Commerce @ RecSys | Poster in Workshop on Multi-Turn Interactions in LLMs @ NeurIPS"
                // description="Simulating ancient celestial configurations to validate historical dates found in inscriptions."
                authors={[
                    { name: "Sarik Ghazarian", equalContribution: true },
                    { name: "Abhinav Gullapalli", isMe: true, equalContribution: true },
                    { name: "Swair Shah" },
                    { name: "Anurag Beniwal" },
                    { name: "Nanyun Peng" },
                    { name: "Narayanan Sadagopan" },
                    { name: "Zhou Yu" },
                ]}
                links={[
                    {
                        label: "arXiv",
                        url: "https://arxiv.org/abs/2511.15976",
                        type: "arxiv"
                    },
                    {
                        label: "Amazon Science",
                        url: "https://www.amazon.science/publications/tod-procbench-benchmarking-complex-instruction-following-in-task-oriented-dialogues",
                        type: "web"
                    }
                ]}
            />
            <ResearchCard
                title="FiNER-ORD: Financial Named Entity Recognition Open Research Dataset"
                year="2024"
                venue="Preprint"
                // description="Using transformer models to correct OCR errors in palm-leaf manuscript digitizations."
                authors={[
                    { name: "Agam Shah" },
                    { name: "Abhinav Gullapalli", isMe: true },
                    { name: "Ruchit Vithani" },
                    { name: "Michael Galarnyk" },
                    { name: "Sudheer Chava" }
                ]}
                links={[
                    {
                        label: "arXiv",
                        url: "https://arxiv.org/abs/2302.11157v2",
                        type: "arxiv"
                    }, ,
                    {
                        label: "GitHub",
                        url: "https://github.com/gtfintechlab/FiNER-ORD",
                        type: "github"
                    },
                    {
                        label: "HuggingFace",
                        url: "https://huggingface.co/datasets/gtfintechlab/finer-ord",
                        type: "huggingface"
                    }
                ]}
            />
        </div>

        <div className="mt-8 text-xs text-slate-400">
            <sup>*</sup> Equal contribution
        </div>
    </div>
);

export default Research;
