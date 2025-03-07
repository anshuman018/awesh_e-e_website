import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTop from './ScrollToTop';

type LayoutProps = {
  children: React.ReactNode;
  hideFooter?: boolean;
};

export default function Layout({ children, hideFooter = false }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="pt-24">
        {children}
      </div>
      {!hideFooter && <Footer />}
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}