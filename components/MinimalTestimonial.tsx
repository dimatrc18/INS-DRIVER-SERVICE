import React from 'react';


interface MinimalTestimonialProps {
    quote: string;
    author: string;
}

const MinimalTestimonial: React.FC<MinimalTestimonialProps> = ({ quote, author }) => {
    return (
        <section className="py-24 bg-zinc-50 border-y border-zinc-100">
            <div className="max-w-4xl mx-auto px-4 text-center">

                <blockquote className="text-2xl md:text-3xl font-sans font-light italic text-zinc-900 leading-relaxed mb-10">
                    "{quote}"
                </blockquote>
                <div className="w-12 h-0.5 bg-gold/30 mx-auto mb-6"></div>
                <cite className="not-italic text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                    {author}
                </cite>
            </div>
        </section>
    );
};

export default MinimalTestimonial;
