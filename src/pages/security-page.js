import React from 'react';
import Mainscreen from '../components/main-screen';
import {MainScreenMocks, ListItemsMocks, Titles} from '../mocks';
import Footer from '../components/footer';
import ListItems from '../components/list-items';
import HowItWorks from '../components/how-it-works';

const mainScreenDatas = new MainScreenMocks();
const ListItem = new ListItemsMocks();
const title = new Titles();


const items =  ListItem.items.slice(0, 3);

const SecurityPage = () => {
  return (
    <div className="security-page">
         <Mainscreen
            Subtitle= {mainScreenDatas.Datas[4].Subtitle}
            Title = {mainScreenDatas.Datas[4].Title}
            Description = {mainScreenDatas.Datas[4].Description}
            Image = {mainScreenDatas.Datas[4].Image}
            BgImage ={mainScreenDatas.Datas[4].BgImage}
          />
          <HowItWorks
            subtitle= {title.BlockTitles[9].SubTitle}
            title = {title.BlockTitles[9].Title}
            description = {title.BlockTitles[9].Description}
          />
          <ListItems
            subtitle= {title.BlockTitles[3].SubTitle} 
            title = {title.BlockTitles[3].Title}
            description = {title.BlockTitles[3].Description}
            ListItem={items}
          />
          <Footer/>
    </div>
)
}

export default SecurityPage;
