import React from 'react';
import Unit from './../../models/UnitModel';
import {getUnitTypeByName} from './../../models/unitTemplate';
import './PlayingField.css';
import APIService from './../../services/APIService';
import { getPlayingFieldService } from './../../services/PlayingFieldService';
export default class PlayingField extends React.Component {
    activeUnits = []
    width = 100;
    height = 50;

    constructor() {
        super();
        this.drop = this.drop.bind(this);
        this.apiService = new APIService();
        this.unitTypes = this.apiService.getUnits();
    }

    componentDidMount() {
        let { clientHeight, clientWidth } = this.refs.field;
        this.clientHeight = clientHeight;
        this.clientWidth = clientWidth;
        this.heightPixelPerUnit = this.clientHeight / this.height;
        this.widthPixelPerUnit = this.clientWidth / this.width;
        this.playingFieldService = getPlayingFieldService({ "width": this.widht, "height": this.height, "pxPerTileWidth": this.widthPixelPerUnit, "pxPerTileHeight": this.heightPixelPerUnit }, this);
        this.playingFieldService.startRenderLoop();
        this.offX = this.refs.field.getBoundingClientRect().left;
        this.offY = this.refs.field.getBoundingClientRect().top;
        this.playingFieldService.setFieldDimensions({ "offX": this.offX, "offY": this.offY, "pxPerTileWidth": this.widthPixelPerUnit, "pxPerTileHeight": this.heightPixelPerUnit })
        console.log("PX per tile - width: " + this.widthPixelPerUnit + ", height: " + this.heightPixelPerUnit)
    }

    addUnitToPlayingField(unitObj) {
        console.log("Appending new unit to field: ")
        console.log(unitObj)
        this.refs.field.appendChild(unitObj)
    }

    allowDrop(evt) {
        evt.preventDefault();
    }

    drag(evt) {
        evt.dataTransfer.setData("text", evt.target.id);
    }

    drop(evt) {
        evt.preventDefault();
        let unitTypeName = evt.dataTransfer.getData("unitName")
        let unitType = getUnitTypeByName(unitTypeName);
        console.log("got unittypename " + unitTypeName)
        console.log(unitType)
        let unit = new Unit(unitType);
        unit.posX = ((evt.clientX - this.offX) / this.widthPixelPerUnit);
        unit.posY = ((evt.clientY - this.offY) / this.heightPixelPerUnit);
        this.addUnitToPlayingField(unit.generateNewDomObject())
        this.playingFieldService.addUnit(unit);
    }
    drawUnitU(unit) {
        let newPosX = /* Number(this.offX) +  */Number(this.widthPixelPerUnit) * Number(unit.posX);
        let newPosY = /* Number(this.offY) + */ Number(this.heightPixelPerUnit) * Number(unit.posY);
        let newWidth = Number(this.widthPixelPerUnit) * Number(unit.size);
        let newHeight = Number(this.heightPixelPerUnit) * Number(unit.size);
        this.drawUnit(unit.id, Number(newPosX), Number(newPosY), Number(newWidth), Number(newHeight), unit.color);
    }
    drawUnit(unitID, newPosX, newPosY, newWidth, newHeight, newColor) {
        let unitDom = document.getElementById(unitID);
        if (unitDom == null) {
            console.error("Could not find unit with ID: " + unitID)
            return
        }
        unitDom.style.transform = "translate(" + newPosX + "px, " + newPosY + "px)";
        unitDom.style.width = newWidth + "px";
        unitDom.style.background = newColor;
        unitDom.style.height = newHeight + "px";
    }

    render() {
        return (
            <div className="maxed" ref="test">
                <div id="battleground" ref="field">
                    <div id="enemySide">
                        Das ist die Seite des Gegners
                    </div>
                    <div id="yourSide" onDrop={this.drop} onDragOver={this.allowDrop}>

                        Das ist deine Hälfte
                    </div>
                </div>
            </div>
        )
    }
}