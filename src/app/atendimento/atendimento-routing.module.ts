import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtendimentoListComponent } from '../components/atendimentos/atendimento-list/atendimento-list.component';
import { AtendimentoRegisterComponent } from '../components/atendimentos/atendimento-register/atendimento-register.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
    //home
    {
        path: '',
        component: AtendimentoListComponent,
        canActivate: [AuthGuard]
    },
    //registrar atendimentos
    {
        path: 'register',
        component: AtendimentoRegisterComponent,
        canActivate: [AuthGuard]
    }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule { }
