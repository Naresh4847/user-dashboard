/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { NDataModelService } from 'neutrinos-seed-services';
import { ModelMethods } from '../../lib/model.methods';

@Injectable()
export class buserdashboardService {
 dm: ModelMethods;

    menu = [
        {
            nav_one: 'Dashboard',
        }
    ];

    menuitem = [
        {
            navitem: 'Analytics'
        },
        {
            navitem: 'Interface'
        },
        {
            navitem: 'App Views'
        },
        {
            navitem: 'Charts'
        },
        {
            navitem: 'Box Transitions'
        }
    ];

    constructor(private bdms: NDataModelService) {
        this.dm = new ModelMethods(bdms);

    }

    ngOnInit() {

    }


}
