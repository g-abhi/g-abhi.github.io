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

const NavLink = ({ to, children }) => {
    const location = useLocation();
    const currentPath = location.pathname + location.hash;
    const isActive = to.includes('#')
        ? currentPath === to
        : location.pathname.startsWith(to) && (to !== '/' || location.pathname === '/');

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
    return (
        <nav className="w-full py-4 flex justify-center items-center bg-[#f2f2f2]/95 backdrop-blur-sm sticky top-0 z-50 overflow-x-auto border-b border-black/5">
            <NavigationMenu>
                <NavigationMenuList className="gap-2 sm:gap-4">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/professional#experience">CV</NavLink>
                    <NavLink to="/professional#research">Research</NavLink>
                    <NavLink to="/professional#projects">Projects</NavLink>
                    <NavLink to="/professional#teaching">Teaching</NavLink>

                    <NavLink to="/explorations">Studio</NavLink>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
};

export default Navbar;
