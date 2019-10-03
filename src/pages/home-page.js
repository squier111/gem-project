import React from 'react';
import Mainscreen from '../components/main-screen';
import ProductOverviewMain from '../components/product-overview-main';
import ForDevelopers from '../components/for-developers';
import ListItems from '../components/list-items';
import Companys from '../components/companys';
import Footer from '../components/footer';
import {MainScreenMocks, ListItemsMocks, Titles} from '../mocks';

const mainScreenDatas = new MainScreenMocks();
const ListItem = new ListItemsMocks();
const title = new Titles();

const items =  ListItem.items.slice(0, 3);

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
        <ProductOverviewMain
          subtitle= {title.BlockTitles[0].SubTitle} 
          title = {title.BlockTitles[0].Title}
          description = {title.BlockTitles[0].Description}
          />
        <ForDevelopers/>
        <ListItems
            subtitle= {title.BlockTitles[3].SubTitle} 
            title = {title.BlockTitles[3].Title}
            description = {title.BlockTitles[3].Description}
            ListItem={items}
        />
        <Companys/>
        <Footer/>
    </div>
  )
}

export default HomePage;
