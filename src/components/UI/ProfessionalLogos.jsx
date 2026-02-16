import React from 'react';
import { SiAmazon } from 'react-icons/si';
import alexaPlusImg from '../../assets/alexa_plus.jpg';
import amznCsImg from '../../assets/amzn_cs.jpg';
import gtImg from '../../assets/gatech.jpeg';

/**
 * ProfessionalLogos - A collection of SVG and asset-wrapped components for professional experience.
 */

// Amazon Logo using Official Simple Icons via react-icons
export const AmazonLogo = ({ className = "w-full h-full", ...props }) => (
    <SiAmazon className={className} {...props} />
);

// Alexa Plus Logo - Wrapped JPG to fit square/circle
export const AlexaPlusLogo = ({ className = "w-full h-full", ...props }) => (
    <div className={`relative overflow-hidden ${className}`} {...props}>
        <img
            src={alexaPlusImg}
            alt="Alexa Plus logo"
            className="w-full h-full object-cover"
        />
    </div>
);

// Amazon CS (Customer Service) Logo - Wrapped JPG
export const AmazonCSLogo = ({ className = "w-full h-full", ...props }) => (
    <div className={`relative overflow-hidden ${className}`} {...props}>
        <img
            src={amznCsImg}
            alt="Amazon CS logo"
            className="w-full h-full object-cover"
        />
    </div>
);

// AWS Logo - Keeping the custom SVG for now as it's cleaner than most library versions
export const AWSLogo = ({ className = "w-full h-full", ...props }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        <path d="M12.98 10.92c-.3-.26-.74-.43-1.3-.43-.9 0-1.6.45-1.6 1.48s.7 1.48 1.6 1.48c.56 0 1-.17 1.3-.43v-2.1zM24 12c0 2.1-1.03 3.33-2.66 3.33-1.25 0-2.32-.87-2.63-2.1h-5.26c-.3 1.23-1.38 2.1-2.63 2.1-1.63 0-2.66-1.23-2.66-3.33s1.03-3.33 2.66-3.33c1.25 0 2.33.87 2.63 2.1h5.26c.3-1.23 1.38-2.1 2.63-2.1C22.97 8.67 24 9.9 24 12zm-3.33-1.48c0-1.03-.7-1.48-1.6-1.48-.56 0-1 .17-1.3.43v2.1c.3.26.74.43 1.3.43.9 0 1.6-.45 1.6-1.48z" />
    </svg>
);

// Georgia Tech Monogram (SVG)
export const GeorgiaTechSVG = ({ className = "w-full h-full", ...props }) => (
    <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        <path d="M18.8 15.6h28.1v68.8H18.8zM53.1 15.6h28.1v68.8H53.1z" />
    </svg>
);

// Georgia Tech Logo (Image Asset)
export const GTLogo = ({ className = "w-full h-full", ...props }) => (
    <div className={`relative overflow-hidden ${className}`} {...props}>
        <img
            src={gtImg}
            alt="Georgia Tech logo"
            className="w-full h-full object-cover"
        />
    </div>
);

// Create-X Logo
export const CreateXLogo = ({ className = "w-full h-full", ...props }) => (
    <div className={className} {...props} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <GeorgiaTechSVG style={{ width: '40%' }} />
        <span style={{ fontWeight: 900, fontSize: '0.8em', fontFamily: 'sans-serif' }}>CREATE-X</span>
    </div>
);
