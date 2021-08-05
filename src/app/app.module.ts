import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingOneComponent } from './components/binding-one/binding-one.component';
import { BindingTwoComponent } from './components/binding-two/binding-two.component';
import { BindingThreeComponent } from './components/binding-three/binding-three.component';
import { BindingFourComponent } from './components/binding-four/binding-four.component';
import { DirectiveOneComponent } from './components/directive-one/directive-one.component';
import { DirectiveTwoComponent } from './components/directive-two/directive-two.component';
import { PipeOneComponent } from './components/pipe-one/pipe-one.component';
import { PipeTwoComponent } from './components/pipe-two/pipe-two.component';
import { MarkTextDirective } from './directives/mark-text.directive';
import { MarkHashtagDirective } from './directives/mark-hashtag.directive';
import { EmojiToScorePipe } from './pipes/emoji-to-score.pipe';
import { CalculatePipe } from './pipes/calculate.pipe';

@NgModule({
  declarations: [
    AppComponent,

    BindingOneComponent,
    BindingTwoComponent,
    BindingThreeComponent,
    BindingFourComponent,
    DirectiveOneComponent,
    DirectiveTwoComponent,
    PipeOneComponent,
    PipeTwoComponent,

    MarkTextDirective,
    MarkHashtagDirective,
    EmojiToScorePipe,
    CalculatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
