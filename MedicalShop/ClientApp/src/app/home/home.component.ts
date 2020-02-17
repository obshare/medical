import { Component } from '@angular/core';
import { MedicineshopService } from '../medicineshop.service';
import { Medicine } from '../../Model/Medicine';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  p: number = 1;
  public items: any[];
  public SearchName: string;
  constructor(private readonly _medicineshopService: MedicineshopService) {

  }



  public ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this._medicineshopService.getAll()
      .subscribe(result => {
        console.log(result);
        this.items = result;
      }, error => console.error(error));


  }

}
