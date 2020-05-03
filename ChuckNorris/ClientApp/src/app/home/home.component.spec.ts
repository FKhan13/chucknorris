import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {HomeComponent} from "./home.component";
import {ApiService} from "../services/app-services/api.service";
import {of} from "rxjs";
import {MatDialogModule, MatListModule} from "@angular/material";


describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let apiSpy: any;

  beforeEach(async(() => {
    const cats: string[] = ["test1", "test2"];

    apiSpy = jasmine.createSpyObj("ApiService", ["GetCategories"]);
    apiSpy.GetCategories.and.callFake(() => {
      return of(cats);
    });

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [MatDialogModule, MatListModule],
      providers: [{provide: ApiService, useValue: apiSpy}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();

    expect(apiSpy.GetCategories).toHaveBeenCalledTimes(1);
  });
});
