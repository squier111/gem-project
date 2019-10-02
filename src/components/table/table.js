import React, {Component} from 'react';
import './table.scss';

class Table extends Component {

    RenderRow = (item) => {
        const {id, title, subtitle ,startup, small, medium , enterprise} = item;
        return (
          <tr key = {id}>
            <td><span>{title}</span>{subtitle}</td>
            <td>{startup}</td>
            <td>{small}</td>
            <td>{medium}</td>
            <td>{enterprise}</td>
          </tr>
        )
    }
    render() {
        return (
            <div className="table">
                <div className="center">
                    <div className="table-holder">
                        <table>
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>
                                        <span>Startup</span>
                                        Free
                                    </th>
                                    <th>
                                        <span>Small</span>
                                        $250/mo
                                    </th>
                                    <th>
                                        <span>Medium</span>
                                        $500/mo
                                    </th>
                                    <th>
                                        <span>Enterprise</span>
                                        Let’s Talk
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.data.table.map(this.RenderRow)}
                                <tr>
                                    <td>&nbsp;</td>
                                    <td><button>Get Started →</button></td>
                                    <td><button>Get Started →</button></td>
                                    <td><button>Get Started →</button></td>
                                    <td><button>Get Started →</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table;
