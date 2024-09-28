'use client';
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'; // Import Provider
import Store from '@/components/niggu/Store'; // Adjust the path accordingly
import { Highlights } from '@/components/main/Highlight';
import { Sales } from '@/components/main/OurProducts';
import { Hero } from '@/components/head/Hero';
import { Navbar } from '@/components/head/Navbar';
import { Footer } from '@/components/foot/Footer';
import { heroapi, high, sneaker, footerAPI, frames, Electronics, camera, motors, accessories, Propellers, battery, radio, popularsales } from '@/data/data';
import Modal from '@/components/main/Modal';
import Psales from '@/components/main/PopularSales';


export default function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const handleCloseModal = () => {
    setSelectedProductId(null);
  };

  const categories = [Electronics, frames, camera, motors, accessories, Propellers, battery, radio];

  return (
    <Provider store={Store}> {/* Wrap your app in the Provider */}
      <>
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <main>
          <Hero heroapi={heroapi} />
          <Psales endpoint={popularsales} />
          <Highlights endpoint={high} ifExists onProductClick={handleProductClick} />
          <Sales categories={categories} numberOfItems={3} ifExists onProductClick={handleProductClick} />
          <Highlights endpoint={sneaker} onProductClick={handleProductClick} />
          <br />
        </main>
        <Footer footerAPI={footerAPI} />
        {selectedProductId && (
          <Modal productId={selectedProductId} onClose={handleCloseModal} />
        )}
      </>
    </Provider>
  );
}
