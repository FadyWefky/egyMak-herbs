import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';

const Footer: React.FC = React.memo(() => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const quickLinks = [
    { key: 'home', href: '/', action: () => navigate('/') },
    { key: 'categories', href: '/categories', action: () => navigate('/categories') },
    { key: 'about', href: '/about', action: () => navigate('/about') },
    { key: 'products', href: '/products', action: () => navigate('/products') },
  ];

  const customerCareLinks = [
    { key: 'faq', action: () => navigate('/faq') },
    { key: 'shippingInfo', action: () => navigate('/shipping') },
    { key: 'returns', action: () => navigate('/returns') },
    { key: 'support', action: () => navigate('/support') },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/egymak', color: 'hover:text-sky-300' },
    { icon: Instagram, href: 'https://instagram.com/egymak', color: 'hover:text-sky-200' },
    { icon: Twitter, href: 'https://twitter.com/egymak', color: 'hover:text-sky-300' },
  ];

  const handleLinkClick = (action: () => void) => {
    action();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="bg-primary text-primary-foreground"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt={t('footer.logoAlt')}
                className="w-8 h-8 object-contain"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold">EGYMAK</span>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{t('footerAbout')}</h4>
              <p className="text-primary-foreground/80 leading-relaxed">{t('footerDesc')}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:egymak@gmail.com" className="text-sm hover:text-sky-300 transition-colors">
                  egymak@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+201032013000" className="text-sm hover:text-sky-300 transition-colors">
                  +201032013000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="text-sm">{t('footer.locationShort')}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">{t('quickLinks')}</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.key}
                  type="button"
                  onClick={() => handleLinkClick(link.action)}
                  className="block w-full text-start text-primary-foreground/80 hover:text-sky-300 transition-colors duration-300"
                >
                  {t(link.key)}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-6">{t('customerCare')}</h4>
            <nav className="space-y-3">
              {customerCareLinks.map((link) => (
                <button
                  key={link.key}
                  type="button"
                  onClick={() => handleLinkClick(link.action)}
                  className="block w-full text-start text-primary-foreground/80 hover:text-sky-300 transition-colors duration-300"
                >
                  {t(`footer.${link.key}`)}
                </button>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div>
            <h4 className="font-semibold mb-6">{t('followUs')}</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 mac-panel flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 bg-primary-foreground/5`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="font-medium mb-3">{t('footer.paymentMethods')}</h5>
              <div className="flex flex-wrap gap-2">
                <div className="w-10 h-6 bg-primary-foreground/10 rounded-md flex items-center justify-center mac-panel">
                  <span className="text-xs">💳</span>
                </div>
                <div className="w-10 h-6 bg-primary-foreground/10 rounded-md flex items-center justify-center mac-panel">
                  <span className="text-xs">🏦</span>
                </div>
                <div className="w-10 h-6 bg-primary-foreground/10 rounded-md flex items-center justify-center mac-panel">
                  <span className="text-xs">📱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-start">
              {t('common.copyright')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <button
                type="button"
                onClick={() => navigate('/privacy')}
                className="text-primary-foreground/60 hover:text-sky-300 transition-colors duration-300"
              >
                {t('footer.privacyPolicy')}
              </button>
              <button
                type="button"
                onClick={() => navigate('/terms')}
                className="text-primary-foreground/60 hover:text-sky-300 transition-colors duration-300"
              >
                {t('footer.termsOfService')}
              </button>
              <button
                type="button"
                onClick={() => navigate('/cookies')}
                className="text-primary-foreground/60 hover:text-sky-300 transition-colors duration-300"
              >
                {t('footer.cookiePolicy')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
