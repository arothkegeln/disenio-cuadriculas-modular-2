import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
    { name: "Elena Vo", role: "Managing Partner", bio: "Ex-Goldman Sachs, Crypto native since 2016." },
    { name: "David Kim", role: "Head of Research", bio: "PhD in Cryptography, protocol architect." },
    { name: "James Wright", role: "Technical Lead", bio: "Core contributor to Ethereum & Polkadot." },
    { name: "Sofia Davis", role: "Head of Platform", bio: "Expert in community growth and DAOs." },
];

export default function Team() {
    return (
        <section className="py-24 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Built by Builders</h2>

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
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 gap-4">
                                    <a href="#" className="p-2 bg-white text-black rounded-full hover:bg-neon-orange hover:text-white transition-colors"><Linkedin size={18} /></a>
                                    <a href="#" className="p-2 bg-white text-black rounded-full hover:bg-neon-orange hover:text-white transition-colors"><Twitter size={18} /></a>
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
