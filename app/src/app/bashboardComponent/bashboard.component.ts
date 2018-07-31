/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../lib/model.methods';
import { BDataModelService } from '../service/bDataModel.service';
import { buserdashboardService } from '../services/buserdashboard/buserdashboard.service';


/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

@Component({
    selector: 'bh-bashboard',
    templateUrl: './bashboard.template.html'
})

// export interface cardDetails {
//   cardTitle: string;
//   cardSubTitle: string;

// }
export class bashboardComponent {
    cardData;
    cardData1;
    cardData2;
    cardData3;
    cardData4;
    cardData5;
    carditem;
    menu;
    menuitem;

    constructor(private userdashboard: buserdashboardService) {
        this.cardData = userdashboard.cardData;
        this.cardData1 = userdashboard.cardData1;
        this.cardData2 = userdashboard.cardData2;
        this.cardData3 = userdashboard.cardData3;
        this.cardData4 = userdashboard.cardData4;
        this.cardData5 = userdashboard.cardData5;
        this.carditem = userdashboard.carditem;
        this.menu = userdashboard.menu;
        this.menuitem = userdashboard.menuitem;
    }


    // lineChart
    public lineChartData: Array<any> = [
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series A' }

    ];
    public lineChartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7'];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        { // dark grey
            backgroundColor: 'rgba(76,175,80,0.61)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(22, 144, 27, 0.61)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        }

    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    public randomize(): void {
        let _lineChartData: Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (let j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }



    dm: ModelMethods;


    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.dm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.dm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.dm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.dm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.dm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete(dataModelName, filter) {
        this.dm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.dm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.dm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
