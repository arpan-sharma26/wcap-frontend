import { Component } from '@angular/core';
import { ComponentInteractionService } from './component-interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-material-login-template';
  public path: any;

  constructor(
    public interaction: ComponentInteractionService,
    private route: Router
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.path = window.location.pathname;
  }

  onclickRegister() {
    this.route.navigate(['/register']);
  }
}
