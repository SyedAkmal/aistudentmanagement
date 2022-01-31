import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  name: string;
  position: number;
  classAssign: string;
  contact: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', classAssign: 'bca', contact: 9876543210},
  {position: 2, name: 'Helium', classAssign: 'mca', contact: 9876543210},
  {position: 3, name: 'Lithium', classAssign: 'BE', contact: 9876543210},
  {position: 4, name: 'Beryllium', classAssign: 'sms', contact: 9876543210},
  {position: 5, name: 'Boron', classAssign: '10th', contact: 9876543210},
  {position: 6, name: 'Carbon', classAssign: '12th', contact: 9876543210},
  {position: 7, name: 'Nitrogen', classAssign: 'bcom', contact: 9876543210},
  {position: 8, name: 'Oxygen', classAssign: 'bsc', contact: 9876543210},
 
];

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {
  displayedColumns: string[] = ['position', 'name', 'classAssign', 'contact'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
