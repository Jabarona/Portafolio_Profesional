import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-surface-container-lowest w-full py-12 mt-20 relative tonal-shift-top">
      <div className="flex justify-center items-center max-w-7xl mx-auto px-8">
        <div className="text-sm font-mono text-outline text-center">
          © {new Date().getFullYear()} JB. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};
