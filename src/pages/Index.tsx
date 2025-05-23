import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Users, FileText, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StreamSection from '@/components/StreamSection';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import MainAdsSection from '@/components/MainAdsSection';

const Index: React.FC = () => {
  return (
    <>
    <Navigation />
    <Hero />
    <MainAdsSection />
    <AboutSection />
    <StreamSection />
    <Testimonials />
    <Footer />
    </>
  );
};

export default Index;
