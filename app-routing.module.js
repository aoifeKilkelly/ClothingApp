import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { RouterModule, Routes} from '@angular/router';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomePageComponent } from 'src/app/home-page/home-page.component';
const routes = [
    {
        path: 'read',
        component: ReadComponent
    },
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'edit/:id',
        component: EditComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map