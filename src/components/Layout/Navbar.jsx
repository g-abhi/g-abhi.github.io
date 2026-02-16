import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const NavLink = ({ to, children, activeSection }) => {
    const location = useLocation();
    const currentPath = location.pathname + location.hash;

    // Check if this link corresponds to the active section on the professional page
    const isProfessionalSection = to.startsWith('/professional#');
    const sectionId = isProfessionalSection ? to.split('#')[1] : null;

    let isActive = false;

    if (location.pathname === '/professional' && isProfessionalSection) {
        // If we are on the professional page, use the scroll spy state
        isActive = activeSection === sectionId;
        // Fallback: if no section is active (e.g. at top), highlight the first one or none? 
        // Actually, let's stick to the spy state. specific handling for initial load might be needed.
    } else {
        // Standard behavior for other pages
        isActive = to.includes('#')
            ? currentPath === to
            : location.pathname.startsWith(to) && (to !== '/' || location.pathname === '/');
    }

    return (
        <NavigationMenuItem>
            <NavigationMenuLink asChild active={isActive}>
                <Link
                    to={to}
                    className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-bold transition-all hover:bg-black/5 focus:outline-none disabled:pointer-events-none disabled:opacity-50 font-serif",
                        isActive
                            ? "text-black border-b-2 border-slate-900 rounded-none"
                            : "text-black/60 hover:text-black"
                    )}
                >
                    {children}
                </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};

const Navbar = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = React.useState('');

    React.useEffect(() => {
        if (location.pathname !== '/professional') {
            setActiveSection('');
            return;
        }

        const handleScroll = () => {
            const sections = ['experience', 'research', 'projects', 'teaching'];

            // Check if user is at the bottom of the page
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

            if (isAtBottom) {
                setActiveSection('teaching');
                return;
            }

            // Find the section that is most visible or closest to the top
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if the top of the section is near the viewport top (adjusted for navbar height)
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    return (
        <nav className="w-full py-4 flex justify-center items-center bg-[#f2f2f2]/95 backdrop-blur-sm sticky top-0 z-50 overflow-x-auto border-b border-black/5">
            <NavigationMenu>
                <NavigationMenuList className="gap-2 sm:gap-4">
                    <NavLink to="/" activeSection={activeSection}>Home</NavLink>
                    <NavLink to="/professional#experience" activeSection={activeSection}>Experience</NavLink>
                    <NavLink to="/professional#research" activeSection={activeSection}>Research</NavLink>
                    <NavLink to="/professional#projects" activeSection={activeSection}>Projects</NavLink>
                    <NavLink to="/professional#teaching" activeSection={activeSection}>Teaching</NavLink>

                    <NavLink to="/studio" activeSection={activeSection}>Studio</NavLink>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
};

export default Navbar;
