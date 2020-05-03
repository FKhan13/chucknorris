import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {JOKE_QUERY, JokeComponent} from "./joke.component";
import {MAT_DIALOG_DATA, MatDialogRef, MatListModule, MatProgressSpinnerModule} from "@angular/material";
import {JokeData} from "../interfaces/jokedata";
import {ApolloTestingController, ApolloTestingModule} from "apollo-angular/testing";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe("JokeComponent", () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;

  const testInputdata: JokeData = {
    category: "test"
  };

  let dialogRefSpy: any;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    // Configure spys
    dialogRefSpy = jasmine.createSpyObj("MatDialogRef", ["close"]);
    dialogRefSpy.close.and.callFake(() => {
      return;
    });

    TestBed.configureTestingModule({
        declarations: [JokeComponent],
        imports: [
          MatListModule,
          MatProgressSpinnerModule,
          ApolloTestingModule
        ],
        providers: [
          {provide: MAT_DIALOG_DATA, useValue: testInputdata},
          {provide: MatDialogRef, useValue: dialogRefSpy}
        ]
      }
    )
      .compileComponents();

    controller = TestBed.get(ApolloTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();

    const result = controller.expectOne(JOKE_QUERY);
    // Check query variables
    expect(result.operation.variables.category).toEqual("test");

    result.flush({
      data: {
        joke: {
          value: "random joke"
        }
      }
    });

    fixture.detectChanges();

    controller.verify();
  });

  it("should close", () => {
    const CloseButton: DebugElement = fixture.debugElement.query(
      By.css("#close")
    );

    CloseButton.triggerEventHandler("click", new Event("Close"));
    fixture.detectChanges();

    expect(dialogRefSpy.close).toHaveBeenCalledTimes(1);
  });
});
