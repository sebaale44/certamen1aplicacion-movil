import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalComponent } from '../global/global.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login_password: any;
  login_usuario: any;
  global:any;

  constructor(public router: Router,
              public globalcomponent:GlobalComponent) { this.global = this.globalcomponent;}

  loginform(e: any){
    console.log(" datos:",e.value);

    if(e.value.login_usuario == "" || e.value.login_usuario == undefined){
      this.global.loadToast("Ingrese Usuario");
    }else if(e.value.login_password == "" || e.value.login_password == undefined){
      this.global.loadToast("Ingrese contraseña");
    }else{
     let url="/home";
     let url_withparameter="/menu?usuario="+e.value.login_usuario+"&contraseña"+e.value.login_password;
     this.router.navigateByUrl(url_withparameter);
    }   
  }

  ngOnInit() {
  }

}
