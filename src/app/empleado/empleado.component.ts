import { Component } from '@angular/core'
import { Empleado } from './empleado';

@Component({
	selector: 'empleado',
	templateUrl: './empleado.component.html'
})

export class EmpleadoComponent {
	public titulo = "Lista de empleados"
	public listado_empleados = "pepe, pedro" 

	public empleado:Empleado
	public trabajadores:Array<Empleado>;

	constructor(){
		this.empleado = new Empleado('Daniel', 26, 'Desarrollador', true)
		this.trabajadores = [
			new Empleado('Daniel', 26, 'Desarrollador', true),
			new Empleado('Daniel 2', 27, 'Desarrollador', true),
			new Empleado('Daniel 3', 28, 'Desarrollador', true)
		];
	}

	ngOnInit(){
		console.log(this.empleado)
		console.log(this.trabajadores)
	}
}