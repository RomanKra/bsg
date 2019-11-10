
import axios from 'axios'
let apiService = null;
export default function getAPIService() {
    if (apiService == null) {
        apiService = new APIService();
    }
    return apiService;
}
class APIService {

    async getUnitsFromAPI() {
        const res = await axios.get(`https://my-json-server.typicode.com/RomanKra/bsg/db`)
        this.unitTypeList = res.data.units;
        return;
    }

    async getUnits(subscriber) {
        if (this.unitTypeList == null) {
            let me = this;
            this.getUnitsFromAPI().then(res => { subscriber.apiCallBack("unitTypeList", me.unitTypeList) });

        } else {
            subscriber.apiCallback("unitTypeList", this.unitTypeList);//setState({"unitTypeList": this.uniTypeList})
        }
    }

    getUnitTypeByName(unitName) {
        if (this.unitTypeList == null) {
            this.getUnitsFromAPI();
            alert("Unit types have not yet been loaded!")
            return null;
        }
        for (let unitType of this.unitTypeList) {
            if (unitType.name === unitName) {
                return unitType;
            }
        }
        alert("No unit of type " + unitName + " could be found.")
        return null;
    }
}