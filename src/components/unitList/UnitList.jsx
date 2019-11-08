import React from 'react';
import './UnitList.css';
import APIService from '../../services/APIService';

export default class UnitList extends React.Component {
    units = []
    constructor() {
        super();
        this.apiService = new APIService();
        this.units = this.apiService.getUnits();
    }
    render() {
        let unitnames = "";

        for(let unit of this.units){
            unitnames = unitnames + ", " + unit.name
        }
        console.log("Ended up with following unit names: '" + unitnames + "'")
        return (
            <div className="maxed">
                <h1>{unitnames}</h1>
            </div>
        )
    }

}