import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, GraduationCap } from 'lucide-react';
import InteractiveBackground from '../components/UI/InteractiveBackground';
import abhinavPhoto from '../assets/abhinav.png';

const WavingHand = () => (
    <motion.span
        className="inline-block text-5xl md:text-6xl"
        animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
        transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut"
        }}
    >
        👋
    </motion.span>
);

const Typewriter = ({ text, onComplete }) => {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setDisplayText(text.substring(0, i + 1));
            i++;
            if (i >= text.length) {
                clearInterval(timer);
                setIsComplete(true);
                if (onComplete) onComplete();
            }
        }, 40);
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Only run once on mount, text is captured in closure

    return (
        <span className="inline-block relative">
            {displayText}
            {!isComplete && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-[2px] h-[0.8em] bg-current ml-1 align-middle"
                />
            )}
        </span>
    );
};

const SocialIcon = ({ href, icon: Icon, label, hoverColor }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group p-3 text-black/40 hover:bg-black/5 hover:scale-110 rounded-full transition-all duration-300 ${hoverColor}`}
        aria-label={label}
    >
        <Icon
            size={24}
            strokeWidth={1.5}
            className="transition-colors duration-300 group-hover:fill-current"
        />
    </a>
);

const Home = () => {
    const [showSecondLine, setShowSecondLine] = useState(false);

    return (
        <div className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden font-serif">
            <InteractiveBackground />

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-slate-950 pb-20">
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-col items-center space-y-12"
                >
                    {/* Profile Photo */}
                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-black/10 shadow-2xl overflow-hidden p-1 bg-white/20"
                        >
                            <img
                                src={abhinavPhoto}
                                alt="Abhinav"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-4">
                        {/* First Line - Waving Hand + Name */}
                        <div className="h-12 md:h-14 flex items-center justify-center gap-3">
                            <WavingHand />
                            <h2 className="text-xl md:text-2xl text-black font-bold">
                                <Typewriter
                                    text="I'm Abhinav"
                                    onComplete={() => setShowSecondLine(true)}
                                />
                            </h2>
                        </div>

                        {/* Second Line - Welcome */}
                        <div className="h-12 md:h-14 flex items-center justify-center">
                            {showSecondLine && (
                                <motion.h1
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-xl md:text-2xl tracking-tight px-4 text-black/60"
                                >
                                    <Typewriter text="I research and ship agentic AI and applied ML systems with an emphasis on end-to-end responsible AI." />
                                </motion.h1>
                            )}
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-8 pt-4">
                        <SocialIcon
                            href="#"
                            icon={GraduationCap}
                            label="Google Scholar"
                            hoverColor="hover:text-[#4285F4]"
                        />
                        <SocialIcon
                            href="https://github.com"
                            icon={Github}
                            label="GitHub"
                            hoverColor="hover:text-black"
                        />
                        <SocialIcon
                            href="https://linkedin.com"
                            icon={Linkedin}
                            label="LinkedIn"
                            hoverColor="hover:text-[#0A66C2]"
                        />
                        <SocialIcon
                            href="https://substack.com"
                            icon={SubstackIcon}
                            label="Substack"
                            hoverColor="hover:text-[#FF6719]"
                        />
                    </div>
                </motion.header>
            </div>
        </div>
    );
};

const SubstackIcon = ({ size = 24, ...props }) => (
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

export default Home;
