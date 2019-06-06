import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
// import { CustomizerComponent } from './customizer/customizer.component';
import { NotificationSidebarComponent } from './notification-sidebar/notification-sidebar.component';
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';

@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        // CustomizerComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective,
        NgbModule,
        TranslateModule,
        FormsModule, ReactiveFormsModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        TranslateModule,
        FormsModule, ReactiveFormsModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        // CustomizerComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective,
    ]
})
export class SharedModule { }
