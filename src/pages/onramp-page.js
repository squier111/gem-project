import React from 'react';
import Mainscreen from '../components/main-screen';
import ProductOverview from '../components/product-overview';
import Responsiveness from '../components/responsiveness';
import Footer from '../components/footer';
import {MainScreenMocks, Titles, CodeMocks, CodeSamplesList} from '../mocks';
import CodeSamples from '../components/code-samples';

const mainScreenDatas = new MainScreenMocks();
const title = new Titles();
const Code = new CodeMocks();
const CodeList = new CodeSamplesList();


const list = CodeList.list.slice(0, 4);


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
          <CodeSamples
            subtitle= {title.BlockTitles[5].SubTitle} 
            title = {title.BlockTitles[5].Title}
            codelist = {list}
            codes={Code.code[1]}
          />
          <Responsiveness
            subtitle= {title.BlockTitles[6].SubTitle} 
            title = {title.BlockTitles[6].Title}
            descriptions = {title.BlockTitles[6].Description}
            image = {title.BlockTitles[6].Image}
          />
          <Footer/>
      </div>
  )
}

export default OnrampPage;
