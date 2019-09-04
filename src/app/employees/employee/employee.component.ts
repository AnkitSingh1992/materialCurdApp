import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from "../../shared/employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  departments  :any;
  // form fields 
  form: FormGroup = new FormGroup({
    $key : new FormControl(null),
    fullName : new FormControl('',Validators.required),
    email :  new FormControl('',Validators.email),
    mobile:new FormControl('',[Validators.required,Validators.minLength(8)]),
    city:new FormControl(''),
    gender:new FormControl('1'),
    department:new FormControl(''),
    hireDate:new FormControl(''),
    isPermanent:new FormControl(''),
});
  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.initializeFormGroup();
    this.departments = [
      { id: 1, value: "Dep 1" },
      { id: 2, value: "Dep 2" },
      { id: 3, value: "Dep 3" },
    ]
  }
  onclear(){
    this.form.reset();
  }
  initializeFormGroup(){
    this.form.setValue({
      $key : null,
      fullName : '',
      email :  '',
      mobile:'',
      city:'',
      gender:'1',
      department:'',
      hireDate:'',
      isPermanent:'',
    })
  }

}
