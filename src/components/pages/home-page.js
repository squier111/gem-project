import React from 'react';
import Mainscreen from '../main-screen';
import ProductOverviewMain from '../product-overview-main';
import ForDevelopers from '../for-developers';

const HomePage = () => {
  return (
    <div className="home-page">
        <Mainscreen/>
        <ProductOverviewMain/>
        <ForDevelopers/>
    </div>
)
}

export default HomePage;
