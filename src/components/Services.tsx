import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart, Users, Megaphone, Coins, Code, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';



export default function Services() {
    const { t } = useLanguage();

    const services = [
        { title: t('services.items.fundraising'), icon: BarChart },
        { title: t('services.items.treasury'), icon: Coins },
        { title: t('services.items.partnerships'), icon: Users },
        { title: t('services.items.marketing'), icon: Megaphone },
        { title: t('services.items.token'), icon: Code },
        { title: t('services.items.security'), icon: Shield },
    ];

    return (
        <section className="py-24 px-4 md:px-6 bg-black/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('services.title')}</h2>
                        <p className="text-text-muted">{t('services.subtitle')}</p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-neon-orange font-bold hover:text-text-primary transition-colors">
                        {t('services.cta')} <ArrowUpRight size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group glass-card p-8 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/[0.05] cursor-pointer"
                        >
                            <div className="p-3 bg-white/5 rounded-lg text-neon-orange group-hover:bg-neon-orange group-hover:text-white transition-colors duration-300">
                                <s.icon size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                                <p className="text-text-muted text-sm group-hover:text-text-primary/80 transition-colors">
                                    {t('services.card_desc')}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
