import {Component, Inject, OnDestroy, OnInit} from "@angular/core";
import {Apollo} from "apollo-angular";
import gql from "graphql-tag";
import {Subscription} from "rxjs";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {HomeComponent} from "../home/home.component";
import {JokeData} from "../interfaces/jokedata";

export const JOKE_QUERY = gql`query jokeQ($category:String!) {
  joke(category:$category){
    value
  }
}`;

@Component({
  selector: "app-joke",
  templateUrl: "./joke.component.html",
  styleUrls: ["./joke.component.css"]
})
export class JokeComponent implements OnInit, OnDestroy {
  public Category: string;
  public Joke: string;
  private JokeSub: Subscription;

  /**
   * Constructor
   * @param dialogRef
   * @param data
   * @param apollo
   */
  constructor(private dialogRef: MatDialogRef<HomeComponent>,
              @Inject(MAT_DIALOG_DATA) private data: JokeData,
              private apollo: Apollo) {
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.Category = this.data.category;
    this.JokeSub = this.apollo.watchQuery<any>({
      query: JOKE_QUERY,
      variables: {
        category: this.Category
      },
      fetchPolicy: "network-only"
    })
      .valueChanges
      .subscribe(({data, loading}) => {
        this.Joke = data.joke.value;
      });
  }

  /**
   * ngOnDestroy
   */
  ngOnDestroy(): void {
    this.JokeSub.unsubscribe();
  }

  /**
   * onCancel
   */
  onCancel(): void {
    this.dialogRef.close();
  }
}
