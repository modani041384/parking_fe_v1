
export interface SlotTypeConfig {
    parkingId: string;
    slotTypeId: string;
    quantity: number;
    slotType?: SlotType;
}

export interface SlotType {
    slotTypeId: string;
    name: string;
    description: string;
}
