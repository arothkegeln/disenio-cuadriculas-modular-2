

const press = [
    "TechCrunch", "CoinDesk", "Bloomberg crypto", "Forbes", "The Block", "Decrypt", "VentureBeat"
];

export default function Press() {
    return (
        <section className="py-20 border-b border-white/5 bg-black/40 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 text-center">
                <p className="text-text-muted text-sm uppercase tracking-widest">Featured In</p>
            </div>

            <div className="flex gap-16 overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-deep-black to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-deep-black to-transparent z-10" />

                <div className="flex gap-16 animate-[scroll_40s_linear_infinite] min-w-full items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {[...press, ...press, ...press, ...press].map((p, i) => (
                        <span key={i} className="text-2xl font-display font-bold whitespace-nowrap">{p}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
