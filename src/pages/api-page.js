import React from 'react';
import Mainscreen from '../components/main-screen';
import {MainScreenMocks} from '../mocks';

const mainScreenDatas = new MainScreenMocks();


const ApiPage = () => {
    return (
      <div className="api-page">
          <Mainscreen
            Subtitle= {mainScreenDatas.Datas[3].Subtitle}
            Title = {mainScreenDatas.Datas[3].Title}
            Description = {mainScreenDatas.Datas[3].Description}
            Image = {mainScreenDatas.Datas[3].Image}
            BgImage ={mainScreenDatas.Datas[3].BgImage} 
          />
      </div>
  )
}

export default ApiPage;
