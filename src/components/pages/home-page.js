import React from 'react';
import Mainscreen from '../main-screen';
import ProductOverviewMain from '../product-overview-main';
import ForDevelopers from '../for-developers';
import ListItems from '../list-items';

const HomePage = () => {
  return (
    <div className="home-page">
        <Mainscreen/>
        <ProductOverviewMain/>
        <ForDevelopers/>
        <ListItems/>
    </div>
)
}

export default HomePage;
