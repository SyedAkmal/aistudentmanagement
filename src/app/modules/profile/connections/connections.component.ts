import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  ClassAssign: string;
  contact: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', ClassAssign: "7th", contact: 'H'},
  {position: 2, name: 'Helium', ClassAssign: "8th", contact: 'He'},
  {position: 3, name: 'Lithium', ClassAssign: "8th", contact: 'Li'},
  {position: 4, name: 'Beryllium', ClassAssign: "8th", contact: 'Be'},
  {position: 5, name: 'Boron', ClassAssign: "8th", contact: 'B'},
  {position: 6, name: 'Carbon', ClassAssign: "8th", contact: 'C'},
  {position: 7, name: 'Nitrogen', ClassAssign: "8th", contact: 'N'},
  {position: 8, name: 'Oxygen', ClassAssign: "8th", contact: 'O'},
  {position: 9, name: 'Fluorine', ClassAssign: "8th", contact: 'F'},
  {position: 10, name: 'Neon', ClassAssign: "8th", contact: 'Ne'},
];
@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent {
  displayedColumns: string[] = ['position', 'name', 'ClassAssign', 'contact'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
