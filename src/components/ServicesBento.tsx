import { motion } from 'framer-motion';
import { LayoutGrid, TrendingUp, ShieldCheck, Cpu } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
    {
        title: "Enterprise SaaS",
        description: "Scalable, secure, and mission-critical software solutions designed for the modern enterprise ecosystem.",
        icon: LayoutGrid,
        className: "md:col-span-2",
    },
    {
        title: "Strategic Consulting",
        description: "Navigating digital transformation with data-driven insights and future-proof architecture.",
        icon: TrendingUp,
        className: "md:col-span-1",
    },
    {
        title: "Process Engineering",
        description: "Optimizing workflows through intelligent automation and refined technical processes.",
        icon: Cpu,
        className: "md:col-span-1",
    },
    {
        title: "Digital Portfolios",
        description: "Crafting high-performance digital narratives for brands that demand excellence.",
        icon: ShieldCheck,
        className: "md:col-span-2",
    },
];

export default function ServicesBento() {
    return (
        <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
            <div className="mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    Our Expertise
                </motion.h2>
                <div className="h-1 w-20 bg-bamboo-green rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={cn(
                            "glass-card p-8 rounded-2xl relative overflow-hidden group min-h-[300px] flex flex-col justify-between",
                            service.className
                        )}
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-bamboo-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 text-bamboo-green group-hover:bg-bamboo-green group-hover:text-deep-space transition-colors duration-300">
                                <service.icon size={24} />
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-bamboo-green transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-muted-gray leading-relaxed text-lg">
                                {service.description}
                            </p>
                        </div>

                        <div className="relative z-10 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <span className="text-sm font-medium text-bamboo-green uppercase tracking-wider">Learn more &rarr;</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
