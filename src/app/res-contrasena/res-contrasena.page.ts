import { Component, OnInit } from '@angular/core';
import { GlobalComponent } from '../global/global.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-res-contrasena',
  templateUrl: './res-contrasena.page.html',
  styleUrls: ['./res-contrasena.page.scss'],
})
export class ResContrasenaPage implements OnInit {

  reest_password: any;
  reest_usuario: any;
  reest_reespassword: any;
  global:any;
  constructor(public router: Router,
              public globalcomponent:GlobalComponent) {  this.global = this.globalcomponent;}

  ngOnInit() {
  }

  guardarform(e: any){
    if(e.value.reest_usuario == "" || e.value.reest_usuario == undefined){
      this.global.loadToast("Ingrese Usuario");
    }else if(e.value.reest_password == "" || e.value.reest_password == undefined){
      this.global.loadToast("Ingrese contraseña");
    }else if(e.value.reest_reespassword == "" || e.value.reest_reespassword == undefined){
      this.global.loadToast("Ingrese la nueva contraseña nuevamente");
    }else{
      let url="/home";
      let url_withparameter="/home?usuario="+e.value.login_usuario+"&contraseña"+e.value.login_password;
      this.router.navigateByUrl(url_withparameter);
     }   
  }
}
