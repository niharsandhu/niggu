'use client'
import React from 'react'; // Ensure correct casing
import { Sales } from '../../components/main/OurProducts';
import  Cart  from '../../components/cart/Cart.jsx';
import { Footer } from '../../components/foot/Footer';
import { footerAPI, battery } from '../../data/data';
import { Provider } from 'react-redux'; 
import Store from '@/components/niggu/Store';

export default function Accessories(){
  return (
   <Provider store={Store}>
    <>
      <Cart/>
      <main>
        <Sales endpoint={battery} />
      </main>
      <br></br><br></br>
      <Footer footerAPI={footerAPI} />
   </>
   </Provider>
  )
};
