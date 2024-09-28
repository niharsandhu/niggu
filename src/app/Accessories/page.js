'use client'
import React from 'react'; // Ensure correct casing
import ReactDOM from 'r../../../components/main/OurProducts
import { Sales } fro../../../components/cart/Cart.jsxoducts';
import  Cart  from '../.../../../components/foot/Footer
import { Footer } from '../../components/../../../data/data
import { footerAPI,  accessories } from '../../data/data';
import { Provider } from 'react-redux'; 
import Store from '@/components/niggu/Store';

export default function Accessories(){
  return (
   <Provider store={Store}>
    <>
      <Cart/>
      <main>
        <Sales endpoint={accessories} />
      </main>
      <br></br><br></br>
      <Footer footerAPI={footerAPI} />
   </>
   </Provider>
  )
};
