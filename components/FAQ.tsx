import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useTranslation('faq');

  const faqs: FAQItem[] = t('questions', { returnObjects: true }) as FAQItem[];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-zinc-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-zinc-900 tracking-tight mb-4">
            {t('title')}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-zinc-500 text-lg">
            {t('subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {Array.isArray(faqs) && faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-zinc-100 overflow-hidden transition-all duration-300 hover:border-gold/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-bold text-zinc-900 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-gold">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-zinc-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-500 mb-4">{t('stillQuestions')}</p>
          <a
            href="https://wa.me/393312988099"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all duration-300"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.559.924 3.036 1.411 4.708 1.412 5.421 0 9.833-4.412 9.836-9.834.002-2.628-1.023-5.097-2.887-6.963-1.864-1.865-4.334-2.889-6.96-2.889-5.425 0-9.839 4.414-9.841 9.836 0 1.745.513 3.315 1.483 4.887l-1.127 4.116 4.388-1.152zm11.23-7.581c-.301-.15-.178-.363-1.054-.803-.178-.09-.301-.09-.43 0-.13.13-.301.302-.43.518-.043.086-.172.086-.301.043-.193-.09-.817-.302-1.547-.948-.559-.517-.946-1.12-1.075-1.335-.13-.216-.014-.332.093-.439.101-.1.215-.245.32-.363.109-.125.13-.215.193-.345.066-.13.043-.245-.022-.363-.066-.13-.43-1.054-.587-1.448-.15-.363-.301-.302-.43-.302-.13 0-.279-.022-.43-.022-.13 0-.344.043-.516.245-.258.245-.817.803-.817 1.961 0 1.158.839 2.279.946 2.43.109.15 1.63 2.508 3.948 3.512.551.241 1.011.391 1.366.505.565.178 1.082.15 1.492.09.458-.066 1.405-.587 1.604-1.144.193-.558.193-1.054.13-1.158-.066-.13-.215-.215-.515-.345z" />
            </svg>
            WhatsApp +39 331 298 8099
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
