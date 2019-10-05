import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GamePageComponent } from './game-page.component';
import { MatButtonModule, MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    GamePageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule.forChild([
      { path: '', component: GamePageComponent }
    ])
  ]
})
export class GamePageModule { }
