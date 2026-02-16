import React from 'react';
import { AmazonLogo, AlexaPlusLogo, AmazonCSLogo, GTLogo } from '../../components/UI/ProfessionalLogos';
import TimelineItem from '../../components/UI/TimelineItem';

const Resume = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-16 space-y-2">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-serif">Experience</h1>
            </header>

            <div className="ml-2">
                <TimelineItem
                    title="Amazon Customer Service"
                    subtitle="Applied Scientist"
                    period="Dec 2024 - Present"
                    // description="[Brief description of your work on Amazon Customer Service.]"
                    logo={<AmazonCSLogo />}
                    isSvg={true}
                    fullImage={true}
                />
                <TimelineItem
                    title="Alexa+ Kids Experiences"
                    subtitle="Software Engineer"
                    period="Jun 2024 - Dec 2024"
                    // description="[Brief description of your work on Alexa Plus.]"
                    logo={<AlexaPlusLogo />}
                    isSvg={true}
                    fullImage={true}
                />
                <TimelineItem
                    title="Amazon Seller Pricing"
                    subtitle="Software Engineer"
                    period="Dec 2023 - Jun 2024"
                    // description="[Brief description of your impact and responsibilities at Amazon.]"
                    logo={<AmazonLogo />}
                    isSvg={true}
                />
                <TimelineItem
                    title="M.S. Computer Science, Georgia Tech"
                    subtitle="Specialization: Machine Learning | GPA: 4.0"
                    period="Jan 2023 - Dec 2023"
                    // description="Taught fundamental concepts of 2D/3D rendering, shader programming, and geometric modeling. Focused on bridging mathematical theory with real-time implementation."
                    logo={<GTLogo />}
                    isSvg={true}
                    fullImage={true}
                />
                <TimelineItem
                    title="B.S. Computer Science, Georgia Tech"
                    subtitle="Specializations: AI, Cybersecurity | GPA: 4.0"
                    period="Aug 2020 - Dec 2022"
                    // description="Taught fundamental concepts of 2D/3D rendering, shader programming, and geometric modeling. Focused on bridging mathematical theory with real-time implementation."
                    logo={<GTLogo />}
                    isSvg={true}
                    fullImage={true}
                />
            </div>
        </div>
    );
};

export default Resume;
