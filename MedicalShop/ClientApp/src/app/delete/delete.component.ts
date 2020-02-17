import { Component, OnInit } from '@angular/core';
import { MedicineshopService } from '../medicineshop.service';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  public id: number;
  constructor(private route: ActivatedRoute, private readonly _medicineshopService: MedicineshopService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.deleteid();

  }

  public deleteid() {
    this._medicineshopService.deleteId(this.id.toString())
      .pipe(finalize(() => {

      }))
      .subscribe(result => {
        console.log(result);
      }, error => console.error(error));
  }



}
