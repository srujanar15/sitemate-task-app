import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from 'src/app/services/nav.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-operations',
  templateUrl: './task-operations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppTaskOperationsComponent implements OnInit {
  url: string | ArrayBuffer | null;
  format: string;
  @Output() uploadedVideoFile = new EventEmitter();
  showVBtn = false;
  message = '';
  slctdFleNm: any;
  upldFle: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  delId: any;
  stcObj = [
    {
      "id": 1,
      "title": "Fix layout issue on mobile devices",
      "description": "There is a layout issue occurring on mobile devices where certain elements are overlapping or not displaying correctly."
    },
    {
      "id": 2,
      "title": "Implement pagination for search results",
      "description": "Currently, when users perform a search on the platform, all matching results are displayed on a single page."
    },
    {
      "id": 3,
      "title": "Fix sorting issue in product catalog",
      "description": "Users have reported that the product catalog is not sorting items correctly based on price when using the sorting feature."
    }
  ]
  constructor(private router: Router, private navService: NavService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  createJsonObj(){
    this.navService.postJsonData(this.stcObj).subscribe(res => {
      console.log(res);
    })
  }

  fetchJsonObj(){
    this.navService.getJsonData().subscribe((res) => {
      console.log(res);
    })
  }

  updateJsonObj(){
    this.navService.postUpdateJsonData(this.stcObj).subscribe(res => {
      console.log(res);
    })
  }

  deleteJsonObj(){
    if(this.delId === undefined || this.delId === ''){
      this._snackBar.open("Please enter ID to delete", "Close", {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 1500
          });
    }else{
      let fnlData = {
        id: this.delId,
        data: this.stcObj
      }
      this.navService.postDeleteJsonData(fnlData).subscribe(res => {
        console.log(res);
      })
    }
  }
}