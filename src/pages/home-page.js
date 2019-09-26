import React from 'react';
import Mainscreen from '../components/main-screen';
import ProductOverviewMain from '../components/product-overview-main';
import ForDevelopers from '../components/for-developers';
import ListItems from '../components/list-items';
import Companys from '../components/companys';
import Footer from '../components/footer';
import {MainScreenMocks} from '../mocks';

const mainScreenDatas = new MainScreenMocks();


const HomePage = () => {
  return (
    <div className="home-page">
        <Mainscreen
          Subtitle= {mainScreenDatas.Datas[0].Subtitle}
          Title = {mainScreenDatas.Datas[0].Title}
          Description = {mainScreenDatas.Datas[0].Description}
          Image = {mainScreenDatas.Datas[0].Image}
          BgImage ={mainScreenDatas.Datas[0].BgImage} 
        />
        <ProductOverviewMain/>
        <ForDevelopers/>
        <ListItems/>
        <Companys/>
        <Footer/>
    </div>
)
}

export default HomePage;
