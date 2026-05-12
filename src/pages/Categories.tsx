import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { categoriesData, Herb } from '../data/herbs';
import { useLanguage } from '../contexts/useLanguage';
import HerbModal from '../components/HerbModal';
import PageHero from '../components/PageHero';
import { useLocalizedPath } from '../hooks/useLocalizedPath';

const GROUP_ORDER = ['paper', 'perfume', 'other'] as const;
type GroupId = (typeof GROUP_ORDER)[number];

const GROUP_CATEGORY_IDS: Record<GroupId, string[]> = {
  paper: ['culinary', 'tea'],
  perfume: ['aromatic'],
  other: ['medicinal'],
};

const Categories: React.FC = () => {
  const { language, t, getCategoryName, getCategoryDescription, getHerbName } = useLanguage();
  const navigate = useNavigate();
  const lp = useLocalizedPath();
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<GroupId>('paper');

  const isRtl = language === 'ar';
  const slideX = isRtl ? -20 : 20;

  const categoriesInGroup = useMemo(() => {
    const ids = GROUP_CATEGORY_IDS[activeGroup];
    return ids
      .map((id) => categoriesData.find((c) => c.id === id))
      .filter((c): c is NonNullable<typeof c> => Boolean(c));
  }, [activeGroup]);

  const totalInGroup = useMemo(
    () => categoriesInGroup.reduce((n, c) => n + c.herbs.length, 0),
    [categoriesInGroup]
  );

  const handleHerbClick = (herb: Herb) => {
    setSelectedHerb(herb);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHerb(null);
  };

  return (
    <div className="min-h-screen bg-background pb-12" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <PageHero
        title={t('categoriesPage.title')}
        subtitle={t('categoriesPage.subtitle')}
        backLabel={t('categoriesPage.back')}
        onBack={() => navigate(lp('/'))}
      />

      <div className="container mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground md:text-start">
          {t('categoriesPage.pickGroup')}
        </p>
        <div className="no-scrollbar -mx-1 mb-8 flex gap-2 overflow-x-auto px-1 pb-2 md:flex-wrap md:justify-center md:overflow-visible md:pb-0">
          {GROUP_ORDER.map((gid) => {
            const selected = gid === activeGroup;
            return (
              <button
                key={gid}
                type="button"
                onClick={() => setActiveGroup(gid)}
                className={`flex min-w-[10.5rem] shrink-0 flex-col rounded-2xl border px-4 py-3 text-start transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:min-w-[12rem] ${
                  selected
                    ? 'border-primary bg-primary text-primary-foreground shadow-lg ring-2 ring-primary/15'
                    : 'border-border/70 bg-card text-foreground hover:border-primary/35 hover:bg-muted/40'
                }`}
              >
                <span className="text-sm font-bold leading-tight">{t(`categoriesPage.groups.${gid}`)}</span>
                <span
                  className={`mt-1 text-xs leading-snug ${
                    selected ? 'text-primary-foreground/85' : 'text-muted-foreground'
                  }`}
                >
                  {t(`categoriesPage.groupsSubtitle.${gid}`)}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup}
            initial={{ opacity: 0, x: slideX }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -slideX }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[0_24px_70px_-20px_rgba(15,23,42,0.14)]"
          >
            <div className="border-b border-border/50 bg-gradient-to-r from-slate-900 via-primary to-slate-900 px-6 py-6 text-white sm:px-8 sm:py-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold sm:text-3xl">{t(`categoriesPage.groups.${activeGroup}`)}</h2>
                  <p className="mt-2 max-w-2xl text-sm text-white/88 sm:text-base">
                    {t(`categoriesPage.groupsSubtitle.${activeGroup}`)}
                  </p>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
                  {t('categoriesPage.listing', { count: totalInGroup })}
                </div>
              </div>
            </div>

            <div className="space-y-10 p-4 sm:p-6 md:p-8">
              {categoriesInGroup.map((category) => (
                <div key={category.id} className="rounded-2xl border border-border/50 bg-muted/20 p-4 sm:p-5">
                  <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-bold text-foreground sm:text-xl">{getCategoryName(category)}</h3>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {t('categoriesPage.pickCategory')}
                    </span>
                  </div>
                  <p className="mb-4 max-w-3xl text-sm text-muted-foreground sm:text-base">
                    {getCategoryDescription(category)}
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {category.herbs.map((herb) => {
                      const herbName = getHerbName(herb);
                      return (
                        <button
                          key={herb.id}
                          type="button"
                          onClick={() => handleHerbClick(herb)}
                          className="group flex w-full rounded-2xl border border-border/50 bg-card p-4 text-start mac-panel transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                        >
                          <img src={herb.image} alt={herbName} className="h-14 w-14 shrink-0 rounded-xl object-cover" />
                          <div className="ms-3 min-w-0 flex-1">
                            <h4 className="truncate font-semibold text-foreground group-hover:text-primary">{herbName}</h4>
                            <div className="mt-1 flex flex-wrap gap-2">
                              {herb.badge ? (
                                <span className="rounded-full bg-primary/12 px-2 py-0.5 text-xs font-medium text-primary">
                                  {herb.badge}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <Eye className="ms-2 h-4 w-4 shrink-0 self-center text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <HerbModal herb={selectedHerb} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Categories;
