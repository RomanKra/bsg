import getUnitTypeList from "../models/unitTemplate";
import UnitModel from "../models/UnitModel"

let playingFieldService = null;
let unitIDCounter=-1;
export function getPlayingFieldService(playingFieldDimensions, fieldObj) {
    if (playingFieldService == null) {
        console.log("creating PlayingFieldService")
        playingFieldService = new PlayingFieldService(playingFieldDimensions, fieldObj);
    }
    console.log("Returning PlayingFieldService")
    return playingFieldService;
}
export function getNewUnitID(){
    unitIDCounter = unitIDCounter+1;
    return unitIDCounter;
}
class PlayingFieldService {
    /**
     * List of units alive on the field
     */
    unitList = []
    constructor(playingFieldDimensions, playingFieldObj) {
        console.log("Constructor got called")
        this.fieldDomObj = playingFieldObj;
        this.fieldDimensions = playingFieldDimensions;
        console.log("Submitted fieldDimensions: ")
        console.log(this.fieldDimensions)
        //add default units for developing
        let unitTypes = getUnitTypeList();
        //for now, create 3 units of each type in random positions
        for (let index in unitTypes) {
            let type = unitTypes[index];
            console.log("creating 3 units of type " + type.name)
            let u1 = new UnitModel(type)
            u1.posX = Math.round(Math.random() * 50)
            u1.posY = Math.round(Math.random() * 50)
            let u2 = new UnitModel(type)
            u2.posX = Math.round(Math.random() * 50)
            u2.posY = Math.round(Math.random() * 50)
            let u3 = new UnitModel(type)
            u3.posX = Math.round(Math.random() * 50)
            u3.posY = Math.round(Math.random() * 50)
            this.unitList.push(u1)
            this.unitList.push(u2)
            this.unitList.push(u3)
        }
    }
    addUnitToPlayingField(unitDomObj) {
        this.fieldDomObj.addUnitToPlayingField(unitDomObj)
    }
    startRenderLoop() {
        //render all units on the field
        for (let unit of this.unitList) {
            // let positionX = unit.posX * this.fieldDimensions.pxPerTileWidth + this.fieldDimensions.offX;
            // let positionY = unit.posY * this.fieldDimensions.pxPerTileHeight + this.fieldDimensions.offY;
            unit.setPosition(this.translateToXPos(unit.posX) + this.offX, this.translateToYPos(unit.posY) + this.offY, this.translateToXPos(this.size), this.translateToYPos(this.size));
        }
    }
    updateUnitPosition(unitID){

    }
    startGameLoop() {

    }
    translateToXPos(pos) {
        return (pos * this.fieldDimensions.pxPerTileWidth);
    }
    translateToYPos(pos) {
        return (pos * this.fieldDimensions.pxPerTileHeight);
    }
}
