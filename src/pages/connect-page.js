import React from 'react';
import Mainscreen from '../components/main-screen';
import ProductOverview from '../components/product-overview';
import Footer from '../components/footer';
import {MainScreenMocks, Titles, CodeMocks} from '../mocks';

const mainScreenDatas = new MainScreenMocks();
const title = new Titles();
const Code = new CodeMocks();


const ConnectPage = () => {
    return (
      <div className="connect-page">
          <Mainscreen
            Subtitle= {mainScreenDatas.Datas[2].Subtitle}
            Title = {mainScreenDatas.Datas[2].Title}
            Description = {mainScreenDatas.Datas[2].Description}
            Image = {mainScreenDatas.Datas[2].Image}
            BgImage ={mainScreenDatas.Datas[2].BgImage}
            Name = {'page'} 
          />
          <ProductOverview
            subtitles= {title.BlockTitles[2].SubTitle} 
            descriptions = {title.BlockTitles[2].Description}
            titles = {title.BlockTitles[2].Title}
            codes={Code.code[0]}
            image={title.BlockTitles[2].Image}
          />
           <Footer/>
      </div>
  )
}

export default ConnectPage;
