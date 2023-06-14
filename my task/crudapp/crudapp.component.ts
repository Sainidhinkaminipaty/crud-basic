import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MycurdService } from '../services/mycurd.service';
@Component({
  selector: 'app-crudapp',
  templateUrl: './crudapp.component.html',
  styleUrls: ['./crudapp.component.scss'],
})
export class CrudappComponent {

  curedForm: FormGroup;
  Users: any[] = [];
  UsersDummy: any[] = [];
  isEdit: boolean = false;
  url: string = "/assets/db.json";
  constructor(private fb: FormBuilder, private curdService: MycurdService) {

    this.curedForm = this.fb.group({

      id: [''],

      firstname: [''],

      lastname: [''],

      email: [''],

      address: [''],

      phoneno: ['']

    })

    this.getUserData();

  }
  getUserData(): void {

    this.curdService.getusers().subscribe((data: any) => {

      console.log(data);

      this.Users = data.Users;
      this.UsersDummy = data.Users;

    })

  }
  submit(): void {

    if (this.isEdit) {

      const id = this.curedForm.value.id;

      this.Users = [];

      this.UsersDummy.forEach(element => {

        if (element.id == id) {

          element = this.curedForm.value;

          this.Users.push(element);

        } 
        else {

          this.Users.push(element);
        }
      })
      this.curedForm.reset();
    }
    else 
    {
      this.Users.push(this.curedForm.value);
    }
  }


  del(id: number): void {

    if (confirm("Are you sure to delete")) {

      this.Users = [];

      this.UsersDummy.forEach(element => {

        if (element.id != id) {
          this.Users.push(element);
        }
      })
      this.UsersDummy = this.Users;
    }
  }


  update(id: number, Item: any): void {

    this.isEdit = true;

    const updatedItem = this.Users[id];

    this.curedForm.patchValue({

      id: updatedItem.id,

      firstname: updatedItem.firstname,

      lastname: updatedItem.lastname,

      email: updatedItem.email,

      address: updatedItem.address,

      phoneno: updatedItem.phoneno

    });

  }
}







