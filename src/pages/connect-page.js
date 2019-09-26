import React from 'react';
import Mainscreen from '../components/main-screen';
import {MainScreenMocks} from '../mocks';

const mainScreenDatas = new MainScreenMocks();


const ConnectPage = () => {
    return (
      <div className="connect-page">
          <Mainscreen
            Subtitle= {mainScreenDatas.Datas[2].Subtitle}
            Title = {mainScreenDatas.Datas[2].Title}
            Description = {mainScreenDatas.Datas[2].Description}
            Image = {mainScreenDatas.Datas[2].Image}
            BgImage ={mainScreenDatas.Datas[2].BgImage} 
          />
      </div>
  )
}

export default ConnectPage;
