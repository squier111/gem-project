import React, {Component} from 'react';
import './table.scss';
import {NOITEM} from '../../assets/Icons'

class Table extends Component {

    RenderRow = (item) => {
        const {id, title, subtitle ,buy, transfer, tradingHistory} = item;
        return (
          <div className="column" key = {id}>
            <div><span className="title">{title}</span><span className="subtitle">{subtitle}</span></div>
            <div>
                {buy !== '' ?  <span className="hidden-title">buy</span> : <span></span>}
                {buy !== '' ? buy : <img src = {NOITEM} alt ="no-item"/>}
                {buy !== '' ?  <span className="hidden-description">Purchase crypto with ACH, credit or debit card</span> : <span className="alert">No Buying</span>}
            </div>
            <div>
                {transfer !== '' ?  <span className="hidden-title">Transfer up to</span> : <span></span>}
                {transfer !== '' ? transfer : <img src = {NOITEM} alt ="no-item"/> }
                {transfer !== '' ?  <span className="hidden-description">Transfer crypto to/from any exchange</span> : <span className="alert">No Transferring</span>}
            </div>
            <div>
                {tradingHistory !== '' ?  <span className="hidden-title">Trading history for up to</span> : <span></span>}
                {tradingHistory !== '' ? tradingHistory : <img src = {NOITEM} alt ="no-item"/> }
                {tradingHistory !== '' ?  <span className="hidden-description">Historical data, balances, prices</span> : <span className="alert">No Trading History</span>}
            </div>
            <div><button>Get Started →</button></div>
          </div>
        )
    }
    render() {
        return (
            <div className="table-frame">
                <div className="center">
                    <div className="table-holder">
                        <div className="table">
                            <div className="column">
                                <div></div>
                                <div><span className="title-block">Buy</span>Purchase crypto with ACH, credit or debit card</div>
                                <div><span className="title-block">Transfer</span>Transfer crypto to/from any exchange</div>
                                <div><span className="title-block">Trading History</span>Historical data, balances, prices</div>
                                <div></div>
                            </div>  
                            {this.props.data.table.map(this.RenderRow)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table;
