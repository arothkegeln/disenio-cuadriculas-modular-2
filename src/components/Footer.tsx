import { Rocket, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-20 px-4 md:px-6 border-t border-white/10 bg-deep-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-orange to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 font-display font-bold text-2xl tracking-tighter mb-6">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-orange to-neon-purple flex items-center justify-center">
                            <Rocket className="text-white w-5 h-5 fill-current" />
                        </div>
                        <span>NOVA<span className="text-neon-orange">VENTURES</span></span>
                    </div>
                    <p className="text-text-muted max-w-sm mb-8">
                        Backing the most ambitious founders building the decentralized future.
                    </p>

                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 min-w-[240px] focus:outline-none focus:border-neon-orange transition-colors"
                        />
                        <button className="bg-neon-orange text-white font-bold px-6 py-3 rounded-lg hover:bg-neon-orange/80 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-lg">Ecosystem</h4>
                    <ul className="space-y-4 text-text-muted">
                        <li className="hover:text-neon-orange cursor-pointer transition-colors">Portfolio</li>
                        <li className="hover:text-neon-orange cursor-pointer transition-colors">Incubation</li>
                        <li className="hover:text-neon-orange cursor-pointer transition-colors">Apply for Funding</li>
                        <li className="hover:text-neon-orange cursor-pointer transition-colors">Partners</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-lg">Company</h4>
                    <ul className="space-y-4 text-text-muted">
                        <li className="hover:text-neon-orange cursor-pointer transition-colors">About Us</li>
                        <li className="hover:text-neon-orange cursor-pointer transition-colors">Careers <span className="text-xs bg-white/10 px-2 py-0.5 rounded ml-2">Hiring</span></li>
                        <li className="hover:text-neon-orange cursor-pointer transition-colors">Blog</li>
                        <li className="hover:text-neon-orange cursor-pointer transition-colors">Contact</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
                <div className="text-sm text-text-muted mb-4 md:mb-0">
                    © 2026 Nova Ventures. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-text-muted hover:text-white transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-text-muted hover:text-white transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-text-muted hover:text-white transition-colors"><Github size={20} /></a>
                </div>
            </div>
        </footer>
    );
}
