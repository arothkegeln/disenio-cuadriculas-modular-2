import { motion } from 'framer-motion';
import { Layers, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';



export default function ValueProp() {
    const { t } = useLanguage();

    const programs = [
        {
            step: t('value_prop.steps.incubation.step'),
            title: t('value_prop.steps.incubation.title'),
            description: t('value_prop.steps.incubation.desc'),
            icon: Layers,
            badge: t('value_prop.steps.incubation.badge')
        },
        {
            step: t('value_prop.steps.acceleration.step'),
            title: t('value_prop.steps.acceleration.title'),
            description: t('value_prop.steps.acceleration.desc'),
            icon: Zap,
            badge: t('value_prop.steps.acceleration.badge')
        }
    ];

    return (
        <section id="programs" className="py-24 px-4 md:px-6 relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

                {/* Left: Content */}
                <div className="flex-1 w-full">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-neon-orange font-mono text-sm tracking-widest mb-4 block"
                    >
                        {t('value_prop.label')}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-8"
                    >
                        {t('value_prop.title_prefix')} <br />
                        <span className="text-text-muted">{t('value_prop.title_suffix')}</span>
                    </motion.h2>

                    <div className="space-y-6">
                        {programs.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ translateY: -5 }}
                                className="glass-card p-6 rounded-xl border border-white/5 relative overflow-hidden group"
                            >
                                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <item.icon size={80} />
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="font-mono text-2xl text-neon-orange/50">{item.step}</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-neon-orange transition-colors">{item.title}</h3>
                                        <p className="text-text-muted text-sm leading-relaxed max-w-md">{item.description}</p>
                                        <div className="mt-4 inline-block px-3 py-1 rounded bg-white/5 text-xs font-mono border border-white/5 group-hover:border-neon-orange/30 transition-colors">
                                            {item.badge}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: 3D Element Placeholder */}
                <div className="flex-1 w-full h-[500px] flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-orange/20 to-neon-purple/20 rounded-full blur-[100px]" />
                    {/* Abstract Geometric CSS Shape */}
                    <div className="relative w-64 h-64 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]">
                        <div className="absolute inset-2 border border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-8 border border-neon-orange/30 rounded-full animate-[spin_8s_linear_infinite]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 bg-gradient-to-br from-neon-orange to-neon-purple rounded-full blur-xl opacity-50 animate-pulse" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
