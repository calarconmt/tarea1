export interface Machstatusmodels {
    modelLogs: Array<Machstatuslogs>;
}

export interface Machstatuslogs {
    machineTypeId: number;
    machineTypeName: string;
}
