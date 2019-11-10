import { getNewUnitID, getPlayingFieldService } from "../services/PlayingFieldService"
import React from "react"
export default class Unit {
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
    id = -1;
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
            //TODO: should never happen?
            getPlayingFieldService().addUnitToPlayingField(this.generateNewDomObject());
        }
        getPlayingFieldService().updateUnitPosition(this.domObjID, positionX, positionY, newWidth, newHeight)
    }
    generateNewDomObject() {
        this.domObjID = getNewUnitID();
        console.log("Creating new Unit dom-object")
        let div=document.createElement("div");
        div.id=this.domObjID;
        div.classname="unit";
        this.domObj = div;
        return this.domObj;
    }
} 