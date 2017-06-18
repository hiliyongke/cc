import { Component, OnInit } from '@angular/core';

import { ModalService } from '../shared/modal/modal.service';
import { ConfirmConfig, AlertType, AlertConfig } from '../shared/modal/modal-model';


@Component({
  selector: 'modal-demo',
  template: `
     <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
              <button type="button" class="btn btn-info" (click)="openInfo()">Info alert</button>
              <button type="button" class="btn btn-warning" (click)="openWarning()">Warning alert</button>
              <button type="button" class="btn btn-danger" (click)="openError()">Error alert</button>
              <button type="button" class="btn btn-primary" (click)="openConfirm()">confirm</button>
            </div>
        </div>
        <div class="row">
          <div  class="col-md-12">
            <div class="c-mt15">
                 <p class="c-line-title">说明</p>
                 组件目录:src/app/modules/shared/modal
            </div>
          </div>
      </div>
      
    </div>
  `
})
export class ModalDemoComponent {


  constructor(private modalService: ModalService) { }



  openInfo() {
    const alertCfg = new AlertConfig(AlertType.INFO, '标题', '这是一条INFO消息!');
    this.modalService.alert(alertCfg);
  }


  openWarning() {
    const alertCfg = new AlertConfig(AlertType.WARNING, '标题', '这是一条WARNING消息!');
    this.modalService.alert(alertCfg);
  }

  openError() {
    const alertCfg = new AlertConfig(AlertType.ERROR, '标题', '这是一条ERROR消息!');
    this.modalService.alert(alertCfg);
  }

  openConfirm() {
    const confirmCfg = new ConfirmConfig('您打开了一个确认框！');
    this.modalService.confirm(confirmCfg);
  }

}