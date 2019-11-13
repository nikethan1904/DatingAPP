import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule, ButtonsModule, ModalModule } from 'ngx-bootstrap';
import {RouterModule} from '@angular/router';
import { NgxGalleryModule } from 'ngx-gallery';
import {TimeAgoPipe} from 'time-ago-pipe';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { MemberListComponent } from './members/member-list/member-list.component';
import {UserService} from './_services/user.service';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_gaurds/auth.guard';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolver/member-edit.resolver';
import { PreventUnsavedChanges } from './_gaurds/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { HasRoleDirective } from './_directives/hasRole.directive';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { PhotoManagementComponent } from './admin/photo-management/photo-management.component';
import { RolesModalComponent } from './admin/roles-modal/roles-modal.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { ListsResolver } from './_resolver/lists.resolver';
import { MessagesResolver } from './_resolver/messages.resolver';
import { AdminService } from './_services/admin.service';

export function tokenGetter() {
   return localStorage.getItem('token');
}

export class CustomHammerConfig extends HammerGestureConfig  {
   overrides = {
       pinch: { enable: false },
       rotate: { enable: false }
   };
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ListsComponent,
      MessagesComponent,
      MemberListComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      PhotoEditorComponent,
      TimeAgoPipe,
      MemberMessagesComponent,
      AdminPanelComponent,
      HasRoleDirective,
      UserManagementComponent,
      PhotoManagementComponent,
      RolesModalComponent

   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      TabsModule.forRoot(),
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      PaginationModule.forRoot(),
      ButtonsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      ModalModule.forRoot(),
      NgxGalleryModule,
      FileUploadModule,
      JwtModule.forRoot({
         config: {
            tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      UserService,
      MemberDetailResolver,
      MemberListResolver,
      MemberEditResolver,
      PreventUnsavedChanges,
      ListsResolver,
      MessagesResolver,
      AdminService,
      { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }

   ],
   entryComponents: [
      RolesModalComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
