import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../templates/header/header.component';
import { SidenavComponent } from '../templates/sidenav/sidenav.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:'',component:HeaderComponent, children:
    [
      {path:'index',component:IndexComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
