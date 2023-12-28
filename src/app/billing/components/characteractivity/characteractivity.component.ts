import { Component, EventEmitter, Output } from '@angular/core';
import { ActivityEco } from '../../interfaces/activityeco.interfaces';

@Component({
  selector: 'billing-characteractivity',
  templateUrl: './characteractivity.component.html',
  styleUrls: ['./characteractivity.component.css']
})
export class CharacteractivityComponent {

@Output()
  public onNewCharacter: EventEmitter<ActivityEco> = new EventEmitter();

  public characterAc: ActivityEco = {
      codigo:'',
      descripcion: '',
      tipoActividad:''
    
  };


  emitCharacter( ): void{
    console.log(this.characterAc);
    if(this.characterAc.codigo.length === 0) return;
    this.onNewCharacter.emit(this.characterAc);

    this.characterAc = {codigo:'',descripcion:'',tipoActividad:''};

  }

}
