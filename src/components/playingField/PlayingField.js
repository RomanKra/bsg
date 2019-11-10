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
        let { clientHeight, clientWidth } = this.refs.test;
        this.clientHeight = clientHeight;
        this.clientWidth = clientWidth;
        this.heightPixelPerUnit = this.clientHeight / this.height;
        this.widthPixelPerUnit = this.clientWidth / this.width;
        this.playingFieldService = getPlayingFieldService({ "width": this.widht, "height": this.height, "pxPerTileWidth": this.widthPixelPerUnit, "pxPerTileHeight": this.heightPixelPerUnit }, this);
        this.playingFieldService.startRenderLoop();
        console.log("PX per tile - width: " + this.widthPixelPerUnit + ", height: " + this.heightPixelPerUnit)
    }

    addUnitToPlayingField(unitObj) {
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
        this.addUnitToPlayingField(unit.generateNewDomObject())
        console.log("Das ist  y-Position des gedroppten Elements: " + evt.clientY);
        console.log("Das ist die x-Position des gedroppten Elements: " + evt.clientX);
    }

    drawUnit(){
        console.log("Would be drawing Unit now")
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