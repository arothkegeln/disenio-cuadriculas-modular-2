import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';



export default function Methodology() {
    const { t } = useLanguage();

    const steps = [
        {
            step: t('methodology.steps.alignment.step'),
            title: t('methodology.steps.alignment.title'),
            description: t('methodology.steps.alignment.desc'),
            accent: "border-bamboo-green"
        },
        {
            step: t('methodology.steps.build.step'),
            title: t('methodology.steps.build.title'),
            description: t('methodology.steps.build.desc'),
            accent: "border-deep-purple"
        },
        {
            step: t('methodology.steps.scale.step'),
            title: t('methodology.steps.scale.title'),
            description: t('methodology.steps.scale.desc'),
            accent: "border-off-white"
        }
    ];

    return (
        <section className="py-24 px-4 md:px-6 bg-black/20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('methodology.title')}</h2>
                    <p className="text-muted-gray max-w-2xl text-lg">
                        {t('methodology.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`glass-panel p-8 rounded-xl border-t-4 ${item.accent} hover:-translate-y-2 transition-transform duration-300`}
                        >
                            <div className="text-4xl font-mono font-bold text-text-primary/10 mb-6">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-muted-gray leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
