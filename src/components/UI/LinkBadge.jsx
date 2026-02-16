import React from 'react';
import { Github, FileText, Globe, BookOpen, ScrollText, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * LinkBadge - A standardized badge for external links in research/project cards.
 * Self-contained version to avoid dependency on missing Badge component.
 */
const LinkBadge = ({ label, url, type }) => {
    const getIcon = () => {
        switch (type) {
            case 'github': return <Github className="w-3 h-3" />;
            case 'arxiv': return <BookOpen className="w-3 h-3" />;
            case 'huggingface': return <span className="text-[10px]">🤗</span>;
            case 'pdf': return <FileText className="w-3 h-3" />;
            case 'blog': return <ScrollText className="w-3 h-3" />;
            case 'devpost': return <Trophy className="w-3 h-3" />;
            case 'web': default: return <Globe className="w-3 h-3" />;
        }
    };

    const getColors = () => {
        switch (type) {
            case 'arxiv': return "bg-red-50 text-red-700 hover:bg-red-100 border-red-200";
            case 'github': return "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200";
            case 'huggingface': return "bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border-yellow-200";
            case 'pdf': return "bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200";
            case 'devpost': return "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200";
            default: return "bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200";
        }
    };

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="no-underline">
            <span className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                "flex items-center gap-1.5 px-2 py-0.5 transition-colors cursor-pointer",
                getColors()
            )}>
                {getIcon()}
                {label}
            </span>
        </a>
    );
};

export default LinkBadge;
