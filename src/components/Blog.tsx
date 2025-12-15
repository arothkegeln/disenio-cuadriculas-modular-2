import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';



export default function Blog() {
    const { t } = useLanguage();

    const posts = [
        { title: t('blog.posts.p1.title'), cat: t('blog.posts.p1.cat'), date: t('blog.posts.p1.date'), image: "/assets/images/blog-1.png" },
        { title: t('blog.posts.p2.title'), cat: t('blog.posts.p2.cat'), date: t('blog.posts.p2.date'), image: "/assets/images/blog-2.png" },
        { title: t('blog.posts.p3.title'), cat: t('blog.posts.p3.cat'), date: t('blog.posts.p3.date'), image: "/assets/images/blog-1.png" }
    ];

    return (
        <section id="blog" className="py-24 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold">{t('blog.title')}</h2>
                    <button className="text-neon-orange font-bold hover:underline">{t('blog.view_all')}</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-video bg-white/5 rounded-2xl mb-6 border border-white/5 group-hover:border-neon-orange/50 transition-colors relative overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
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
                                {t('blog.read_more')} <ArrowUpRight size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
