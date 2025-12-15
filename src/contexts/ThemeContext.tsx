import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        // Check localStorage or default to 'dark'
        const saved = localStorage.getItem('theme') as Theme;
        return saved || 'dark';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
        // Remove old classes if they exist
        document.documentElement.classList.remove('theme-nova', 'theme-zenply', 'theme-light', 'theme-dark');

        // Add new class only if theme is light (CSS handles dark as default)
        if (theme === 'light') {
            document.documentElement.classList.add('theme-light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
