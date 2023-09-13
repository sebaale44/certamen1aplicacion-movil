import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent  implements OnInit {

  baseUrl="https://global-url-here";

  constructor(
    private toascontroller: ToastController,
  ) { }

  async loadToast(msg:any){
    if(msg ==""){
      msg = "ingrese datos";
    }
    const toast = await this.toascontroller.create({
      message: msg,
      duration:1500,
      position:'bottom'
    });
    await toast.present();  
  }


  ngOnInit() {}

}
