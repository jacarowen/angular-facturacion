import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { ActivityEco } from '../interfaces/activityeco.interfaces';


@Injectable({providedIn: 'root'})
export class BillingService {

    public activitys: ActivityEco[] = [{
        id: uuid(),
        codigo: '620000',
        descripcion: 'CONSULTORES EN PROYECTOS DE INFORMÁTICA Y SUMINISTRO DE PROGRAMAS DE INFORMÁTIC',
        tipoActividad:'P'
    }];

    addCharacter( activity: ActivityEco ):void {
        const newActivity: ActivityEco = {id: uuid(), ...activity};
        this.activitys.push(newActivity);
    }

    /*onDeleteCharacter(index: number) : void{
        this.activitys.splice(index,1);
    }*/

deleteCharacterById(id: string){
this.activitys = this.activitys.filter(activity => activity.id != id) ;

}
    
    
}