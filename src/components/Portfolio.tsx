import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';



export default function Portfolio() {
    const { t } = useLanguage();

    const projects = [
        { name: "DeFi Protocol A", raise: "$12M", roi: "45x", type: t('portfolio.types.incubation') },
        { name: "ChainX Layer 2", raise: "$8M", roi: "22x", type: t('portfolio.types.investment') },
        { name: "NFT Market Z", raise: "$25M", roi: "10x", type: t('portfolio.types.advisory') },
        { name: "Metaverse Y", raise: "$5M", roi: "100x", type: t('portfolio.types.incubation') },
        { name: "GameFi Token", raise: "$2M", roi: "55x", type: t('portfolio.types.investment') },
    ];

    return (
        <section id="portfolio" className="py-32 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 flex items-center justify-between">
                <h2 className="text-4xl font-bold">{t('portfolio.title')}</h2>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-neon-orange" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
            </div>

            <div className="relative">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-deep-black to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-deep-black to-transparent z-10" />

                <div className="flex gap-8 px-4 w-max animate-[scroll_30s_linear_infinite]">
                    {[...projects, ...projects, ...projects].map((p, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="w-[350px] glass-card p-8 rounded-2xl border border-white/10 shrink-0 relative group"
                        >
                            <div className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-mono bg-white/10 border border-white/10">
                                {p.type}
                            </div>

                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-black mb-6 border border-white/10 group-hover:border-neon-orange transition-colors" />

                            <h3 className="text-2xl font-bold mb-6">{p.name}</h3>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-text-muted text-xs uppercase tracking-wider mb-1">{t('portfolio.raised')}</div>
                                    <div className="text-xl font-mono text-text-primary">{p.raise}</div>
                                </div>
                                <div>
                                    <div className="text-text-muted text-xs uppercase tracking-wider mb-1">{t('portfolio.roi')}</div>
                                    <div className="text-xl font-mono text-neon-orange">{p.roi}</div>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center text-sm font-bold text-text-muted group-hover:text-white transition-colors cursor-pointer">
                                {t('portfolio.view_case')} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
