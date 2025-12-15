import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';



export default function Team() {
    const { t } = useLanguage();

    const team = [
        { name: "Elena Vo", role: t('team.roles.partner'), bio: t('team.bios.elena'), image: "/assets/images/team-1.png" },
        { name: "David Kim", role: t('team.roles.research'), bio: t('team.bios.david'), image: "/assets/images/team-2.png" },
        { name: "James Wright", role: t('team.roles.tech'), bio: t('team.bios.james'), image: "/assets/images/team-3.png" },
        { name: "Sofia Davis", role: t('team.roles.platform'), bio: t('team.bios.sofia'), image: "/assets/images/team-4.png" },
    ];

    return (
        <section id="team" className="py-24 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">{t('team.title')}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="aspect-square bg-white/5 rounded-2xl mb-6 overflow-hidden relative border border-white/5 group-hover:border-neon-orange/50 transition-colors">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 gap-4">
                                    <a href="#" className="p-2 bg-text-primary text-bg-base rounded-full hover:bg-neon-orange hover:text-white transition-colors"><Linkedin size={18} /></a>
                                    <a href="#" className="p-2 bg-text-primary text-bg-base rounded-full hover:bg-neon-orange hover:text-white transition-colors"><Twitter size={18} /></a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <div className="text-neon-orange text-sm font-medium mb-2">{member.role}</div>
                            <p className="text-text-muted text-sm">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
