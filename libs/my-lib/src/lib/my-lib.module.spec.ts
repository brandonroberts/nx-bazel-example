import { async, TestBed } from '@angular/core/testing';
import { MyLibModule } from './my-lib.module';

describe('MyLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyLibModule).toBeDefined();
  });
});
