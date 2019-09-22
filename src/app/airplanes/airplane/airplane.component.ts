import { Component, OnInit } from '@angular/core';
import { AirplaneService } from 'src/app/shared/airplane.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
