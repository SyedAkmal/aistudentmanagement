import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IconUserModel } from '../../../_metronic/partials';

export interface PeriodicElement {
  name: string;
  position: number;
  designation: string;
  Number: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen',designation: 'principal', Number: '1234567890'},
  {position: 2, name: 'Helium',designation: 'vice-principal', Number: '1234567890'},
  {position: 3, name: 'Hydrogen',designation: 'principal', Number: '1234567890'},
  {position: 4, name: 'Helium',designation: 'vice-principal', Number: '1234567890'},
  {position: 5, name: 'Hydrogen',designation: 'principal', Number: '1234567890'},
  {position: 6, name: 'Helium',designation: 'vice-principal', Number: '1234567890'},
  {position: 7, name: 'Hydrogen',designation: 'principal', Number: '1234567890'},
  {position: 8, name: 'Helium',designation: 'vice-principal', Number: '1234567890'},
  {position: 9, name: 'Hydrogen',designation: 'principal', Number: '1234567890'},
  {position: 10, name: 'Helium',designation: 'vice-principal', Number: '1234567890'},
  
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  

})
export class ProjectsComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'designation', 'Number'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  constructor() {}

  ngOnInit(): void {}
}
