import { Component } from '@angular/core'

@Component({
	selector: 'fruta',
	templateUrl: './fruta.component.html'
})

export class FrutaComponent{
	public nombre_componente = 'Componente de frura'
	public listado_frutas = 'naranja, pera, manzana y sandia'

	public nombre:string;
	public edad:number;
	public mayorDeEdad:boolean;
	public trabajos:Array<any>; = ['carpitnero', 23]
	comodin:any;

	constructor(){
		this.nombre = "Dan"
		this.edad = 23
		this.mayorDeEdad = true
		this.comodin = "SI"
	}
}