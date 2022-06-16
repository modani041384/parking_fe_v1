import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponse } from 'src/app/models/common/list-response.model';
import { DeviceStatus } from 'src/app/models/devices/device.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ManagementService {

    endpoints = {
        deviceStatus: `${environment.apiURL}/device-status/get-all`,
    }
    constructor(private httpClient: HttpClient) { }

    getDeviceStatuses(): Observable<ListResponse<DeviceStatus>> {
        return this.httpClient.get<ListResponse<DeviceStatus>>(this.endpoints.deviceStatus);
    }
}
