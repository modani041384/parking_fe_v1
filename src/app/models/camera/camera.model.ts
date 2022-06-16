import { SearchModel } from "../common/search.model";

export interface CameraModel {
    id: string;
    name: string;
    password: string;
    protocol: string;
    serverName: string;
    streamId: Number;
    cameraId: Number;
    urlTemplate: string;
    userName: string;
}

export interface CameraViewModel {
    id: string;
    name: string;
    password: string;
    protocol: string;
    serverName: string;
    streamId: Number;
    cameraId: Number;
    urlTemplate: string;
    userName: string;
    status: string;
    parkingLaneId: string;
    parkingLaneName: string;
    parkingId: string;
    parkingName: string;
}

export interface CameraSearchModel extends SearchModel {
    status?: string[];
    parkingId?: string;
}