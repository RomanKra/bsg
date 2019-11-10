import React from 'react';
import './PlayingField.css';
import APIService from './../../services/APIService';
import { getPlayingFieldService } from './../../services/PlayingFieldService';
import Unit from './../unit/Unit'
export default class PlayingField extends React.Component {
    activeUnits = []
    width = 100;
    height = 50;

    constructor() {
        super()
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
        let h1 = document.createElement("h1");
        h1.innerText = "O";
        console.log("Das ist  y-Position des gedroppten Elements: " + evt.clientY);
        console.log("Das ist die x-Position des gedroppten Elements: " + evt.clientX);
        evt.target.appendChild(h1);
    }
    drawUnit(unitID, newPosX, newPosY, newWidth, newHeight){
        console.log("Would be drawing Unit now")
        let unitDom = document.getElementById(unitID);
        if(unitDom == null){
            console.error("Could not find unit with ID: " + unitID)
            return
        }
        unitDom.style="{transform:translate(" +newPosX+ "px, " +newPosY+ "px), width: " + newWidth + ", height:" + newHeight + "}"
    }
    render() {
        return (

            <div className="maxed" >

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