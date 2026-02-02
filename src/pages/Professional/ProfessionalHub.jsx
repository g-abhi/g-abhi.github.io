import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Resume from './Resume';
import Projects from './Projects';
import Teaching from './Teaching';
import Research from './Research';

const Section = ({ id, children }) => (
    <section id={id} className="scroll-mt-24 mb-24 px-4 sm:px-6">
        {children}
    </section>
);

const ProfessionalHub = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <div className="max-w-5xl mx-auto py-12">
            <Section id="experience">
                <Resume />
            </Section>

            <Section id="research">
                <Research />
            </Section>

            <Section id="projects">
                <Projects />
            </Section>

            <Section id="teaching">
                <Teaching />
            </Section>
        </div>
    );
};

export default ProfessionalHub;
