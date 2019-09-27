import React from 'react';
import Mainscreen from '../components/main-screen';
import Footer from '../components/footer';
import ListItems from '../components/list-items';
import {MainScreenMocks, Titles, CodeMocks, CodeSamplesList} from '../mocks';
import CodeSamples from '../components/code-samples';

const mainScreenDatas = new MainScreenMocks();
const title = new Titles();
const Code = new CodeMocks();
const CodeList = new CodeSamplesList();


const list = CodeList.list;

const ApiPage = () => {
    return (
      <div className="api-page">
          <Mainscreen
            Subtitle= {mainScreenDatas.Datas[3].Subtitle}
            Title = {mainScreenDatas.Datas[3].Title}
            Description = {mainScreenDatas.Datas[3].Description}
            Image = {mainScreenDatas.Datas[3].Image}
            BgImage ={mainScreenDatas.Datas[3].BgImage}
            Name = {'page'}
          />
           <CodeSamples
             subtitle= {title.BlockTitles[5].SubTitle} 
             title = {title.BlockTitles[5].Title}
             codelist = {list}
             codes={Code.code[1]}
          />
          <ListItems/>
          <Footer/>
      </div>
  )
}

export default ApiPage;
