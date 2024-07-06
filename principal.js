import Cl_empleado from "./Cl_empleado.JS";
import Cl_empresa from "./Cl_empresa.JS";
//instancia
let emp1 = new Cl_empleado(555, 200, 2);
let emp2 = new Cl_empleado(888, 500, 1);
let emp3 = new Cl_empleado(777, 400, 2);
let emp4 = new Cl_empleado(666, 600, 1);
let emp5 = new Cl_empleado(444, 800, 1);

let empresa = new Cl_empresa();

empresa.procesarEmpleado(emp1);
empresa.procesarEmpleado(emp2);
empresa.procesarEmpleado(emp3);
empresa.procesarEmpleado(emp4);
empresa.procesarEmpleado(emp5);


let salida = document.getElementById("salida");
salida.innerHTML=`
Resultado:
<br>La cedula ${emp1.ced} tiene un nuevo sueldo de: ${emp1.calcSuel()}$
<br>La cedula ${emp2.ced}  tiene un nuevo sueldo de: ${emp2.calcSuel()}$
<br>La cedula ${emp3.ced}  tiene un nuevo sueldo de: ${emp3.calcSuel()}$
<br>La cedula ${emp4.ced}  tiene un nuevo sueldo de: ${emp4.calcSuel()}$
<br>La cedula ${emp5.ced}  tiene un nuevo sueldo de: ${emp5.calcSuel()}$
<br><br>
Total a pagar solo por aumento de sueldo: ${empresa.acumMontTot}$
<br>Porcentaje de personal obrero: ${empresa.calcPorcObr()}%
`