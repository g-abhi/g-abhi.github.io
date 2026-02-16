import React from 'react';
import { Github, Linkedin, GraduationCap } from 'lucide-react';

const SocialIcon = ({ href, icon: Icon, label, hoverColor }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group p-2 text-slate-500/80 hover:bg-black/5 hover:scale-110 rounded-full transition-all duration-300 ${hoverColor}`}
        aria-label={label}
    >
        <Icon
            size={20}
            strokeWidth={1.5}
            className="transition-colors duration-300 group-hover:fill-current"
        />
    </a>
);

/* 
const SubstackIcon = ({ size = 20, ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="-4 -4 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M22.54 0H1.46v2.836h21.08V0zM22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46z"
        />
    </svg>
);
*/

const SocialIcons = ({ className = "" }) => {
    return (
        <div className={`flex justify-center gap-4 ${className}`}>
            <SocialIcon
                href="https://scholar.google.com/citations?user=ko91go0AAAAJ&hl=en"
                icon={GraduationCap}
                label="Google Scholar"
                hoverColor="hover:text-[#4285F4]"
            />
            <SocialIcon
                href="https://github.com/g-abhi"
                icon={Github}
                label="GitHub"
                hoverColor="hover:text-black"
            />
            <SocialIcon
                href="https://www.linkedin.com/in/g-abhi/"
                icon={Linkedin}
                label="LinkedIn"
                hoverColor="hover:text-[#0A66C2]"
            />
            {/* 
            <SocialIcon
                href="https://substack.com"
                icon={SubstackIcon}
                label="Substack"
                hoverColor="hover:text-[#FF6719]"
            />
            */}
        </div>
    );
};

export default SocialIcons;
