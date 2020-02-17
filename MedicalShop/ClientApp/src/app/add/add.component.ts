import { Component, OnInit } from '@angular/core';
import { MedicineshopService } from '../medicineshop.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public name: string;
  public qty: number;
  public dateTime: Date;
  constructor(private readonly _medicineshopService: MedicineshopService) { }

  ngOnInit() {
  }


  public OnClick() {
    this._medicineshopService.post(
      {
        "name": this.name,
        "qty": this.qty
      })
      .pipe(finalize(() => {

      }))
      .subscribe((id: string) => {
        console.log('insert');
      }, (error: any) => {

      });
  }

}
