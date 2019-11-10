/**
 * this class contains the data a unitTemplate has to contains
 */
class UnitTemplate {
    name = "unit";
    size = 1.0;
    speed = 0.1;
    attackSpeed = 1.0;
    damage = 1.0;
    range = 2.0;
    melee = true;
    shape = "circle";
    color ="black";
}

let list = null;
export function getUnitTypeByName(unitName){
    if (list == null){
        list = [
            {
                "name" : "sword",
                "size" : 1.0,
                "speed" : 0.1,
                "attackSpeed" : 1.0,
                "damage" : 1.0,
                "range" : 2.0,
                "melee" : true,
                "color" : "gray",
                "shape" : "circle"
            },
            {
                "name" : "axe",
                "size" : 2.0,
                "speed" : 0.05,
                "attackSpeed" : 0.5,
                "damage" : 2.5,
                "range" : 2.0,
                "melee" : true,
                "color" : "orange",
                "shape" : "square"
            },
                {
                    
                "name" : "archer",
                "size" : 1.0,
                "speed" : 0.15,
                "attackSpeed" : 0.5,
                "damage" : 1.0,
                "range" : 15.0,
                "melee" : false,
                "color" : "blue",
                "shape" : "circle"
                }
            ];
    }
    for(let index in list){
        let unitType = list[index]
        if(unitType.name === unitName){
            return unitType;
        }
    }
    alert("Did not fine unit with name " + unitName)
    return {}
}

export default function getUnitTypeList(){
    if (list == null){
        list = [
            {
                "name" : "sword",
                "size" : 1.0,
                "speed" : 0.1,
                "attackSpeed" : 1.0,
                "damage" : 1.0,
                "range" : 2.0,
                "melee" : true,
                "color" : "gray",
                "shape" : "circle"
            },
            {
                "name" : "axe",
                "size" : 2.0,
                "speed" : 0.05,
                "attackSpeed" : 0.5,
                "damage" : 2.5,
                "range" : 2.0,
                "melee" : true,
                "color" : "orange",
                "shape" : "square"
            },
                {
                    
                "name" : "archer",
                "size" : 1.0,
                "speed" : 0.15,
                "attackSpeed" : 0.5,
                "damage" : 1.0,
                "range" : 15.0,
                "melee" : false,
                "color" : "blue",
                "shape" : "circle"
                }
            ];
        //Swordman
        //let sword= new UnitTemplate();
        //sword.attackSpeed=2;
        //sword.name = "Swordman";
        //sword.color = "lime";
        //list.push(sword);
    }
    return list;
}