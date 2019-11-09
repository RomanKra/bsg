import React from 'react';
import './UnitList.css';
import APIService from '../../services/APIService';
import UnitListEntry from '../unitListEntry/UnitListEntry';

export default class UnitList extends React.Component {
    units = []
    constructor() {
        super();
        this.apiService = new APIService();
        this.units = this.apiService.getUnits();
    }
    render() {
        let unitList = this.units.map(unit =><li key={unit.name}><UnitListEntry unit={unit}></UnitListEntry></li>);
        console.log("Unitlist:")
        console.log(unitList)
        return (
            <div className="maxed">
                <ul>{unitList}</ul>
            </div>
        )
    }

}