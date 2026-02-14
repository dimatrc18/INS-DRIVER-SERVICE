import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ChevronDown, Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { locale } = useParams<{ locale: string }>();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = i18n.language || 'en';

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'it', label: 'IT' },
    { code: 'ru', label: 'RU' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLanguage = (targetLang: string) => {
    if (currentLang === targetLang) {
      setIsOpen(false);
      return;
    }

    let path = location.pathname;
    const parts = path.split('/');
    if (parts[1] === 'en' || parts[1] === 'it' || parts[1] === 'ru') {
      parts.splice(1, 1);
      path = parts.join('/');
    }
    if (!path.startsWith('/')) path = '/' + path;
    path = path.replace('//', '/');

    navigate(`/${targetLang}${path}`);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-zinc-200 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-900 hover:bg-zinc-50 transition-all"
      >
        <Globe size={14} className="text-zinc-400" />
        <span>{currentLang.toUpperCase()}</span>
        <ChevronDown size={12} className={`text-zinc-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-2xl shadow-xl border border-zinc-100 overflow-hidden py-2 z-50 animate-in fade-in zoom-in-95 duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`w-full text-left px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-between ${currentLang === lang.code
                  ? 'bg-zinc-50 text-gold'
                  : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900'
                }`}
            >
              <span>{lang.label}</span>
              {currentLang === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
