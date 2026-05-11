import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ScrollToTop from '../components/ScrollToTop';
import { Skeleton } from '@/components/ui/skeleton';
import { useLanguage } from '../contexts/useLanguage';

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

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<PageLoadingSpinner />}>
          {children}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

const Index = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
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
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <Suspense fallback={<PageLoadingSpinner />}>
                <About />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/categories"
          element={
            <Layout>
              <Suspense fallback={<PageLoadingSpinner />}>
                <CategoriesPage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <Suspense fallback={<PageLoadingSpinner />}>
                <ProductsPage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/health-benefits/:benefitId"
          element={
            <Layout>
              <Suspense fallback={<PageLoadingSpinner />}>
                <HealthBenefitsPage />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <Suspense fallback={<PageLoadingSpinner />}>
                <FAQ />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/shipping"
          element={
            <Layout>
              <Suspense fallback={<PageLoadingSpinner />}>
                <Shipping />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/returns"
          element={
            <Layout>
              <Suspense fallback={<PageLoadingSpinner />}>
                <Returns />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/support"
          element={
            <Layout>
              <Suspense fallback={<PageLoadingSpinner />}>
                <Support />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <Suspense fallback={<PageLoadingSpinner />}>
                <Privacy />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/terms"
          element={
            <Layout>
              <Suspense fallback={<PageLoadingSpinner />}>
                <Terms />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/cookies"
          element={
            <Layout>
              <Suspense fallback={<PageLoadingSpinner />}>
                <Cookies />
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <Suspense fallback={<PageLoadingSpinner />}>
                <NotFound />
              </Suspense>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default Index;
