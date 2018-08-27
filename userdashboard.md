## Overview
 Dashboards belong to the most advanced UI category. They are designed for organization and visualization of the huge amount of data and for managing multiple functionalities of the application
## Usage
Dashboard is a reporting and monitoring tool used to visually depict the performance of an organization, department, or project.There are some other popular usages of dashboard. Some of them are: 
 -   Sales Dashboards 
 -   Marketing Dashboards 
 -   A Social Media Dashboard 

### How to Use
1.  Download the carousel template from Neutrinos store.
2.  Install the template into N-Studio.
3.  When creating a new app, select the userdashboard template from the  **ENTER APP DETAILS**  menu and click on the create button.
4. Create a component (Example:dashboard).
5. In TS file ,
- Import services: one service based on user requirements (Example: buserdashboard) which contains  **observable media**- used for tracking the responsiveness.

**buserdashboard.service :**
```
import{buserdashboardService } from  '../../services/buserdashboard/buserdashboard.service';
```
**LogoutService:**
```
import{NLogoutService} from  'neutrinos-seed-services';
```
- Inject the services in 'constructor'
```
constructor(private userdashboard: buserdashboardService,private nlogout:NLogoutService) {
}
```
-   Inside  **class**, declare the variables used
```
    dashboardData : String ;
    limit : any ;
```
- In **ngOnInit** 
```
this.userDetails = this.userdashboard.dashboardData[0] ;
```
- Use **line-chart** using [ng-charts](https://valor-software.com/ng2-charts/)

**In HTML**
```
<canvas baseChart="" [datasets]="lineChartData"  class="chartimg" [labels]="lineChartLabels" [options]="lineChartOptions" [colors]="lineChartColors" [legend]="lineChartLegend"  chartType="line" (chartHover)="chartHovered($event)" (chartClick)="hartClicked($event)"></canvas>
```
In the **buserdashboard.service**, we declare the array of objects that will import into TS file.
```
import{buserdashboardService } from  '../../services/buserdashboard/buserdashboard.service';
```


## Support  
- **Devices:** Android, iOS  
- **Browsers:** Latest version of all modern browsers  
- **Dependencies version**  :
	- Angular CLI version: 5.0.0 +  
	- Cordova version: 7.1.0 +
