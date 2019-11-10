import "./Unit.css"
import React from 'react';

export default class Unit extends React.Component {
    render() {
        //let positionX = this.props.offsetX + this.props.posX * this.props.pxPerUnitWidth;
        //let positionY = this.props.offsetY + this.props.posY * this.props.pxPerUnitHeight;
        //let transformstring = "translate(" + positionX + "px," + positionY + "px)"
        //this.calcedWidth = (this.props.unitType.size * this.props.pxPerUnitWidth) + "px";
        //this.calcedHeight = (this.props.unitType.size * this.props.pxPerUnitHeight) + "px";
        // console.log("calced from size: '" + this.props.unitType.size + "' and pxPerUnitWidth: '" + this.props.pxPerUnitWidth + "'")
        // console.log("calcedWidth: '" + calcedWidth + "', '" + calcedHeight + "'")
        //return (
        //    <div ref="unit" className="unit" draggable="true" style={{ "transform": transformstring, "width": this.calcedWidth, "height": this.calcedHeight }}>
        //    </div>
        //)
        return (
            <div className="unit" ref="unit" draggable="true"></div>
        )
    }

    updatePosition(newPosX, newPosY, newWidth, newHeight) {
        let transformstring = "translate(" + newPosX + "px," + newPosY + "px)"
        let newStyle = { "transform": transformstring, "width": newWidth, "height": newHeight }
        console.log("Updating position to following status: ")
        console.log(newStyle)
        this.refs.unit.style = newStyle;
    }
}