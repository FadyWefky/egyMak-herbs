import React from 'react';
import { ArrowLeft } from 'lucide-react';

export type PageHeroProps = {
  title: string;
  subtitle?: string;
  backLabel: string;
  onBack: () => void;
  children?: React.ReactNode;
};

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backLabel, onBack, children }) => {
  return (
    <div className="relative overflow-hidden border-b border-border/50">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/92 to-slate-900"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay bg-[radial-gradient(circle_at_20%_20%,white,transparent_50%),radial-gradient(circle_at_80%_0%,hsl(210,40%,96%),transparent_40%),radial-gradient(circle_at_50%_100%,hsl(210,45%,22%),transparent_55%)]"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" aria-hidden />
      <div className="container relative mx-auto px-4 py-10 sm:py-14 md:py-16 text-primary-foreground">
        <button
          type="button"
          onClick={onBack}
          className="group mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:border-white/40 hover:bg-white/18"
        >
          <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5 rtl:rotate-180 rtl:group-hover:translate-x-0.5" />
          {backLabel}
        </button>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-sm">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">{subtitle}</p>
          ) : null}
        </div>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </div>
  );
};

export default PageHero;
