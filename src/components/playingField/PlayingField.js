import React from 'react';
import './PlayingField.css';
import Unit from './../unit/Unit';
import APIService from './../../services/APIService'

export default class PlayingField extends React.Component {
    activeUnits = []
    constructor(){
        super()
        this.apiService = new APIService();
        this.unitTypes = this.apiService.getUnits();
        this.activeUnits.push({unittype: this.unitTypes[0], posX: Math.random() * 1000,posY:  Math.random() * 1000});
    }
    render() {
        return (
            <div className="maxed">

                <div id="battleground">
                    
                    <div id="enemySide">
                        Das ist die Seite des Gegners
                    </div>
                    <div id="yourSide">
                        <Unit unitType={this.activeUnits[0].unittype}/>
                        Das ist deine Hälfte
                    </div>

                </div>
            </div>
        )
    }
}