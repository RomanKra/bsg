import { getNewUnitID, getPlayingFieldService } from "../services/PlayingFieldService"

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
        this.shape = unitTemplate.shape;
        this.color = unitTemplate.color;
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
        getPlayingFieldService().updateUnitPosition(this.id, positionX, positionY, newWidth, newHeight)
    }
    generateNewDomObject() {
        console.log("Creating new Unit dom-object")
        let div=document.createElement("div");
        div.setAttribute("id",this.id);
        div.className="unit " + this.shape;
        div.style.background = this.color;
        this.domObj = div;
        return this.domObj;
    }
} 