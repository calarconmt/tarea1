export interface Machstatusinterface {
    statusLog: Array<Machstatusinterfacelog>;
    statusMachine: any;
}

export interface Machstatusinterfacelog {
    statusId: number;
    statusName: string;
    color: string;
    percentage: number;
}
