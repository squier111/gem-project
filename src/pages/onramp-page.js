import React from 'react';
import Mainscreen from '../components/main-screen';
import {MainScreenMocks} from '../mocks';

const mainScreenDatas = new MainScreenMocks();


const OnrampPage = () => {
    return (
      <div className="onramp-page">
          <Mainscreen
            Subtitle= {mainScreenDatas.Datas[1].Subtitle}
            Title = {mainScreenDatas.Datas[1].Title}
            Description = {mainScreenDatas.Datas[1].Description}
            Image = {mainScreenDatas.Datas[1].Image}
            BgImage ={mainScreenDatas.Datas[1].BgImage} 
          />
      </div>
  )
}

export default OnrampPage;
