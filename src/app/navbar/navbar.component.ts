import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 navbarOpen = false;
 isLogin: any;
  constructor() {  }

  ngOnInit() {

    // this.authservice.member.subscribe( user => {
    //   if (user) {
    //     this.isLogin = true;
    //   } else {
    //     this.isLogin = false;
    //   }

    //  });

  }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  // get isLogedin () {
  //   if (this.authservice.user !== null) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  }



