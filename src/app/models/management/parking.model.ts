import { ParkingLaneViewModel } from "./parkingLane.model";
import { SlotTypeConfig } from "./SlotType.model";

export interface ParkingViewModel {
    parkingId: string,
    name: string,
    address: string,
    area: string,
    slotTypeConfigs: SlotTypeConfig[],
    cardAssignment: CardAssignment[],
    parkingLanes: ParkingLaneViewModel[]
};

export interface CardAssignment {
}

export interface AddParkingModel {
    name: string,
    address: string,
    area: string,
}