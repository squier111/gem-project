import React from 'react';
import Mainscreen from '../components/main-screen';
import {MainScreenMocks} from '../mocks';
import Footer from '../components/footer';
import ListItems from '../components/list-items';

const mainScreenDatas = new MainScreenMocks();

const SecurityPage = () => {
  return (
    <div className="security-page">
         <Mainscreen
            Subtitle= {mainScreenDatas.Datas[4].Subtitle}
            Title = {mainScreenDatas.Datas[4].Title}
            Description = {mainScreenDatas.Datas[4].Description}
            Image = {mainScreenDatas.Datas[4].Image}
            BgImage ={mainScreenDatas.Datas[4].BgImage}
            Name = {'page'}
          />
          <ListItems/>
          <Footer/>
    </div>
)
}

export default SecurityPage;
