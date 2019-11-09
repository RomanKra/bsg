import { getNewUnitID, getPlayingFieldService } from "../services/PlayingFieldService"
import React from "react"
export default class Unit {
    id = -1;
    constructor(unitTemplate) {
        this.id = getNewUnitID();
        this.name = unitTemplate.name;
        this.size = unitTemplate.size;
        this.speed = unitTemplate.speed;
        this.attackSpeed = unitTemplate.attackSpeed;
        this.damage = unitTemplate.damage;
        this.range = unitTemplate.range;
        this.melee = unitTemplate.melee;
        this.posX = 0;
        this.posY = 0;
        this.domObj = null;
    }
    name = "unit";
    size = 1.0;
    speed = 0.1;
    attackSpeed = 1.0;
    damage = 1.0;
    range = 2.0;
    melee = true;
    setPosition(positionX, positionY, newWidth, newHeight) {
        console.log("Updating position for UnitModel to : " + positionX + "; " + positionY)
        if (this.domObj == null) {
            let me = this;
            this.domObjID = getNewUnitID();
            this.domObj = generateNewDomObject(me);
            getPlayingFieldService().addUnitToPlayingField(this.domObj);
        }
        getPlayingFieldService().updateUnitPosition(positionX, positionY, newWidth, newHeight)
    }
}

function generateNewDomObject(unit, domObjID) {
    let div = document.createElement("div", {"id":domObjID, className:"unit"});
    return div;
}