import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { LocalSettingsEntity } from 'src/app/entity/setting-entity';
import { SupportedLocationEntity } from 'src/app/entity/supported-location-entity';
import { LocalSettingsService } from 'src/app/service/settings/local-settings.service';
import { SupportedLocationConstant } from 'src/app/constant/supported-location-constant';

@Component({
    selector: 'app-location-setting-modal',
    templateUrl: './location-setting-modal.component.html',
    styleUrls: ['./location-setting-modal.component.css']
})
export class LocationSettingModalComponent implements OnInit {

    public supportedLocations: SupportedLocationEntity[] = SupportedLocationConstant.SUPPORTED_LOCATIONS;

    public localSettingFormGroup = new FormGroup({
        location: new FormControl(''),
    });

    constructor(
        private ngbActiveModal: NgbActiveModal,
        private localSettingsService: LocalSettingsService,
    ) {
        this.loadSettings();
    }

    ngOnInit(): void {
    }

    public saveSetting(): void {
        const saveEntity = this.getSaveEntity();
        this.localSettingsService.persistSetting(saveEntity);
        this.ngbActiveModal.close();
    }

    private getSaveEntity(): LocalSettingsEntity {
        const { location } = this.localSettingFormGroup.value;
        return {
            location: SupportedLocationConstant.getLocationById(location),
        };
    }

    public cancelSetting(): void {
        this.ngbActiveModal.dismiss();
    }

    private loadSettings(): void {
        const { location } = this.localSettingsService.getSettings();
        const { locationId } = location ? location
            : SupportedLocationConstant.DEFAULT_SUPPORTED_LOCATION;

        this.localSettingFormGroup.setValue({
            location: locationId,
        });
    }

}
