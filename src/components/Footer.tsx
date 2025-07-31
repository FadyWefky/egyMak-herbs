import React from 'react';
import { Leaf, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'categories', href: '#categories' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' }
  ];

  const customerCareLinks = [
    'FAQ',
    'Shipping Info',
    'Returns',
    'Support'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' }
  ];

  return (
    <footer 
      className="bg-primary text-primary-foreground"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-primary-foreground/80 mb-6">
              Get the latest updates on new herbs, special offers, and wellness tips
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-card text-foreground border-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">HerbMart</span>
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
                <span className="text-sm">info@herbmart.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">123 Herb Garden St, Green City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">{t('quickLinks')}</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold mb-6">{t('customerCare')}</h4>
            <nav className="space-y-3">
              {customerCareLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-6">{t('followUs')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-primary-foreground/10 rounded-full ml-5 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
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
              © 2024 HerbMart. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;