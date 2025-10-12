import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import GetInTouch from '../components/GetInTouch';
import HealthBenefits from '../components/HealthBenefits';
import Testimonials from '../components/Testimonials';
import HerbStats from '../components/HerbStats';
import CategoriesPage from './Categories';
import ProductsPage from './Products';
import HealthBenefitsPage from './HealthBenefits';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <About />
              <Categories />
              <FeaturedProducts />
              <HealthBenefits />
              <HerbStats />
              <Testimonials />
              <GetInTouch />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/categories"
          element={
            <Layout>
              <CategoriesPage />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <ProductsPage />
            </Layout>
          }
        />
        <Route
          path="/health-benefits/:benefitId"
          element={
            <Layout>
              <HealthBenefitsPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default Index;
