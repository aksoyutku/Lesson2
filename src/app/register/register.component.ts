import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //   const submitBtn = document.querySelector('#submitBtn');
    //   if (submitBtn)
    //     submitBtn.addEventListener('click', (e) => {
    //       e.preventDefault();
    //     });
  }

  firstName = 'First Name';
  firstNameMsg = 'Please enter your first name';
  lastName = 'Last Name';
  lastNameMsg = 'Please enter your last name';
  userName = 'Username';
  userNameMsg = 'Please enter your username';
  password = 'Password';
  passwordMsg = 'Please enter your password';
}
