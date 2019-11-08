/**
 * this class contains the data a unitTemplate has to contains
 */
class UnitTemplate {
    constructor() {
    }
    name = "unit";
    size = 1.0;
    speed = 0.1;
    attackSpeed = 1.0;
    damage = 1.0;
    range = 2.0;
    melee = true;
}


let list = null;

export default function getUnitTypeList(){
    if (list == null){
        //Swordman
        let sword= new UnitTemplate();
        sword.attackSpeed=2;
        sword.name = "Swordman";
        list.push(sword);
    }
    return list;
}