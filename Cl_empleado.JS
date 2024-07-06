export default class Cl_empleado{
    constructor(ced, suel, tip){
        this.ced=ced;
        this.suel=suel;
        this.tip=tip;
    }
    set ced(c){
        this._ced=c;
    }
    set suel (s){
        this._suel=s;
    }
    set tip (t){
        this._tip=t;
    }
    get ced(){
        return this._ced
    }
    get suel(){
        return this._suel
    }
    get tip(){
        return this._tip;
    }
    calcSolAum(){
        if (this._tip==1){
            return this._suel*0.2;
        }
        else return this._suel*0.1;
    }
    calcSuel(){
        return this._suel+this.calcSolAum()
    }
}