import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Rocket } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
    { name: 'Programas', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Recursos', href: '#' },
    { name: 'Equipo', href: '#' },
    { name: 'Contacto', href: '#' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled
                    ? "bg-deep-black/80 backdrop-blur-lg py-4 border-white/5"
                    : "bg-transparent py-8"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2 font-display font-bold text-2xl tracking-tighter cursor-pointer group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-orange to-neon-purple flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <Rocket className="text-white w-5 h-5 fill-current" />
                    </div>
                    <span>NOVA<span className="text-neon-orange">VENTURES</span></span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-text-secondary hover:text-neon-orange transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-orange transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}

                    <div className="flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-white cursor-pointer transition-colors">
                        Ecosistema <ChevronDown size={14} />
                    </div>

                    <button className="px-6 py-2.5 bg-white text-deep-black font-bold text-sm rounded-full hover:bg-neon-orange hover:text-white transition-all duration-300 shadow-[0_0_15px_-5px_rgba(255,255,255,0.5)] hover:shadow-[0_0_20px_-5px_#FF6B35]">
                        Aplicar
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 bg-deep-black/95 backdrop-blur-xl z-40 md:hidden pt-24 px-6 flex flex-col gap-6"
                    >
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-2xl font-display font-bold text-text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
