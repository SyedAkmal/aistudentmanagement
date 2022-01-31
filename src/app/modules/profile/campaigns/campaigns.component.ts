import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  designation: string;
  Authorization: string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', designation: 'principal', Authorization: 'YES'},
  {position: 2, name: 'Helium', designation: 'vice-principal',Authorization: 'YES'},
  {position: 3, name: 'Lithium', designation: 'teacher',Authorization: 'YES'},
  {position: 4, name: 'Beryllium', designation:'teacher',Authorization: 'YES'},
  {position: 5, name: 'Boron', designation: 'teacher',Authorization: 'NO'},
  {position: 6, name: 'Carbon', designation: 'teacher',Authorization: 'YES'},
  {position: 7, name: 'Nitrogen', designation: 'teacher',Authorization: 'NO'},
  {position: 8, name: 'Oxygen', designation: 'teacher',Authorization: 'NO'},
  {position: 9, name: 'Fluorine', designation:'teacher',Authorization: 'NO'},
  {position: 10, name: 'Neon', designation: 'teacher',Authorization: 'NO'},
];

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']

})
export class CampaignsComponent {
  displayedColumns: string[] = ['position', 'name', 'designation', 'Authorization'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
