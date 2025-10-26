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
    { key: 'products', href: '/products', action: () => navigate('/products') }
  ];

  const customerCareLinks = [
    { name: 'FAQ', action: () => navigate('/faq') },
    { name: 'Shipping Info', action: () => navigate('/shipping') },
    { name: 'Returns', action: () => navigate('/returns') },
    { name: 'Support', action: () => navigate('/support') }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/egymak', color: 'hover:text-blue-500' },
    { icon: Instagram, href: 'https://instagram.com/egymak', color: 'hover:text-pink-500' },
    { icon: Twitter, href: 'https://twitter.com/egymak', color: 'hover:text-blue-400' }
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
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
                  <img 
                    src="/src/assets/logo.png" 
                    alt="EGYMAK - Premium Egyptian Herbs Logo" 
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-xl font-bold">EGYMAK</span>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{t('footerAbout')}</h4>
              <p className="text-primary-foreground/80 leading-relaxed">
                {t('footerDesc')}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <a href="mailto:egymak@gmail.com" className="text-sm hover:text-accent transition-colors">
                  egymak@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <a href="tel:+201032013000" className="text-sm hover:text-accent transition-colors">
                  +201032013000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">{t('quickLinks')}</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleLinkClick(link.action)}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-left"
                >
                  {t(link.key)}
                </button>
              ))}
            </nav>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold mb-6">{t('customerCare')}</h4>
            <nav className="space-y-3">
              {customerCareLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.action)}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-6">{t('followUs')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="font-medium mb-3">Payment Methods</h5>
              <div className="flex space-x-2">
                <div className="w-10 h-6 bg-primary-foreground/10 rounded flex items-center justify-center">
                  <span className="text-xs">💳</span>
                </div>
                <div className="w-10 h-6 bg-primary-foreground/10 rounded flex items-center justify-center">
                  <span className="text-xs">🏦</span>
                </div>
                <div className="w-10 h-6 bg-primary-foreground/10 rounded flex items-center justify-center">
                  <span className="text-xs">📱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-primary-foreground/60 text-sm">
                  © 2025 EGYMAK. All rights reserved.
                </p>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => navigate('/privacy')}
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigate('/terms')}
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => navigate('/cookies')}
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;