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
          <ProductOverview
            subtitles= {title.BlockTitles[2].SubTitle} 
            descriptions = {title.BlockTitles[2].Description}
            titles = {title.BlockTitles[2].Title}
            codes={Code.code[0]}
            image={title.BlockTitles[2].Image}
          />
          <CodeSamples
             subtitle= {title.BlockTitles[5].SubTitle} 
             title = {title.BlockTitles[5].Title}
             codelist = {list}
             codes={Code.code[1]}
          />
          <Responsiveness
            subtitle= {title.BlockTitles[11].SubTitle} 
            title = {title.BlockTitles[11].Title}
            descriptions = {title.BlockTitles[11].Description}
            image = {title.BlockTitles[11].Image}
          />
          <Footer/>
      </div>
  )
}

export default ConnectPage;
