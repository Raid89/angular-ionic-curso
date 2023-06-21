import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './pages/login/login.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginPage
  ]
})
export class AuthModule {}
