import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-time-range-setting-modal',
    templateUrl: './time-range-setting-modal.component.html',
    styleUrls: ['./time-range-setting-modal.component.css']
})
export class TimeRangeSettingModalComponent implements OnInit {

    constructor(
        private ngbActiveModal: NgbActiveModal,
    ) { }

    ngOnInit(): void {
    }

    public cancelSetting(): void {
        this.ngbActiveModal.dismiss();
    }
    public saveSetting(): void {
        this.ngbActiveModal.close();
    }

}
