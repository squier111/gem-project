import React from 'react';
import Mainscreen from '../components/main-screen';
import ProductOverview from '../components/product-overview';
import Footer from '../components/footer';
import {MainScreenMocks, Titles, CodeMocks} from '../mocks';

const mainScreenDatas = new MainScreenMocks();
const title = new Titles();
const Code = new CodeMocks();


const OnrampPage = () => {
    return (
      <div className="onramp-page">
          <Mainscreen
            Subtitle= {mainScreenDatas.Datas[1].Subtitle}
            Title = {mainScreenDatas.Datas[1].Title}
            Description = {mainScreenDatas.Datas[1].Description}
            Image = {mainScreenDatas.Datas[1].Image}
            BgImage ={mainScreenDatas.Datas[1].BgImage}
            Name = {'page'}
          />
          <ProductOverview
            subtitles= {title.BlockTitles[1].SubTitle} 
            descriptions = {title.BlockTitles[1].Description}
            titles = {title.BlockTitles[1].Title}
            codes={Code.code[0]}
            image={title.BlockTitles[1].Image}
          />
          <Footer/>
      </div>
  )
}

export default OnrampPage;
