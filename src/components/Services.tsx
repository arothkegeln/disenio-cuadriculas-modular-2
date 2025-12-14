import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart, Users, Megaphone, Coins, Code, Shield } from 'lucide-react';

const services = [
    { title: "Fundraising Management", icon: BarChart },
    { title: "Treasury Building", icon: Coins },
    { title: "Strategic Partnerships", icon: Users },
    { title: "Marketing & GTM", icon: Megaphone },
    { title: "Token Strategy", icon: Code },
    { title: "Security Audits", icon: Shield },
];

export default function Services() {
    return (
        <section className="py-24 px-4 md:px-6 bg-black/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">End-to-End Support</h2>
                        <p className="text-text-muted">From concept to global launch.</p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-neon-orange font-bold hover:text-white transition-colors">
                        View All Services <ArrowUpRight size={20} />
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
                                <p className="text-text-muted text-sm group-hover:text-white/80 transition-colors">
                                    Complete lifecycle management and expert advisory.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
