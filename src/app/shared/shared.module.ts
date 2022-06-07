import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from './modules/material.module';

const COMPONENTS = [NavComponent, FooterComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [COMPONENTS, MaterialModule],
})
export class SharedModule {}
