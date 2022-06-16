import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CameraSearchModel, CameraViewModel } from 'src/app/models/camera/camera.model';
import { ListResponse } from 'src/app/models/common/list-response.model';
import { PagingSearchModel } from 'src/app/models/common/search.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CameraService {
    endpoints = {
        search: `${environment.apiURL}/camera/search`,
    };
    constructor(private http: HttpClient) { }

    getCameraList(search: PagingSearchModel<CameraSearchModel>): Observable<ListResponse<CameraViewModel>> {
        return this.http.post<ListResponse<CameraViewModel>>(this.endpoints.search, search);
    }
}
