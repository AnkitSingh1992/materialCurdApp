import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from "../../shared/employee.service";
import { NotificationService } from "../../shared/notification.service";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  departments: any;
  index = 1;
  // form fields 
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(''),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(''),
  });
  constructor(private service: EmployeeService,
    private notification: NotificationService) { }

  ngOnInit() {
    this.initializeFormGroup();
    this.departments = [
      { id: 1, value: "Dep 1" },
      { id: 2, value: "Dep 2" },
      { id: 3, value: "Dep 3" },
    ]
  }
  onclear() {
    this.form.reset();
    this.initializeFormGroup();   
  }
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: '',
      hireDate: '',
      isPermanent: '',
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.form.value.id = this.index;     
      this.service.saveEmployee(this.form.value);
      this.form.reset();
      this.initializeFormGroup();
      this.index += 1;   
      this.notification.success(":: successfully saved")
    }
  }

}
