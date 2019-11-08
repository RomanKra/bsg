import React from 'react';
import './UnitListEntry.css';
import APIService from '../../services/APIService';
import getUnitTypeList from '../../models/unitTemplate'
export default class UnitListEntry extends React.Component {
    constructor(unitID) {
        super()
        let list = getUnitTypeList()
        for (let unitType of list) {
            if (unitType.data.id == unitID) {
                this.unitData = unitType.data;
            }
        }
    }
    render() {

        return (
            <div className="maxed">
                <div className="unitInfoContainer">
                    <table className="unitInfo">
                        <tr>
                            <th>Name</th>
                            <td>{this.unitData.name}</td>
                        </tr>
                    </table>
                </div>
                <div className="unitPreview">

                </div>
            </div>
        )
    }

}