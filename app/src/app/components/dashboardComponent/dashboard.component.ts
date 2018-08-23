/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
import { NDataModelService } from 'neutrinos-seed-services';
import { buserdashboardService } from '../../services/buserdashboard/buserdashboard.service';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import{NLogoutService} from 'neutrinos-seed-services';
import {Router} from '@angular/router';
/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-dashboard',
    templateUrl: './dashboard.template.html'
})

export class dashboardComponent implements OnInit {
    dm: ModelMethods;
    watcher: Subscription;
    activeMediaQuery = "";

    menu;
    menuitem;
    userDetails;
    modeVal;
    fixedSideNav;
    opened;

    constructor(private userdashboard: buserdashboardService, private bdms: NDataModelService, 
        public media: ObservableMedia,private nlogout:NLogoutService,private router:Router) {
        this.dm = new ModelMethods(bdms);


        this.menu = userdashboard.menu;

        this.menuitem = userdashboard.menuitem;

        this.get('user');
    }
   
    ngOnInit() {

    }
    
    ngDoCheck() {
        this.watcher = this.media.subscribe((change: MediaChange) => {
            this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
            if (change.mqAlias == 'sm' || change.mqAlias == 'xs') {
                this.modeVal = 'over';
                this.fixedSideNav = false;
                this.opened = false;
            }
            else {
                this.modeVal = 'side';
                this.fixedSideNav = true;
                this.opened = true;
            }
        });
    }
    logout(){
        this.nlogout.logout();
        this.router.navigate(['/login']);
    }
    // lineChart
    public lineChartData: Array<any> = [{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series A' }];

    public lineChartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7'];

    public lineChartOptions: any = { responsive: true };

    public lineChartColors: Array<any> = [{

        // Light Green
        backgroundColor: '#e4402cab',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(22, 144, 27, 0.61)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'

    }
    ];
    public lineChartLegend: boolean = true;

    public lineChartType: string = 'line';

    // Events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {

        this.dm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                //console.log('userDetails', result);
                this.userDetails = result[0];
                // console.log(this.userDetails);
                // On Success code here
            },
            error => {
                // Handle errors here
                console.log(error);
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
