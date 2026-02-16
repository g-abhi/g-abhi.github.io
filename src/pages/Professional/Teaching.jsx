import React from 'react';
import { GTLogo } from '../../components/UI/ProfessionalLogos';
import TimelineItem from '../../components/UI/TimelineItem';

const Teaching = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
        <header className="mb-16 space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-serif">Teaching</h1>
        </header>

        <div className="ml-2">
            <TimelineItem
                title="Georgia Tech Create-X Startup Lab"
                subtitle="Head Graduate Teaching Assistant"
                period="Jan 2023 - Dec 2023"
                // description="Taught fundamental concepts of 2D/3D rendering, shader programming, and geometric modeling. Focused on bridging mathematical theory with real-time implementation."
                logo={<GTLogo />}
                isSvg={true}
                fullImage={true}
            />

            <TimelineItem
                title="Tutoring & Academic Support @ Georgia Tech"
                subtitle="1-to-1 Peer Tutor"
                period="Aug 2022 - Dec 2022"
                // description="Explored complex algorithms, graph theory, and memory optimization. Encouraged students to apply these structures in large-scale system design."
                logo={<GTLogo />}
                isSvg={true}
                fullImage={true}
            />
        </div>
    </div>
);

export default Teaching;
