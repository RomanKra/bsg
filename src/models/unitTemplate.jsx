import Axios from "axios";

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
}

let list = null;
var data = list;

const axios = require('axios');
axios.get(`https://my-json-server.typicode.com/RomanKra/bsg/db`)
      .then(res => {
        // list = res.data;
        console.log(res.data.units[0]);
        //console.log("HIER STEHEN WICHTIGE SACHEN DRIN: " + res.data[0]);
        //list = res.data;
        //console.log("------- " + list[0].name);
      })

export default function getUnitTypeList(){
    if (list == null){
        list = [];
        //Swordman
        let sword= new UnitTemplate();
        sword.attackSpeed=2;
        sword.name = "Swordman";
        list.push(sword);
    }
    return list;
}