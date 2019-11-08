import { getNewUnitID } from "../serviceWorker"
export class Unit {
    id = -1;
    constructor() {
        this.id = getNewUnitID();
    }
    constructor(unitTemplate) {
        this.id = getNewUnitID();
        name = unitTemplate.name;
        size = unitTemplate.size;
        speed = unitTemplate.speed;
        attackSpeed = unitTemplate.attackSpeed;
        damage = unitTemplate.damage;
        range = unitTemplate.range;
        melee = unitTemplate.melee;
    }
    name = "unit";
    size = 1.0;
    speed = 0.1;
    attackSpeed = 1.0;
    damage = 1.0;
    range = 2.0;
    melee = true;
}