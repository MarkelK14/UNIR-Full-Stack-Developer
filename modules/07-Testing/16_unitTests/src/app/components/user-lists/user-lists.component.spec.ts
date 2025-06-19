import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListsComponent } from './user-lists.component';
import { By } from '@angular/platform-browser';

describe('UserListsComponent', () => {
  let component: UserListsComponent;
  let fixture: ComponentFixture<UserListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ha sido cargado el component userlist', () => {
    expect(component).toBeTruthy()
  })

  it('existe la variable texto y que tiene el valor Probando unitTest en React', () => {
    expect(component.texto).toEqual('Probando unitTest en Angular')
  })

  it('existe un div que tiene la clase parrafito que renderiza la propiedad texto y lo pinta', () => {
    fixture.detectChanges()
    const htmlComponent = fixture.nativeElement as HTMLElement;
    expect(htmlComponent.querySelector('.parrafito')?.textContent).toContain('Probando unitTest en Angular')
  })

  it('comprobar que hay un div que tiene el fondo de background red', () => {
    fixture.detectChanges()
    const div = fixture.debugElement.query(By.css('.caja'))
    expect(div.nativeElement.style.backgroundColor).toBe('red')
  })

  it('onclick deberia modificar el valor de estado de false a true', () => {
    const userListsComponent = new UserListsComponent()
    expect(userListsComponent.estado).toBeFalse()
    userListsComponent.onClick()
    expect(userListsComponent.estado).toBeTrue()
  })


});
