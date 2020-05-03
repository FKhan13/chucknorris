import {Component, OnInit} from "@angular/core";
import {ApiService} from "../services/app-services/api.service";
import {MatDialog} from "@angular/material/dialog";
import {JokeComponent} from "../joke/joke.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  public categories: string[];

  constructor(private api: ApiService, private dialog: MatDialog) {
  }

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.api.GetCategories().subscribe((result: string[]) => {
      if (result) {
        this.categories = result;
      }
    }, error => {
      console.error(error);
    });
  }

  /**
   * catOnClick
   * @param category
   */
  catOnClick(category: string) {
    this.dialog.open(JokeComponent, {
      data: {
        category: category
      }
    });
  }
}
