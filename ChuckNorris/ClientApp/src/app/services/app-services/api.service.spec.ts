import {TestBed} from "@angular/core/testing";

import {ApiService} from "./api.service";
import {HttpClientModule} from "@angular/common/http";
import {getBaseUrl} from "../../app.module";

describe("ApiService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [
      {provide: "BASE_URL", useValue: getBaseUrl()}
    ]
  }));

  it("should create", () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
