import { motion } from 'framer-motion';

const steps = [
    {
        step: "01",
        title: "Strategic Alignment",
        description: "We deep-dive into your business goals, ensuring every technical decision maps directly to value.",
        accent: "border-bamboo-green"
    },
    {
        step: "02",
        title: "Modular Build",
        description: "Architecting flexible, scalable systems using modern composable technologies.",
        accent: "border-deep-purple"
    },
    {
        step: "03",
        title: "Seamless Scale",
        description: "Deploying robust infrastructure that grows with your user base without friction.",
        accent: "border-off-white"
    }
];

export default function Methodology() {
    return (
        <section className="py-24 px-4 md:px-6 bg-black/20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6"> Our Methodology</h2>
                    <p className="text-muted-gray max-w-2xl text-lg">
                        A proven framework for delivering excellence at scale.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((item, index) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`glass-panel p-8 rounded-xl border-t-4 ${item.accent} hover:-translate-y-2 transition-transform duration-300`}
                        >
                            <div className="text-4xl font-mono font-bold text-white/10 mb-6">
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
