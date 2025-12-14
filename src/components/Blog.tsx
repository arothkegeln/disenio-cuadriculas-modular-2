import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const posts = [
    { title: "The State of L2 Scaling in 2026", cat: "Research", date: "2 Days ago" },
    { title: "Announcing our $100M Web3 Fund III", cat: "News", date: "1 Week ago" },
    { title: "Why we invested in Zero-Knowledge Privacy", cat: "Thesis", date: "2 Weeks ago" }
];

export default function Blog() {
    return (
        <section className="py-24 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold">Latest Insights</h2>
                    <button className="text-neon-orange font-bold hover:underline">View All</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-video bg-white/5 rounded-2xl mb-6 border border-white/5 group-hover:border-neon-orange/50 transition-colors relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex items-center gap-4 text-xs font-mono mb-3">
                                <span className="text-neon-orange">{post.cat}</span>
                                <span className="text-text-muted">{post.date}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-orange transition-colors">
                                {post.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm font-bold text-text-secondary group-hover:text-white">
                                Read Full Article <ArrowUpRight size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
