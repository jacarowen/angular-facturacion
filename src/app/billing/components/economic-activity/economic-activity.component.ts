import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivityEco } from '../../interfaces/activityeco.interfaces';

@Component({
  selector: 'billing-activity-list',
  templateUrl: './economic-activity.component.html',
  styleUrls: ['./economic-activity.component.css']
})
export class EconomicActivityComponent {

  @Input()
  public activityList: ActivityEco[] = [{
    codigo: '6200',
    descripcion: 'CONSULTORES EN PROYECTOS DE INFORMÁTICA',
    tipoActividad:'s'
  }]

@Output()
public onDelete: EventEmitter<string> = new EventEmitter();


onDeleteActivity(id?: string): void{
    //Emitir el id de la actividad
    if(!id) return
    console.log({id});
    this.onDelete.emit( id );
  }

}
