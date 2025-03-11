export interface BusApiBusInfo {
    predictTime: string | null;
    locationNo: string | null;
    leftMin: string | null;
    prevMin: string | null;
    nextTime: string | null;
    beforeTime: string | null;
}

export interface BusApiStation {
    busStation: string;
    bus: {
        [key: string]: BusApiBusInfo;
    };
}