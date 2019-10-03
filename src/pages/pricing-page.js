import React from 'react';
import Footer from '../components/footer';
import Mainscreen from '../components/main-screen';
import {MainScreenMocks, TableMocks} from '../mocks';
import Table from '../components/table';

const mainScreenDatas = new MainScreenMocks();
const table = new TableMocks();

const PricingPage = () => {
  return (
    <div className="pricing-page">
        <Mainscreen
            Subtitle= {mainScreenDatas.Datas[5].Subtitle}
            Title = {mainScreenDatas.Datas[5].Title}
            Description = {mainScreenDatas.Datas[5].Description}
            Image = {mainScreenDatas.Datas[5].Image}
            BgImage ={mainScreenDatas.Datas[5].BgImage}
        />
        <Table
            data = {table}
        />
        <Footer/>
    </div>
)
}

export default PricingPage;