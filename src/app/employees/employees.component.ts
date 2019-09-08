import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { EmployeeService } from "../shared/employee.service";
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeeList :any;
  searchKey:string;
  displayedColumns: string[] = ['id','fullName', 'email', 'mobile', 'department','actions'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static : true}) sort:MatSort;
  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.employeeList = this.service.listEmployee();  
    this.dataSource = new MatTableDataSource(this.employeeList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
 }
  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
     if(this.dataSource.paginator){
       this.dataSource.paginator.firstPage();
     }
  }

  exportAsXLSX():void {
    this.service.exportAsExcelFile(this.employeeList, 'employeeList');
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();  }
}
