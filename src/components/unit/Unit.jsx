import "./Unit.css"
import React from 'react';

export default class Unit extends React.Component {
    posX = 0;
    posY = 0;
    data = null;
    constructor(unitModel, posX, posY) {
        super();
        this.posX = posX;
        this.posY = posY;
        this.data = unitModel;
    }

    render() {
        let transformstring = "translate(" + this.posY + "%," + this.posX + "%)"
        return (
            <div className="unit" draggable="true" style={{"transform": transformstring}}>
            </div>
        )
    }
}