import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../contexts/useLanguage";
import { useLocalizedPath } from "../hooks/useLocalizedPath";

const NotFound = () => {
  const location = useLocation();
  const { t, language } = useLanguage();
  const lp = useLocalizedPath();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background px-4"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="mac-panel max-w-md w-full p-10 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-primary">{t('notFound.title')}</h1>
        <p className="text-lg text-muted-foreground mb-6">{t('notFound.message')}</p>
        <Link
          to={lp('/')}
          className="inline-flex items-center justify-center rounded-[10px] bg-primary px-6 py-3 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors duration-300"
        >
          {t('notFound.homeLink')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
