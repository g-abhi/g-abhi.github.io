import React from 'react';
import { Link } from 'react-router-dom';

// In a real app, this would come from a CMS or markdown files.
// For now, we'll use a static config.
export const BLOG_POSTS = [
    {
        id: 'proof-of-infinity',
        title: 'On the Concept of Infinity in Indian Mathematics',
        date: 'Dec 28, 2025',
        summary: 'Exploring how Bhaskara II conceptualized division by zero and infinity.'
    },
    {
        id: 'math-proof-example',
        title: 'LaTeX Math Proof Example',
        date: 'Jan 01, 2026',
        summary: 'A demonstration of rendering math proofs using LaTeX in this blog system.'
    }
];

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const BlogList = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 max-w-4xl mx-auto py-12">
            <header className="mb-12 space-y-2">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-serif">Technical Blogs</h1>
                <p className="text-slate-600 text-lg">Sharing thoughts on research, math, and tradition.</p>
            </header>

            <div className="space-y-8">
                {BLOG_POSTS.map(post => (
                    <Link key={post.id} to={`${post.id}`} className="block group">
                        <Card className="border border-slate-200 bg-white group-hover:shadow-md transition-all duration-300">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                                        {post.title}
                                    </CardTitle>
                                    <span className="text-sm font-medium text-slate-400">{post.date}</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-slate-600 text-base leading-relaxed">
                                    {post.summary}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
