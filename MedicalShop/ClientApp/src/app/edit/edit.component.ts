import { Component, OnInit } from '@angular/core';
import { MedicineshopService } from '../medicineshop.service';
import { Medicine } from '../../Model/Medicine';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public id: number; name: string; qty: string; datetime: Date;
  constructor(private route: ActivatedRoute,
    private readonly _medicineshopService: MedicineshopService
  ) {



  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.GetById();
    console.log(this.id);
  }

  public OnClick() {

    this._medicineshopService.put(this.id.toString(),
      {
        "id": this.id,
        "Name": this.name
      })
      .pipe(finalize(() => {

      }))
      .subscribe((id: string) => {
        console.log('update');
      }, (error: any) => {

      });
  }

  public GetById() {
    this._medicineshopService.getId(this.id)
      .pipe(finalize(() => {

      }))
      .subscribe(result => {
        console.log(result);
        this.id = result.id;
        this.name = result.name;
        this.datetime = result.dateTime;
      }, error => console.error(error));
  }



}
