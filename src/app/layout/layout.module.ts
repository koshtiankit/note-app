import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        SharedModule,
        FormsModule
    ],
    declarations: [LayoutComponent],
    providers: [
        LayoutComponent
    ]
})

export class LayoutModule {
}
