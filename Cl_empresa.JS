export default class Cl_empresa{
    constructor(){
        this.acumMontTot=0;
        this.contEmp=0;
        this.contObr=0;
    }
    //metodos
    procesarEmpleado(e){
        this.acumMontTot+=e.calcSolAum();
        this.contEmp++;
        if(e.tip==1){
            this.contObr++;
        }
        
    }
    calcPorcObr(){
        return this.contObr/this.contEmp*100;
    }
}