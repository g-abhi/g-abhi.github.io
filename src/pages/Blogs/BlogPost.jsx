import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { BLOG_POSTS } from './BlogList';

const sampleContent = {
    'proof-of-infinity': `
# Infinity (Khahara)

Bhaskara II in *Bijaganita* states:

> *vadhau viyat khaharasya khepi...*

Mathematically, if we consider a quantity divided by zero:

$$
\\frac{a}{0} = \\infty
$$

This quantity, *Khahara*, is immutable. Adding or subtracting from it leaves it unchanged.
`,
    'math-proof-example': `
# Standard Deviation Proof

Here is a sample math proof rendered with LaTeX.

The standard deviation $\\sigma$ is the square root of the variance.

$$
\\sigma = \\sqrt{\\frac{1}{N} \\sum_{i=1}^N (x_i - \\mu)^2}
$$

Where $\\mu$ is the mean:

$$
\\mu = \\frac{1}{N} \\sum_{i=1}^N x_i
$$
`
};

const BlogPost = () => {
    const { id } = useParams();
    const postInfo = BLOG_POSTS.find(p => p.id === id);
    const content = sampleContent[id] || "# Post not found";

    return (
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12 animate-fade-in">
            <div className="mb-8">
                <Link to=".." className="text-sm text-slate-600 hover:text-slate-900 mb-4 inline-flex items-center gap-2 font-medium transition-colors">
                    ← Back to Blogs
                </Link>
                {postInfo && (
                    <>
                        <h1 className="text-4xl font-serif text-slate-900 font-bold mt-6 mb-2">{postInfo.title}</h1>
                        <p className="text-slate-500 text-sm">{postInfo.date}</p>
                    </>
                )}
            </div>

            <article className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-slate-900 prose-strong:text-slate-900 prose-img:rounded-lg prose-code:text-slate-800 prose-pre:bg-slate-50">
                <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                >
                    {content}
                </ReactMarkdown>
            </article>
        </div>
    );
};

export default BlogPost;
