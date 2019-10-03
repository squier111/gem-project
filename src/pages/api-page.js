import React from 'react';
import Mainscreen from '../components/main-screen';
import Footer from '../components/footer';
import ListItems from '../components/list-items';
import Advantages from '../components/advantages';
import {MainScreenMocks, Titles, CodeMocks, CodeSamplesList, AdvantagesList, ListItemsMocks} from '../mocks';
import CodeSamples from '../components/code-samples';

const mainScreenDatas = new MainScreenMocks();
const title = new Titles();
const Code = new CodeMocks();
const CodeList = new CodeSamplesList();
const advantages = new AdvantagesList();
const ListItem = new ListItemsMocks();


const list = CodeList.list;
const items =  ListItem.items.slice(3, 9);

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
          <Advantages
            subtitle= {title.BlockTitles[7].SubTitle} 
            title = {title.BlockTitles[7].Title}
            AdvantagesList = {advantages}
          />
           <CodeSamples
            subtitle= {title.BlockTitles[5].SubTitle} 
            title = {title.BlockTitles[5].Title}
            codelist = {list}
            codes={Code.code[1]}
          />
          <ListItems
            subtitle= {title.BlockTitles[8].SubTitle} 
            title = {title.BlockTitles[8].Title}
            description = {title.BlockTitles[8].Description}
            ListItem={items}
          />
          <Footer/>
      </div>
  )
}

export default ApiPage;
