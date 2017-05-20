import { Component } from '@angular/core';
import { AbstractControl ,FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

export class User {
  public first: string;
  public last: string;
  public user: string;
  public pswd: string;
  public confirm: string
}

function pswdMatcher(c: AbstractControl) {
  return c.get('pswd').value === c.get('confirm').value ? null : { 'nomatch' : true }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private reactiveUser: User;

  private templateFirstName: string;

  // private myForm = new FormGroup({
  // first: new FormControl(),
  // last: new FormControl(),
  // user: new FormControl(),
  // pswd: new FormControl(),
  // confirm: new FormControl()
  // });

  private myForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.templateFirstName ='tshay';

    this.myForm = this.fb.group({
      first: ['', [Validators.required]],
      last: '',
      account: this.fb.group({
        user: '',
        pswd: [, [Validators.required]],
        confirm: [, [Validators.required]]
      }, { validator: pswdMatcher})
    });

    this.myForm.patchValue({
      first: 'shay',
      last: 'nadav'
    });
  }

  private onSubmit(form: FormGroup) {
    console.log(form);
    this.reactiveUser = form.value;
    console.log(this.reactiveUser);
  }

}
