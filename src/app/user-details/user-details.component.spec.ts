import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersList } from './user-details.interface';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      imports: [HttpClientModule],
      providers: [HttpClient],
    });
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //   it('should create', () => {
  //     expect(component).toBeTruthy();
  //   });

  it('Should render the title using toEqual Method', () => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    expect(component.title).toEqual('Users');
  });

  it('Should render the title using toContain Method', () => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    expect(component.title).toContain('se');
  });

  it('Should render the title using toBeTruthy Method', () => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    expect(component.title).toBeTruthy();
  });

  it('Should render the data using toBe Method', () => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    expect(component.users?.forEach((data: any) => data)).toBe();
  });
});
