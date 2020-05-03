import {Component, OnInit} from "@angular/core";
import {ApiService} from "../services/app-services/api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  public categories: string[];

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.GetCategories().subscribe((result: string[]) => {
      if (result) {
        this.categories = result;
      }
    }, error => {
      console.error(error);
    });
  }
}
