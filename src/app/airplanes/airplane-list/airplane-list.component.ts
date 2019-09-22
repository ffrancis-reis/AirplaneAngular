import { Component, OnInit } from '@angular/core';
import { AirplaneService } from 'src/app/shared/airplane.service';
import { Airplane } from 'src/app/shared/airplane.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-airplane-list',
  templateUrl: './airplane-list.component.html',
  styles: []
})
export class AirplaneListComponent implements OnInit {

  constructor(private service: AirplaneService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(plane: Airplane) {
    this.service.formData = Object.assign({}, plane);
  }

  onDelete(id) {
    if (confirm('Você deseja realmente excluir o modelo?')) {
      this.service.deleteAirplane(id).subscribe(
        res => {
          this.service.refreshList();
          this.toastr.warning('Modelo excluído com sucesso!', 'Airplane GOL');
        },
        err => {
          console.log(err);
        })
    }
  }
}
