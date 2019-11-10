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
            this.addUnitToPlayingField(u1.generateNewDomObject())
            this.addUnitToPlayingField(u2.generateNewDomObject())
            this.addUnitToPlayingField(u3.generateNewDomObject())
        }
    }
    setFieldDimensions(fieldDims){
        this.fieldDimensions = fieldDims;
    }
    addUnit(unit){
        this.unitList.push(unit)
    }
    addUnitToPlayingField(unitDomObj) {
        this.fieldDomObj.addUnitToPlayingField(unitDomObj)
    }
    startRenderLoop() {
        let fdObj = this.fieldDomObj;
        let uList = this.unitList;
        let me = this;
        setInterval(function(){
            //render all units on the field
            for (let unit of uList) {
                //Get Id from Unit and render it to its target position
                fdObj.drawUnit(unit.id, me.translateToXPos(unit.posX)/*  + me.fieldDimensions.offX */, me.translateToYPos(unit.posY) /* + me.fieldDimensions.offY */, me.translateToXPos(unit.size), me.translateToYPos(unit.size));
            }
        },2000)
    }
    updateUnitPosition(unitID, positionX, positionY, newWidth, newHeight){
        this.fieldDomObj.updateUnitPosition(unitID, positionX, positionY, newWidth, newHeight);
    }
    startGameLoop() {

    }
    translateToXPos(pos) {
        return (Number(pos) * Number(this.fieldDimensions.pxPerTileWidth));
    }
    translateToYPos(pos) {
        return (Number(pos) * Number(this.fieldDimensions.pxPerTileHeight));
    }
}
