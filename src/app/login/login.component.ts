import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Aqui você pode chamar um serviço de autenticação para validar as credenciais
      if (this.email === 'admin@example.com' && this.password === 'senha123') {
        this.showSuccessMessage = true;
        this.showErrorMessage = false;
        // Redirecione o usuário para a página desejada
      } else {
        this.showSuccessMessage = false;
        this.showErrorMessage = true;
      }
    }
  }
}