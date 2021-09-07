import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './headers/top-bar.component';
import { FooterComponent } from './footers/footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TopBarComponent, FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
