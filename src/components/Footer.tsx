import { Rocket, Twitter, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();
    return (
        <footer id="footer" className="py-20 px-4 md:px-6 border-t border-white/10 bg-deep-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-orange to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 font-display font-bold text-2xl tracking-tighter mb-6">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-orange to-neon-purple flex items-center justify-center">
                            <Rocket className="text-white w-5 h-5 fill-current" />
                        </div>
                        <span>Zenply</span>
                    </div>
                    <p className="text-text-muted max-w-sm mb-8">
                        {t('footer.description')}
                    </p>

                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder={t('footer.subscribe_placeholder')}
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 min-w-[240px] focus:outline-none focus:border-neon-orange transition-colors"
                        />
                        <button className="bg-neon-orange text-white font-bold px-6 py-3 rounded-lg hover:bg-neon-orange/80 transition-colors">
                            {t('footer.subscribe_btn')}
                        </button>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-lg">{t('footer.headers.ecosystem')}</h4>
                    <ul className="space-y-4 text-text-muted">
                        <li className="hover:text-neon-orange cursor-pointer transition-colors">{t('footer.links.portfolio')}</li>
                        <li className="hover:text-neon-orange cursor-pointer transition-colors">{t('footer.links.incubation')}</li>
                        <li className="hover:text-neon-orange cursor-pointer transition-colors">{t('footer.links.apply')}</li>
                        <li className="hover:text-neon-orange cursor-pointer transition-colors">{t('footer.links.partners')}</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-lg">{t('footer.headers.company')}</h4>
                    <ul className="space-y-4 text-text-muted">
                        <li className="hover:text-neon-orange cursor-pointer transition-colors">{t('footer.links.about')}</li>
                        <li className="hover:text-neon-orange cursor-pointer transition-colors">{t('footer.links.careers')} <span className="text-xs bg-white/10 px-2 py-0.5 rounded ml-2">{t('footer.links.hiring')}</span></li>
                        <li className="hover:text-neon-orange cursor-pointer transition-colors">{t('footer.links.blog')}</li>
                        <li className="hover:text-neon-orange cursor-pointer transition-colors">{t('footer.links.contact')}</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
                <div className="text-sm text-text-muted mb-4 md:mb-0">
                    {t('footer.copyright')}
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-text-muted hover:text-text-primary transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-text-muted hover:text-text-primary transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-text-muted hover:text-text-primary transition-colors"><Github size={20} /></a>
                </div>
            </div>
        </footer>
    );
}
