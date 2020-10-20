import { NgModule,  } from '@angular/core';
import { CommonModule,  } from "@angular/common";

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    WelcomeRoutingModule, 
    DemoNgZorroAntdModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
