import React from 'react';
import './UnitListEntry.css';

export default class UnitListEntry extends React.Component {
    /*
    constructor(unitID) {
        super()
        let list = getUnitTypeList()
        for (let unitType of list) {
            if (unitType.data.id == unitID) {
                this.props.unit = unitType.data;
            }
        }
    }
    */
   constructor(){
       super();
       this.drag = this.drag.bind(this);
   }
    allowDrop(evt) {
        evt.preventDefault();
    }

    drag(evt) {
        evt.dataTransfer.setData("text", evt.target.id);
        evt.dataTransfer.setData("unitName", this.props.unit.name)
    }


    render() {

        return (
            <div className="maxed listEntry" draggable="true" onDragStart={this.drag}>
                <div className="unitInfoContainer">
                    <table className="unitInfo">
                        <tbody>
                            <tr>
                                <th>Name:</th>
                                <td>{this.props.unit.name}</td>
                                <th>Health:</th>
                                <td>{this.props.unit.health}</td>
                            </tr>
                            <tr>
                                <th>Damage:</th>
                                <td>{this.props.unit.damage}</td>
                                <th>Size:</th>
                                <td>{this.props.unit.size}</td>
                            </tr>
                            <tr>
                                <th>Speed:</th>
                                <td>{this.props.unit.speed}</td>
                                <th>Atkspd:</th>
                                <td>{this.props.unit.attackSpeed}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="unitPreview">

                </div>
            </div>
        )
    }
}