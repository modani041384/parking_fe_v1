import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddParkingModel, ParkingViewModel } from 'src/app/models/management/parking.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ParkingService {
    endpoints = {
        add: `${environment.apiURL}/parking/add-new`,
    };
    constructor(private httpClient: HttpClient) { }

    addNewParking(parking: AddParkingModel): Observable<ParkingViewModel> {
        return this.httpClient.post<ParkingViewModel>(this.endpoints.add, parking);
    }
}
