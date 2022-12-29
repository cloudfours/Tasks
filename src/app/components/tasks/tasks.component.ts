import { Task } from './../models/task';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  lista: Task[] = []
  nombreTarea = ''
  agregarTarea() {
    console.log(this.nombreTarea)
    const tarea:Task={
      nombre:this.nombreTarea,
      estado:false
    }
    this.lista.push(tarea)
    this.nombreTarea=''
  }
  eliminarTarea(i:number){
    this.lista.splice(i,1);
  }
  actualizarTarea(tarea:Task,index:number):void{
    this.lista[index].estado=!tarea.estado
  }
}
