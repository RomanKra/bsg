export default class APIService {
    constructor() {
        this.unitTypeList = this.getUnitsFromAPI();
    }
    getUnitsFromAPI(){
        return [
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
        ]
    }
    getUnits(){
        return this.unitTypeList;
    }
}