import { Component, OnInit, Input } from '@angular/core';
import { DatasService } from './datas.service';
import { ObservableLike } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css'],
  providers: [DatasService]
})
export class DatasComponent implements OnInit {
  private userDescription: object;
  private listUsers: any[] = [];
  private cont=0;

  constructor(private datasService: DatasService) {
    console.log(this.datasService);
  }

  async ngOnInit() {
    this.userDescription = await this.datasService.getUser('mojombo');
    this.listUsers.push(await this.datasService.getUsers());
  }

async  getUser(user){
    this.userDescription = await this.datasService.getUser(user);
}

async  changeList(flag){
    flag?  this.cont+=45:this.cont-=45;;
    
    this.listUsers=[];
   this.listUsers.push(await this.datasService.getUsersSince(this.cont));
}

}
