import React from 'react'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Product from '../components/Product';
import FeatureProduct from '../components/FeatureProduct';

export default function Dashboard() {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Category/>
      <Product/>
      <FeatureProduct/>
    </div>
  );
}
