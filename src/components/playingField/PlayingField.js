import React from 'react';
import Unit from './../../models/UnitModel';
import getUnitTypeList from './../../models/unitTemplate';
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
        this.offX = 200;
        this.offY = 200;
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
        var data = evt.dataTransfer.getData("text");
        let unitList = getUnitTypeList();
        let unit = new Unit(unitList[0]);
        unit.posX = (evt.clientX / this.widthPixelPerUnit);
        unit.posY = (evt.clientY / this.heightPixelPerUnit);
        this.addUnitToPlayingField(unit.generateNewDomObject())
        this.playingFieldService.addUnit(unit);
        console.log("Das ist  y-Position des gedroppten Elements: " + evt.clientY);
        console.log("Das ist die x-Position des gedroppten Elements: " + evt.clientX);
    }
    drawUnitU(unit){
        let newPosX = this.offX.num + this.widthPixelPerUnit*unit.posX;
        let newPosY = this.offY + this.heightPixelPerUnit * unit.posY;
        let newWidth = this.widthPixelPerUnit * unit.size;
        let newHeight = this.heightPixelPerUnit * unit.size;
        this.drawUnit(unit.id, newPosX, newPosY, newWidth, newHeight);
    }
    drawUnit(unitID, newPosX, newPosY, newWidth, newHeight){
        console.log("Would be drawing Unit now")
        let unitDom = document.getElementById(unitID);
        if(unitDom == null){
            console.error("Could not find unit with ID: " + unitID)
            return
        }
        console.log("drawing ...")
        unitDom.style.transform = "translate(" +newPosX+ "px, " +newPosY+ "px)";
        unitDom.style.width = newWidth + "px";
        unitDom.style.height = newHeight + "px";
        console.log(unitDom.style)
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