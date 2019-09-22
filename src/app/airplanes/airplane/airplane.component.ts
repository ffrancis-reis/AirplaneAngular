import { Component, OnInit } from '@angular/core';
import { AirplaneService } from 'src/app/shared/airplane.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-airplane',
  templateUrl: './airplane.component.html',
  styles: []
})
export class AirplaneComponent implements OnInit {

  constructor(private service: AirplaneService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      Id: '',
      Model: '',
      PassengersNumber: null,
      CreatedOn: null
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == '')
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.formData.Id = Guid.create().toString(); // ==> b77d409a-10cd-4a47-8e94-b0cd0ab50aa1
    this.service.formData.CreatedOn = new Date();
    this.service.postAirplane().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Modelo criado com sucesso!', 'Airplane GOL');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putAirplane().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Modelo atualizado com sucesso!', 'Airplane GOL');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
