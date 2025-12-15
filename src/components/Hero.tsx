import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const partners = ["StellarFund", "NebulaVentures", "CosmosLabs", "OrionCapital", "PulsarVC", "QuasarInc", "VortexTech", "NovaChain"];

export default function Hero() {
    const { t } = useLanguage();
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-6 overflow-hidden pt-20">

            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-neon-orange/10 rounded-full blur-[120px] animate-float opacity-50" />
                <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[120px] animate-float [animation-delay:-4s] opacity-50" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-orange/30 bg-neon-orange/10 text-neon-orange text-xs font-mono uppercase tracking-widest"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-orange opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-orange"></span>
                    </span>
                    {t('hero.batch')}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8"
                >
                    {t('hero.title_prefix')} <br />
                    <span className="text-gradient">{t('hero.title_suffix')}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-2xl text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    {t('hero.description')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <button className="px-8 py-4 bg-neon-orange text-white font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_-10px_#FF6B35]">
                        {t('hero.cta_primary')}
                    </button>
                    <button className="px-8 py-4 bg-white/5 border border-text-primary/10 text-text-primary font-bold text-lg rounded-full hover:bg-white/10 hover:border-neon-orange transition-all">
                        {t('hero.cta_secondary')}
                    </button>
                </motion.div>
            </div>

            {/* Partners Ticker */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-0 left-0 right-0 h-24 border-t border-white/5 bg-black/40 backdrop-blur-sm flex items-center overflow-hidden"
            >
                <div className="flex gap-12 animate-[scroll_20s_linear_infinite] min-w-full px-12 items-center">
                    {[...partners, ...partners, ...partners].map((partner, i) => (
                        <div key={i} className="flex items-center gap-2 text-text-muted font-display font-bold text-xl uppercase whitespace-nowrap">
                            <Cpu size={20} /> {partner}
                        </div>
                    ))}
                </div>
            </motion.div>

        </section>
    );
}
