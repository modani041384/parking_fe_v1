export interface DeviceModel {
    id: string;
    name: string;
    status: DeviceStatus;
}

export interface DeviceStatus {
    id: number,
    description: string,
    deviceStatusId: string,
    isDefault: boolean,
}