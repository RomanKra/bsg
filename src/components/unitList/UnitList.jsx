import React from 'react';
import './UnitList.css';
import getAPIService from '../../services/APIService';
import UnitListEntry from '../unitListEntry/UnitListEntry';

export default class UnitList extends React.Component {
    units = []
    constructor() {
        super();
        this.state = { unitTypeList: [] };
        this.apiCallBack = function (eventName, data) {
            console.log("The api-callback has been called!")
            this.setState({ "unitTypeList": data })
        }
    }
    componentDidMount() {
        this.apiService = getAPIService();
        this.apiService.getUnits(this);
    }
    render() {
        if (this.state.unitTypeList != null) {
            console.log(this.state.unitTypeList)
            let unitList = this.state.unitTypeList.map(unit => <li key={unit.name}><UnitListEntry unit={unit}></UnitListEntry></li>);

            return (
                <div className="maxed">
                    <ul>{unitList}</ul>
                </div>
            )
        }
        else {
            return (<div className="maxed"></div>)
        }
    }

}