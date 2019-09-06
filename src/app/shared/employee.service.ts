import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee = [
    {id: 1, fullName: 'Hydrogen', email: 1.0079, mobile: 'H',city :"hekke",gender:1,department :"dept1",hireDate:"31/12/1992",isPermanent:"yes",status :1},
    {id: 2, fullName: 'Hydrogen', email: 1.0079, mobile: 'H',city :"hekke",gender:1,department :"dept1",hireDate:"31/12/1992",isPermanent:"yes",status : 1},
    {id: 3, fullName: 'Hydrogen', email: 1.0079, mobile: 'H',city :"hekke",gender:1,department :"dept1",hireDate:"31/12/1992",isPermanent:"yes",status : 1},
    {id: 4, fullName: 'Hydrogen', email: 1.0079, mobile: 'H',city :"hekke",gender:1,department :"dept1",hireDate:"31/12/1992",isPermanent:"yes",status : 1},
    {id: 5, fullName: 'Hydrogen', email: 1.0079, mobile: 'H',city :"hekke",gender:1,department :"dept1",hireDate:"31/12/1992",isPermanent:"yes",status : 1},
    {id: 6, fullName: 'Hydrogen', email: 1.0079, mobile: 'H',city :"hekke",gender:1,department :"dept1",hireDate:"31/12/1992",isPermanent:"yes",status : 1},
     ];
  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  public saveEmployee(emp): any {
    this.employee.push(emp);
    return emp;
  }
  public listEmployee(): any {
    return this.employee;
  }

  public getEmployee(id): any {
    return this.employee[0];
  }
  public updateEmployee(emp): any {
    return emp;
  }
  public deleteEmployee(id): any {
    return this.employee[0];
  }

}


