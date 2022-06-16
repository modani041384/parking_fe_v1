import { CameraModel } from "../camera/camera.model";
import { MultigatesModel } from "../multigate/multigate.model";

export interface ParkingLaneViewModel {
    id: number;
    active: string;
    name: string;
    parkingLaneId: string;
    multifunctionGates: MultigatesModel[];
    cameras: CameraModel[];
}
