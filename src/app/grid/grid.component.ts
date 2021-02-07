import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public users: any[];
  public searchByName: string;
  public seletedColumn: string = 'firstName';

  constructor() { }

  ngOnInit(): void {
    this.initializeData();
  }

  /**
   * This method is will add value into users array.
   * @param None
   * @return None
   */

  private initializeData(): void {
    this.users = [
      {id: 1, firstName: 'Kartick', lastName: 'Dey', email: 'kd@kd.com'},
      {id: 2, firstName: 'Soumen', lastName: 'Dey', email: 'sd@sd.com'},
      {id: 3, firstName: 'Somnath', lastName: 'Lo', email: 'sl@sl.com'},
      {id: 4, firstName: 'Laltu', lastName: 'Pramanik', email: 'lp@lp.com'},
      {id: 5, firstName: 'Gobinda', lastName: 'Bauri', email: 'gb@gb.com'},
      {id: 6, firstName: 'Suvo', lastName: 'Pal', email: 'sp@sp.com'},
    ];
  }

  public onClickColumn(columnName: string): void {
    this.seletedColumn = columnName;
  }

  /**
   * This method is implement to describe or implement the tractBy func in *ngFor directive
   * @param (index: number, user)
   * @return (id: string)
   */
  trackById(index: number, user): string {
    return user.id;
  }

}
