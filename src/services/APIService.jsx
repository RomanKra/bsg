export default class APIService {
    constructor() {
        this.unitTypeList = this.getUnitsFromAPI();
    }
    getUnitsFromAPI(){
        return [
            {
                name: "Swordman",
                size: 1.0,
                speed: 1.0,
                attackSpeed: 2.0,
                damage: 1.0,
                range: 2.0,
                melee: true,
            }
        ]
    }
    getUnits(){
        return this.unitTypeList;
    }
}