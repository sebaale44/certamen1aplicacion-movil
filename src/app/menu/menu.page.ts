import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalComponent } from '../global/global.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  req_usuario:any;
  req_param:any;
  global:any;

  constructor(public router:Router,
              public globalcomponent:GlobalComponent) {
    console.log("estas en la pagina menu");

   this.req_param = this.router.getCurrentNavigation()?.finalUrl?.queryParams
   this.req_usuario = this.req_param.usuario;  


   if(this.req_usuario ==""||this.req_usuario == undefined){
    this.req_usuario="invitado"
   }
    this.global = this.globalcomponent;
   }

  ngOnInit() {
  }

  volvermenu(e:any){
    let url="/home";
      let url_withparameter="/home?usuario="+e.value.login_usuario+"&contraseña"+e.value.login_password;
      this.router.navigateByUrl(url_withparameter);
  }
}
