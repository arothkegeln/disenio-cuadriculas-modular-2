import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Moon, Sun, Globe } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();

    const navItems = [
        { name: t('nav.programs'), href: '#programs' },
        { name: t('nav.portfolio'), href: '#portfolio' },
        { name: t('nav.resources'), href: '#blog' },
        { name: t('nav.team'), href: '#team' },
        { name: t('nav.contact'), href: '#footer' },
    ];

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
                <a href="/" className="flex items-center gap-2 cursor-pointer group">
                    {/* Replace with Image Logo */}
                    <img src="/logo-full.png" alt="Company Logo" className="h-10 w-auto object-contain" />
                </a>

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
                        {t('nav.ecosystem')} <ChevronDown size={14} />
                    </div>

                    {/* Toggles */}
                    <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                        <button onClick={toggleTheme} className="text-text-secondary hover:text-text-primary transition-colors">
                            {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button
                            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                            className="text-text-secondary hover:text-text-primary transition-colors font-mono text-xs flex items-center gap-1"
                        >
                            <Globe size={16} />
                            {language.toUpperCase()}
                        </button>
                    </div>

                    <button className="px-6 py-2.5 bg-white text-deep-black font-bold text-sm rounded-full hover:bg-neon-orange hover:text-white transition-all duration-300 shadow-[0_0_15px_-5px_rgba(255,255,255,0.5)] hover:shadow-[0_0_20px_-5px_#FF6B35]">
                        {t('nav.apply')}
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
                        <div className="flex gap-6 mt-8">
                            <button onClick={toggleTheme} className="flex items-center gap-2 text-text-primary border border-white/10 px-4 py-2 rounded-lg">
                                {theme === 'light' ? <Sun /> : <Moon />} {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                            </button>
                            <button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')} className="flex items-center gap-2 text-text-primary border border-white/10 px-4 py-2 rounded-lg">
                                <Globe /> {language === 'en' ? 'Spanish' : 'English'}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
