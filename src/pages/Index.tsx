import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ScrollToTop from '../components/ScrollToTop';
import { Skeleton } from '@/components/ui/skeleton';
import { useLanguage } from '../contexts/useLanguage';
import { isSupportedLocale, withLocalePrefix } from '../utils/localePath';

const About = React.lazy(() => import('../components/About'));
const Categories = React.lazy(() => import('../components/Categories'));
const FeaturedProducts = React.lazy(() => import('../components/FeaturedProducts'));
const GetInTouch = React.lazy(() => import('../components/GetInTouch'));
const HealthBenefits = React.lazy(() => import('../components/HealthBenefits'));
const Testimonials = React.lazy(() => import('../components/Testimonials'));
const HerbStats = React.lazy(() => import('../components/HerbStats'));
const CategoriesPage = React.lazy(() => import('./Categories'));
const ProductsPage = React.lazy(() => import('./Products'));
const HealthBenefitsPage = React.lazy(() => import('./HealthBenefits'));
const FAQ = React.lazy(() => import('./FAQ'));
const Shipping = React.lazy(() => import('./Shipping'));
const Returns = React.lazy(() => import('./Returns'));
const Support = React.lazy(() => import('./Support'));
const Privacy = React.lazy(() => import('./Privacy'));
const Terms = React.lazy(() => import('./Terms'));
const Cookies = React.lazy(() => import('./Cookies'));
const NotFound = React.lazy(() => import('./NotFound'));
const Sourcing = React.lazy(() => import('./Sourcing'));

const PageLoadingSpinner = () => {
  const { t } = useLanguage();
  return (
    <div
      className="container mx-auto px-4 py-16 max-w-3xl space-y-6"
      aria-busy="true"
      aria-label={t('common.loading')}
    >
      <Skeleton className="h-10 w-2/3 max-w-md rounded-[10px] bg-muted" />
      <Skeleton className="h-4 w-full rounded-md bg-muted" />
      <Skeleton className="h-4 w-[90%] rounded-md bg-muted" />
      <Skeleton className="h-4 w-[75%] rounded-md bg-muted" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        <Skeleton className="h-36 rounded-[11px] bg-muted" />
        <Skeleton className="h-36 rounded-[11px] bg-muted" />
      </div>
    </div>
  );
};

function LangShell() {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (lang && isSupportedLocale(lang)) setLanguage(lang);
  }, [lang, setLanguage]);

  if (!lang || !isSupportedLocale(lang)) {
    return <Navigate to={withLocalePrefix('en', location.pathname)} replace />;
  }

  return <Outlet />;
}

function AppLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-[4.5rem]">
        <Suspense fallback={<PageLoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<PageLoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<PageLoadingSpinner />}>
        <Categories />
      </Suspense>
      <Suspense fallback={<PageLoadingSpinner />}>
        <FeaturedProducts />
      </Suspense>
      <Suspense fallback={<PageLoadingSpinner />}>
        <HealthBenefits />
      </Suspense>
      <Suspense fallback={<PageLoadingSpinner />}>
        <HerbStats />
      </Suspense>
      <Suspense fallback={<PageLoadingSpinner />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<PageLoadingSpinner />}>
        <GetInTouch />
      </Suspense>
    </>
  );
}

function LegacyHealthBenefitRedirect() {
  const { benefitId } = useParams<{ benefitId: string }>();
  return <Navigate to={`/en/health-benefits/${benefitId ?? ''}`} replace />;
}

const Index = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/about" element={<Navigate to="/en/about" replace />} />
        <Route path="/categories" element={<Navigate to="/en/categories" replace />} />
        <Route path="/products" element={<Navigate to="/en/products" replace />} />
        <Route path="/sourcing" element={<Navigate to="/en/sourcing" replace />} />
        <Route path="/faq" element={<Navigate to="/en/faq" replace />} />
        <Route path="/shipping" element={<Navigate to="/en/shipping" replace />} />
        <Route path="/returns" element={<Navigate to="/en/returns" replace />} />
        <Route path="/support" element={<Navigate to="/en/support" replace />} />
        <Route path="/privacy" element={<Navigate to="/en/privacy" replace />} />
        <Route path="/terms" element={<Navigate to="/en/terms" replace />} />
        <Route path="/cookies" element={<Navigate to="/en/cookies" replace />} />
        <Route path="/health-benefits/:benefitId" element={<LegacyHealthBenefitRedirect />} />

        <Route path="/:lang" element={<LangShell />}>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="sourcing" element={<Sourcing />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="health-benefits/:benefitId" element={<HealthBenefitsPage />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="returns" element={<Returns />} />
            <Route path="support" element={<Support />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="cookies" element={<Cookies />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default Index;
