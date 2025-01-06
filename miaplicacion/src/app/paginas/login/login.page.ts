import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/componentes/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports:[IonicModule, FormsModule, HeaderComponent]
})
export class LoginPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  usuario:string ="";
  password:string ="";
  mensaje:string ="";

  iniciar_sesion(){
    if (this.usuario ==""|| this.password ==""){
      this.mensaje = "Todos los campos deben ser llenados"
    }
    else{
      this.mensaje="";
      this.route.navigate(['/home']);
    }
    
  };

}
